import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Components/header/nav/nav.css'; // Import nav.css here
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './Components/header/header';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Contact from './pages/Contact/index';
import FAQ from './pages/FAQ/index';
import Privacy from './pages/Privacy/index';
import Terms from './pages/Terms/index';
import Footer from './Components/footer';

import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
//import OrderSuccess from './pages/OrderSuccess';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import AdminDashboard from './pages/Admin/Dashboard';
import AdminProducts from './pages/Admin/Products';
import AdminOrders from './pages/Admin/Orders';
import ManualEntry from './Components/ManualEntry';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

// Add this import
import GroceryProducts from './pages/GroceryProducts';

function App(){
    return(
        <AuthProvider>
            <ProductProvider>
                <CartProvider>
                    <BrowserRouter>
                        <Header/>
                        <Routes>
                            <Route exact={true} path="/" element={<Home/>}/>
                            <Route exact={true} path="/about" element={<About/>}/>
                            <Route exact={true} path="/contact" element={<Contact/>}/>
                            <Route exact={true} path="/faq" element={<FAQ/>}/>
                            <Route exact={true} path="/privacy" element={<Privacy/>}/>
                            <Route exact={true} path="/terms" element={<Terms/>}/>
                            <Route exact={true} path="/products" element={<ProductListing/>}/>
                            <Route exact={true} path="/products/:productId" element={<ProductDetail/>}/>
                            <Route exact={true} path="/grocery" element={<GroceryProducts/>}/>
                            <Route exact={true} path="/cart" element={<Cart/>}/>
                            <Route exact={true} path="/checkout" element={<Checkout/>}/>
                            <Route exact={true} path="/login" element={<Login/>}/>
                            <Route exact={true} path="/register" element={<Register/>}/>
                            <Route exact={true} path="/profile" element={<Profile/>}/>
                            <Route exact={true} path="/orders" element={<Orders/>}/>
                            <Route exact={true} path="/admin/dashboard" element={<AdminDashboard/>}/>
                            <Route exact={true} path="/admin/products" element={<AdminProducts/>}/>
                            <Route exact={true} path="/admin/orders" element={<AdminOrders/>}/>
                            <Route exact={true} path="/admin/manual-entry" element={<ManualEntry/>}/>
                        </Routes>
                        <Footer />
                    </BrowserRouter>
                </CartProvider>
            </ProductProvider>
        </AuthProvider>
    );
}
export default App;