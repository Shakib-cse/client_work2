import express from 'express';
import { categories } from '../data/store.js';

const router = express.Router();

// Get all categories
router.get('/', (req, res) => {
  try {
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get category by slug
router.get('/:slug', (req, res) => {
  try {
    const category = categories.find(c => c.slug === req.params.slug);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
