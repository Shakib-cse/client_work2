import express from 'express';
import { users } from '../data/store.js';

const router = express.Router();

// Register or login with wallet
router.post('/wallet', (req, res) => {
  try {
    const { walletAddress } = req.body;
    const address = walletAddress.toLowerCase();

    let user = users.find(u => u.walletAddress === address);

    if (!user) {
      user = {
        id: Date.now().toString(),
        walletAddress: address,
        role: 'user',
        createdAt: new Date().toISOString()
      };
      users.push(user);
    }

    res.json({ user, token: 'mock-jwt-token' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
