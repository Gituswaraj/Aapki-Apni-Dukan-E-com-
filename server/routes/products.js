
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');

// Get products by department
router.get('/department/:dept', async (req, res) => {
  try {
    const { dept } = req.params;
    
    // Validate department parameter
    if (!['grocery', 'departmental', 'other'].includes(dept)) {
      return res.status(400).json({ message: 'Invalid department' });
    }
    
    const products = await Product.find({ department: dept });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all grocery and departmental products
router.get('/store-products', async (req, res) => {
  try {
    const { sort, category } = req.query;
    
    // Build filter object
    const filter = {
      department: { $in: ['grocery', 'departmental'] }
    };
    
    // Add category filter if provided
    if (category && category !== 'all') {
      filter.category = category;
    }
    
    // Build sort object
    let sortOption = {};
    
    if (sort === 'price-low-to-high') {
      sortOption = { price: 1 };
    } else if (sort === 'price-high-to-low') {
      sortOption = { price: -1 };
    } else if (sort === 'newest') {
      sortOption = { createdAt: -1 };
    } else {
      sortOption = { createdAt: -1 }; // Default sort
    }
    
    const products = await Product.find(filter).sort(sortOption);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get departmental products by category
router.get('/departmental/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Product.find({ 
      department: 'departmental',
      category: category 
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search products API (real-time search)
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    // Create a regex for case-insensitive search
    const searchRegex = new RegExp(query, 'i');
    
    // Search in title, description, and category
    const products = await Product.find({
      $or: [
        { title: searchRegex },
        { description: searchRegex },
        { category: searchRegex }
      ]
    }).limit(20); // Limit results for performance
    
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update product inventory API
router.put('/inventory/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    
    if (!quantity && quantity !== 0) {
      return res.status(400).json({ message: 'Quantity is required' });
    }
    
    const product = await Product.findByIdAndUpdate(
      id,
      { quantity },
      { new: true }
    );
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get product recommendations API
router.get('/recommendations', auth, async (req, res) => {
  try {
    // In a real app, this would use user's browsing history and purchases
    // For now, we'll return products from the same category as their recent views
    const { recentlyViewed, purchaseHistory } = req.query;
    
    let recommendedProducts = [];
    
    if (recentlyViewed) {
      // Get the product to find similar ones
      const product = await Product.findById(recentlyViewed);
      if (product) {
        // Find products in the same category
        recommendedProducts = await Product.find({
          category: product.category,
          _id: { $ne: product._id } // Exclude the current product
        }).limit(10);
      }
    } else {
      // If no recently viewed product, return popular products
      recommendedProducts = await Product.find({})
        .sort({ createdAt: -1 })
        .limit(10);
    }
    
    res.json(recommendedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update product price API
router.put('/price/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;
    
    if (!price && price !== 0) {
      return res.status(400).json({ message: 'Price is required' });
    }
    
    const product = await Product.findByIdAndUpdate(
      id,
      { price },
      { new: true }
    );
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Seasonal Specials API
router.get('/seasonal-specials', async (req, res) => {
  try {
    // In a real app, this would determine the current season/festival
    // For now, we'll use a query parameter
    const { season } = req.query;
    
    let filter = {
      department: 'departmental',
      category: 'seasonal'
    };
    
    if (season) {
      // Add more specific filtering based on season
      filter.description = new RegExp(season, 'i');
    }
    
    const products = await Product.find(filter);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Organic & Natural Products API
router.get('/organic-natural', async (req, res) => {
  try {
    const products = await Product.find({
      department: 'departmental',
      category: 'organic'
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ready to Cook Products API
router.get('/ready-to-cook', async (req, res) => {
  try {
    const products = await Product.find({
      department: 'departmental',
      category: 'ready-to-cook'
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// International Foods API
router.get('/international-foods', async (req, res) => {
  try {
    const products = await Product.find({
      department: 'departmental',
      category: 'international'
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Health & Wellness Products API
router.get('/health-wellness', async (req, res) => {
  try {
    const products = await Product.find({
      department: 'departmental',
      category: 'health'
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Filter Products API
router.get('/filter', async (req, res) => {
  try {
    const { category, minPrice, maxPrice, rating } = req.query;
    
    // Build filter object
    const filter = {};
    
    if (category) {
      filter.category = category;
    }
    
    // Add price range filter
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    
    // Add rating filter (assuming products have a rating field)
    if (rating) {
      filter.rating = { $gte: Number(rating) };
    }
    
    const products = await Product.find(filter);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Recently Viewed Products API
router.get('/recently-viewed', auth, async (req, res) => {
  try {
    const { productIds } = req.query;
    
    if (!productIds) {
      return res.status(400).json({ message: 'Product IDs are required' });
    }
    
    // Convert comma-separated IDs to array
    const ids = productIds.split(',');
    
    // Find products by IDs
    const products = await Product.find({
      _id: { $in: ids }
    });
    
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Product Comparison API
router.get('/compare', async (req, res) => {
  try {
    const { productIds } = req.query;
    
    if (!productIds) {
      return res.status(400).json({ message: 'Product IDs are required' });
    }
    
    // Convert comma-separated IDs to array
    const ids = productIds.split(',');
    
    if (ids.length > 4) {
      return res.status(400).json({ message: 'Maximum 4 products can be compared' });
    }
    
    // Find products by IDs
    const products = await Product.find({
      _id: { $in: ids }
    });
    
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Product Sharing API
router.get('/share/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const product = await Product.findById(id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    // Generate a shareable link (in a real app, this might include tracking parameters)
    const shareableLink = `${req.protocol}://${req.get('host')}/product/${id}`;
    
    res.json({ 
      product,
      shareableLink
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Product Availability API
router.get('/availability/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { location } = req.query;
    
    if (!location) {
      return res.status(400).json({ message: 'Location is required' });
    }
    
    const product = await Product.findById(id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    // In a real app, this would check inventory at specific locations
    // For now, we'll just check if the product has quantity > 0
    const isAvailable = product.quantity && parseInt(product.quantity) > 0;
    
    res.json({
      product,
      isAvailable,
      location
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;