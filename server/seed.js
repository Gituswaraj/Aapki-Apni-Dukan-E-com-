const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const User = require('./models/user');

// Load environment variables
dotenv.config();

// Sample products data
const products = [
  {
    title: 'Fresh Apples',
    description: 'Sweet and juicy apples freshly picked from the orchard.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6',
    category: 'fruits',
    quantity: '1 kg',
    inStock: true,
    featured: true,
    brand: 'Organic Farms',
    weight: '1 kg',
    ratings: 4.5,
    numReviews: 12
  },
  {
    title: 'Organic Bananas',
    description: 'Naturally ripened organic bananas.',
    price: 60,
    image: 'https://images.unsplash.com/photo-1543218024-57a70143c369',
    category: 'fruits',
    quantity: '1 dozen',
    inStock: true,
    featured: true,
    brand: 'Organic Farms',
    weight: '1 kg',
    ratings: 4.2,
    numReviews: 8
  },
  // Add more products as needed
];

// Sample admin user
const adminUser = {
  name: 'Admin User',
  email: 'admin@example.com',
  password: 'admin123',
  role: 'admin'
};

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Seed function
const seedDatabase = async () => {
  try {
    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});
    
    // Insert products
    await Product.insertMany(products);
    console.log('Products seeded successfully');
    
    // Create admin user
    const admin = new User(adminUser);
    await admin.save();
    console.log('Admin user created successfully');
    
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();