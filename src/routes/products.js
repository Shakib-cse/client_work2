import express from 'express';
import { products } from '../data/store.js';

const router = express.Router();

// Get all products with filters
router.get('/', (req, res) => {
  try {
    const { category, featured, bestseller, search } = req.query;
    let filtered = [...products];

    if (category) {
      filtered = filtered.filter(p => p.category === category);
    }
    if (featured === 'true') {
      filtered = filtered.filter(p => p.featured === true);
    }
    if (bestseller === 'true') {
      filtered = filtered.filter(p => p.bestseller === true);
    }
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
      );
    }

    res.json({ products: filtered, total: filtered.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single product
router.get('/:id', (req, res) => {
  try {
    const product = products.find(p => p.id === req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
