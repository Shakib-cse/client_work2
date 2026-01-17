import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  walletAddress: { type: String, required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    selectedColor: String
  }],
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  paymentMethod: { type: String, default: 'crypto' },
  transactionHash: String,
  shippingAddress: {
    fullName: String,
    address: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  }
}, { timestamps: true });

orderSchema.index({ walletAddress: 1 });

export default mongoose.model('Order', orderSchema);
