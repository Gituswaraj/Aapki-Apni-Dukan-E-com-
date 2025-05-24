import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Import screens
import ProductDetail from './src/screens/ProductDetail';
import ProductList from './src/screens/ProductList';
import Cart from './src/screens/Cart';

// Import context providers
import { CartProvider } from './src/context/CartContext';

// Create navigation stacks
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Mock components - These would be replaced with actual components
const HomeScreen = ({ navigation }) => (
  <View style={styles.screenContainer}>
    <Text style={styles.heading}>Swaraj World</Text>
    <Text style={styles.subheading}>Welcome to our mobile app!</Text>
    <View style={styles.categoryContainer}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoriesRow}>
        {['Grocery', 'Milks and Dairies', 'Bread and Juice', 'Cold Drinks'].map((category, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.categoryItem}
            onPress={() => navigation.navigate('ProductList', { category })}
          >
            <View style={styles.categoryIcon}>
              <MaterialIcons name="shopping-basket" size={24} color="#3BB77E" />
            </View>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
    <View style={styles.productsContainer}>
      <Text style={styles.sectionTitle}>Featured Products</Text>
      <View style={styles.productsGrid}>
        {[
          { id: 1, name: 'Organic Rice', price: '₹120', image: 'https://m.media-amazon.com/images/I/71Y56-ZGdHL._SL1500_.jpg' },
          { id: 2, name: 'Fresh Apples', price: '₹80', image: 'https://m.media-amazon.com/images/I/61oPIzxKBaL._SL1500_.jpg' },
          { id: 3, name: 'Olive Oil', price: '₹350', image: 'https://m.media-amazon.com/images/I/61KJeIFwRtL._SL1500_.jpg' },
        ].map((product) => (
          <TouchableOpacity 
            key={product.id} 
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
          >
            <View style={styles.productImageContainer}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
            </View>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <TouchableOpacity 
              style={styles.addToCartButton}
              onPress={(e) => {
                e.stopPropagation();
                alert(`${product.name} added to cart!`);
              }}
            >
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  </View>
);

const CategoriesScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.heading}>All Categories</Text>
    <View style={styles.categoriesGrid}>
      {[
        'Grocery', 'Milks and Dairies', 'Bread and Juice', 'Cold Drinks',
        'Stationary', 'Beauty Products', 'Baby Corner', 'Plastics'
      ].map((category, index) => (
        <View key={index} style={styles.categoryCard}>
          <View style={styles.categoryIconLarge}>
            <MaterialIcons name="category" size={32} color="#3BB77E" />
          </View>
          <Text style={styles.categoryCardText}>{category}</Text>
        </View>
      ))}
    </View>
  </View>
);

const CartScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.heading}>Your Cart</Text>
    <Text style={styles.emptyCartText}>Your cart is empty</Text>
    <View style={styles.shopNowButton}>
      <Text style={styles.shopNowText}>Shop Now</Text>
    </View>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.heading}>My Account</Text>
    <View style={styles.profileSection}>
      <MaterialIcons name="account-circle" size={80} color="#3BB77E" />
      <Text style={styles.profileName}>Guest User</Text>
      <View style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login / Register</Text>
      </View>
    </View>
    <View style={styles.menuSection}>
      <View style={styles.menuItem}>
        <MaterialIcons name="shopping-bag" size={24} color="#3BB77E" />
        <Text style={styles.menuItemText}>My Orders</Text>
      </View>
      <View style={styles.menuItem}>
        <MaterialIcons name="favorite-border" size={24} color="#3BB77E" />
        <Text style={styles.menuItemText}>My Wishlist</Text>
      </View>
      <View style={styles.menuItem}>
        <MaterialIcons name="location-on" size={24} color="#3BB77E" />
        <Text style={styles.menuItemText}>Shipping Addresses</Text>
      </View>
      <View style={styles.menuItem}>
        <MaterialIcons name="settings" size={24} color="#3BB77E" />
        <Text style={styles.menuItemText}>Settings</Text>
      </View>
    </View>
  </View>
);

// Tab Navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Categories') {
            iconName = 'category';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3BB77E',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Main App
const App = () => {
  // Define theme
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3BB77E',
      accent: '#FDC040',
    },
  };

  return (
    <CartProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <Stack.Navigator
              initialRouteName="Main"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Main" component={TabNavigator} />
              <Stack.Screen name="ProductDetail" component={ProductDetail} />
              <Stack.Screen name="ProductList" component={ProductList} />
              <Stack.Screen name="Cart" component={Cart} />
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </PaperProvider>
    </CartProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  screenContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#253D4E',
    marginBottom: 16,
  },
  subheading: {
    fontSize: 16,
    color: '#7E7E7E',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#253D4E',
    marginBottom: 12,
  },
  categoryContainer: {
    marginBottom: 24,
  },
  categoriesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '23%',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F2FCF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#253D4E',
  },
  productsContainer: {
    marginBottom: 24,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    elevation: 2,
  },
  productImageContainer: {
    height: 120,
    marginBottom: 8,
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#253D4E',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3BB77E',
    marginBottom: 8,
  },
  addToCartButton: {
    backgroundColor: '#3BB77E',
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 12,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 2,
  },
  categoryIconLarge: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F2FCF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryCardText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#253D4E',
    textAlign: 'center',
  },
  emptyCartText: {
    fontSize: 16,
    color: '#7E7E7E',
    textAlign: 'center',
    marginVertical: 24,
  },
  shopNowButton: {
    backgroundColor: '#3BB77E',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    marginHorizontal: 32,
  },
  shopNowText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 24,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#253D4E',
    marginVertical: 8,
  },
  loginButton: {
    backgroundColor: '#3BB77E',
    borderRadius: 4,
    padding: 10,
    paddingHorizontal: 24,
    marginTop: 8,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  menuSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuItemText: {
    fontSize: 16,
    color: '#253D4E',
    marginLeft: 16,
  },
});

export default App;