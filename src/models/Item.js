import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'active'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model('Item', itemSchema);
export default Item;
