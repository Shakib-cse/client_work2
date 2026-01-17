import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  walletAddress: { type: String, required: true, unique: true, lowercase: true },
  email: { type: String, sparse: true },
  name: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });

userSchema.pre('save', async function(next) {
  if (this.walletAddress) {
    this.walletAddress = this.walletAddress.toLowerCase();
  }
  next();
});

export default mongoose.model('User', userSchema);
