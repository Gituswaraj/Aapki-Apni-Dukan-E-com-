// ... existing code ...
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  department: {
    type: String,
    enum: ['grocery', 'departmental', 'other'],
    default: 'grocery'
  },
  quantity: {
    type: String,
    required: true
  },
  // ... rest of the existing fields ...
}, { timestamps: true });
// ... existing code ...