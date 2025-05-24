import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProductDetail = ({ route, navigation }) => {
  // In a real app, we would get the product from route.params
  // For demo purposes, we'll use a mock product
  const product = {
    id: 101,
    name: "Real Fruit Power Masala Mixed Fruit Juice",
    category: "Beverages",
    price: 120,
    image: "https://m.media-amazon.com/images/I/61eDXs9QPML.jpg",
    description: "A refreshing mixed fruit juice with a hint of masala. Made from real fruits with no added preservatives. Perfect for a hot summer day.",
    rating: 4.5,
    reviews: 24,
    inStock: true
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // In a real app, this would add the product to cart context
    alert(`${quantity} ${product.name} added to cart!`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#253D4E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.wishlistButton}>
          <MaterialIcons name="favorite-border" size={24} color="#3BB77E" />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.productName}>{product.name}</Text>
        
        <View style={styles.ratingContainer}>
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <MaterialIcons 
                key={star}
                name={star <= Math.floor(product.rating) ? "star" : star <= product.rating ? "star-half" : "star-border"} 
                size={18} 
                color="#FDC040" 
              />
            ))}
          </View>
          <Text style={styles.reviewCount}>({product.reviews} reviews)</Text>
        </View>

        <Text style={styles.price}>₹{product.price.toFixed(2)}</Text>
        
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.stockInfo}>
          <MaterialIcons name="check-circle" size={20} color="#3BB77E" />
          <Text style={styles.inStock}>In Stock</Text>
        </View>

        <View style={styles.quantityContainer}>
          <Text style={styles.quantityLabel}>Quantity:</Text>
          <View style={styles.quantityControls}>
            <TouchableOpacity 
              style={styles.quantityButton}
              onPress={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
            >
              <Text style={[styles.quantityButtonText, quantity <= 1 && styles.disabledText]}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityValue}>{quantity}</Text>
            <TouchableOpacity 
              style={styles.quantityButton}
              onPress={() => handleQuantityChange(1)}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <MaterialIcons name="shopping-cart" size={20} color="#FFFFFF" />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  wishlistButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  imageContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
  detailsContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    marginBottom: 24,
  },
  category: {
    color: '#3BB77E',
    fontSize: 14,
    marginBottom: 4,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#253D4E',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stars: {
    flexDirection: 'row',
  },
  reviewCount: {
    marginLeft: 8,
    color: '#7E7E7E',
    fontSize: 14,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3BB77E',
    marginBottom: 16,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#253D4E',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#7E7E7E',
    lineHeight: 20,
    marginBottom: 16,
  },
  stockInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  inStock: {
    marginLeft: 8,
    color: '#3BB77E',
    fontWeight: '500',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  quantityLabel: {
    fontSize: 16,
    color: '#253D4E',
    marginRight: 16,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 4,
  },
  quantityButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#253D4E',
  },
  disabledText: {
    color: '#CCCCCC',
  },
  quantityValue: {
    width: 36,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  addToCartButton: {
    backgroundColor: '#3BB77E',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
  },
  addToCartText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default ProductDetail;