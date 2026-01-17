import express from 'express';
import { orders, products } from '../data/store.js';

const router = express.Router();

// Create order
router.post('/', (req, res) => {
  try {
    const order = {
      id: Date.now().toString(),
      ...req.body,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    orders.push(order);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get orders by wallet address
router.get('/wallet/:address', (req, res) => {
  try {
    const userOrders = orders.filter(
      o => o.walletAddress.toLowerCase() === req.params.address.toLowerCase()
    );
    res.json(userOrders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single order
router.get('/:id', (req, res) => {
  try {
    const order = orders.find(o => o.id === req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
