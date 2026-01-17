import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/Product.js';
import Category from '../models/Category.js';

dotenv.config();

const categories = [
  {
    name: 'Sofas',
    slug: 'sofas',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    productCount: 15,
  },
  {
    name: 'Chairs',
    slug: 'chairs',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
    productCount: 18,
  },
  {
    name: 'Tables',
    slug: 'tables',
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80',
    productCount: 15,
  },
  {
    name: 'Lighting',
    slug: 'lighting',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    productCount: 17,
  },
  {
    name: 'Storage',
    slug: 'storage',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    productCount: 15,
  },
  {
    name: 'Decor',
    slug: 'decor',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    productCount: 20,
  },
];

const sampleProducts = [
  {
    name: 'Elora Velvet Sofa',
    description: 'Luxurious velvet sofa with deep button tufting and solid oak legs.',
    price: 2899,
    originalPrice: 3599,
    category: 'sofas',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80'],
    inStock: true,
    rating: 4.8,
    reviews: 124,
    colors: ['Terracotta', 'Sage Green', 'Charcoal'],
    materials: ['Velvet', 'Oak'],
    dimensions: { width: 220, height: 85, depth: 95 },
    featured: true,
    bestseller: true,
  },
  {
    name: 'Oslo Armchair',
    description: 'Mid-century modern armchair with walnut frame and bouclé upholstery.',
    price: 1249,
    category: 'chairs',
    images: ['https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80'],
    inStock: true,
    rating: 4.9,
    reviews: 156,
    colors: ['Cream', 'Camel', 'Forest Green'],
    materials: ['Walnut', 'Bouclé'],
    dimensions: { width: 75, height: 80, depth: 82 },
    featured: true,
    bestseller: true,
  },
  {
    name: 'Mika Coffee Table',
    description: 'Organic-shaped coffee table in solid mango wood.',
    price: 849,
    originalPrice: 999,
    category: 'tables',
    images: ['https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80'],
    inStock: true,
    rating: 4.7,
    reviews: 45,
    materials: ['Mango Wood'],
    dimensions: { width: 120, height: 40, depth: 60 },
    bestseller: true,
  },
  {
    name: 'Luna Pendant Light',
    description: 'Hand-blown glass pendant with brass hardware.',
    price: 445,
    category: 'lighting',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80'],
    inStock: true,
    rating: 4.9,
    reviews: 67,
    colors: ['Amber', 'Smoke', 'Clear'],
    materials: ['Glass', 'Brass'],
    featured: true,
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Category.deleteMany({});
    await Product.deleteMany({});
    console.log('Cleared existing data');

    // Insert categories
    await Category.insertMany(categories);
    console.log('Categories seeded');

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Products seeded');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
