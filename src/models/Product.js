import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  category: { type: String, required: true },
  images: [{ type: String }],
  inStock: { type: Boolean, default: true },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  colors: [{ type: String }],
  materials: [{ type: String }],
  dimensions: {
    width: Number,
    height: Number,
    depth: Number
  },
  featured: { type: Boolean, default: false },
  bestseller: { type: Boolean, default: false },
  new: { type: Boolean, default: false }
}, { timestamps: true });

productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ category: 1 });

export default mongoose.model('Product', productSchema);
