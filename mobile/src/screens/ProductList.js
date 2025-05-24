import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { CartContext } from '../context/CartContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProductList = ({ route, navigation }) => {
  // In a real app, we would fetch products based on category from route.params
  // For demo purposes, we'll use mock products
  const { category } = route.params || { category: 'All Products' };
  
  const { addToCart } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample products data
  const allProducts = [
    {
      id: 101,
      title: "Real Fruit Power Masala Mixed Fruit Juice",
      category: "Beverages",
      price: 120,
      image: "https://m.media-amazon.com/images/I/61eDXs9QPML.jpg",
      description: "A refreshing mixed fruit juice with a hint of masala."
    },
    {
      id: 102,
      title: "Organic Brown Rice",
      category: "Grains",
      price: 85,
      image: "https://m.media-amazon.com/images/I/71Y56-ZGdHL._SL1500_.jpg",
      description: "Premium quality organic brown rice."
    },
    {
      id: 103,
      title: "Extra Virgin Olive Oil",
      category: "Cooking Oils",
      price: 450,
      image: "https://m.media-amazon.com/images/I/61oPIzxKBaL._SL1500_.jpg",
      description: "Cold-pressed extra virgin olive oil from Mediterranean olives."
    },
    {
      id: 104,
      title: "Organic Honey",
      category: "Sweeteners",
      price: 350,
      image: "https://m.media-amazon.com/images/I/61KJeIFwRtL._SL1500_.jpg",
      description: "Pure organic honey collected from wildflower fields."
    },
    {
      id: 105,
      title: "Whole Wheat Pasta",
      category: "Pasta",
      price: 75,
      image: "https://m.media-amazon.com/images/I/71Rj3InxQlL._SL1500_.jpg",
      description: "Nutritious whole wheat pasta for a healthy meal."
    },
    {
      id: 106,
      title: "Basmati Rice",
      category: "Grains",
      price: 180,
      image: "https://m.media-amazon.com/images/I/61Ym1bwpMRL._SL1500_.jpg",
      description: "Premium aged basmati rice with aromatic flavor."
    }
  ];
  
  // Filter products based on category and search query
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    let products = allProducts;
    
    // Filter by category if not 'All Products'
    if (category !== 'All Products') {
      products = products.filter(product => product.category === category);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      products = products.filter(product => 
        product.title.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(products);
  }, [category, searchQuery]);
  
  // Handle add to cart
  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      quantity: 1
    });
    
    // Show notification
    alert(`${product.title} added to cart!`);
  };
  
  // Navigate to product detail
  const handleProductPress = (product) => {
    navigation.navigate('ProductDetail', { productId: product.id });
  };
  
  // Render product item
  const renderProductItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.productCard}
      onPress={() => handleProductPress(item)}
    >
      <View style={styles.productImageContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
      </View>
      
      <View style={styles.productDetails}>
        <Text style={styles.productCategory}>{item.category}</Text>
        <Text style={styles.productTitle} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.productPrice}>₹{item.price.toFixed(2)}</Text>
        
        <TouchableOpacity 
          style={styles.addToCartButton}
          onPress={() => handleAddToCart(item)}
        >
          <MaterialIcons name="add-shopping-cart" size={18} color="#FFFFFF" />
          <Text style={styles.addToCartText}>Add</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#253D4E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{category}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <MaterialIcons name="shopping-cart" size={24} color="#3BB77E" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={24} color="#7E7E7E" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery ? (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <MaterialIcons name="close" size={24} color="#7E7E7E" />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      
      {filteredProducts.length > 0 ? (
        <FlatList
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.productList}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <MaterialIcons name="search-off" size={64} color="#CCCCCC" />
          <Text style={styles.emptyText}>No products found</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#253D4E',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#253D4E',
  },
  productList: {
    padding: 8,
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  productImageContainer: {
    height: 140,
    backgroundColor: '#F9F9F9',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  productDetails: {
    padding: 12,
  },
  productCategory: {
    fontSize: 12,
    color: '#3BB77E',
    marginBottom: 4,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#253D4E',
    marginBottom: 8,
    height: 40,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3BB77E',
    marginBottom: 8,
  },
  addToCartButton: {
    flexDirection: 'row',
    backgroundColor: '#3BB77E',
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 14,
    marginLeft: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  emptyText: {
    fontSize: 16,
    color: '#7E7E7E',
    marginTop: 16,
  },
});

export default ProductList;