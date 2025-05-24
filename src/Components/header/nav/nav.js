import React, { useState, useContext } from 'react';
import './nav.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import { CartContext } from '../../../context/CartContext';
import { ProductContext } from '../../../context/ProductContext';

const Nav = () => {
    const [showCategories, setShowCategories] = useState(false);
    const { addToCart } = useContext(CartContext);
    const { fetchProducts } = useContext(ProductContext);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        fetchProducts({ category: category });
        navigate('/products');
    };
    
    // Sample grocery products
    const groceryProducts = [
        {
            id: 101,
            title: "Organic Rice",
            price: 120,
            image: "https://m.media-amazon.com/images/I/71Y56-ZGdHL._SL1500_.jpg",
            category: "Grains"
        },
        {
            id: 102,
            title: "Fresh Apples",
            price: 80,
            image: "https://m.media-amazon.com/images/I/61oPIzxKBaL._SL1500_.jpg",
            category: "Fruits"
        },
        {
            id: 103,
            title: "Olive Oil",
            price: 350,
            image: "https://m.media-amazon.com/images/I/61KJeIFwRtL._SL1500_.jpg",
            category: "Oils"
        }
    ];
    
    // State to track quantities
    const [quantities, setQuantities] = useState(
        groceryProducts.reduce((acc, product) => {
            acc[product.id] = 1;
            return acc;
        }, {})
    );
    
    // Handle quantity change
    const handleQuantityChange = (productId, change) => {
        setQuantities(prev => {
            const newQuantity = Math.max(1, prev[productId] + change);
            return { ...prev, [productId]: newQuantity };
        });
    };
    
    // Handle add to cart
    const handleAddToCart = (product) => {
        addToCart({
            ...product,
            quantity: quantities[product.id]
        });
        alert(`${quantities[product.id]} ${product.title} added to cart!`);
    };
    
    return (
        <div className='nav d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row position-relative'>
                    <div className='col-sm-2 part1 d-flex align-items-center'>
                        <Link to="/grocery" style={{ textDecoration: 'none' }}>
                            <Button 
                                className='bg-g text-white catTab'
                            >
                                <GridViewIcon /> &nbsp;Browse All Categories<KeyboardArrowDownIcon />
                            </Button>
                        </Link>
                    </div>

                    <div className='col-sm-8 part2 position-static'>
                            <nav>
                            <ul className='list list-inline mb-0'>
                               <li className='list-inline-item'>
                                <Button>
                                  <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                                </Button>
                               </li>
                               <li className='list-inline-item'>
                                <Button><Link>About</Link></Button>
                               </li>
                               <li className='list-inline-item position-static'>
                                <Button><Link>Mega menu < KeyboardArrowDownIcon /></Link></Button>
                                <div className='dropdown_menu megaMenu w-100'>
                                  <div className='row'>
                                     <div className='col'>
                                      <h4 className='text-g'>Grocery</h4>
                                        <ul className='mt-4 mb-0'>
                                            <li><a onClick={() => handleCategoryClick('dry-fruits')} style={{cursor: 'pointer'}}>Exotic Dry Fruits</a></li>
                                            <li><a onClick={() => handleCategoryClick('pulses')} style={{cursor: 'pointer'}}>Fresh Pulses</a></li>
                                            <li><a onClick={() => handleCategoryClick('masala')} style={{cursor: 'pointer'}}>Indian Masala</a></li>
                                            <li><a onClick={() => handleCategoryClick('cleaning')} style={{cursor: 'pointer'}}>Cleaning</a></li>
                                            <li><a onClick={() => handleCategoryClick('plastics')} style={{cursor: 'pointer'}}>Plastics item</a></li>
                                            <li><Link to="">Kitchen items</Link></li>
                                            <li><Link to="">Mom's Corner</Link></li>
                                        </ul>
                                     </div>
                                     <div className='col'>
                                      <h4 className='text-g'>Breakfast</h4>
                                      <ul classNmae='mt-4 mb-0'>
                                            <li><Link to="">Nuts and Sprouts</Link></li>
                                            <li><Link to="">Bread</Link></li>
                                            <li><Link to="">Milk & Paneer</Link></li>
                                            <li><Link to="">Musli & Oats</Link></li>
                                            
                                        </ul>
                                     </div>
                                     <div className='col'>
                                      <h4 className='text-g'>Cosmetics</h4>
                                      <ul classNmae='mt-4 mb-0'>
                                            <li><Link to="">Professionals</Link></li>
                                            <li><Link to="">Lady's Corner</Link></li>
                                            <li><Link to="">Make Up</Link></li>
                                            <li><Link to="">Skin Care </Link></li>
                                            
                                            
                                        </ul>
                                     </div>
                                     <div className='col'>
                                      <img src="https://www.shutterstock.com/image-illustration/shopping-basket-food-drinks-full-600nw-2131772405.jpg"className='w-100'/>
                                     </div>
                                   </div>
                                   </div>
                               </li>
                               <li className='list-inline-item'>
                                <Button><Link>Pages< KeyboardArrowDownIcon /> </Link></Button>

                                   <div className='dropdown_menu'>
                                    <ul>
                                      <li><Button><Link to="/about">About Us</Link></Button> </li>
                                      <li><Button><Link to="/about">Contact</Link></Button> </li>
                                      <li><Button><Link to="/about">My Account</Link></Button> </li>
                                      <li><Button><Link to="/about">Login</Link></Button> </li>
                                      <li><Button><Link to="/about">Forget password</Link></Button> </li>
                                      <li><Button><Link to="/about">Purchase Guide</Link></Button> </li>
                                      <li><Button><Link to="/about">Privacy Policy</Link></Button> </li>
                                      <li><Button><Link to="/about">Terms of Services</Link></Button> </li>
                                      <li><Button><Link to="/about">404 Page</Link></Button> </li>
                                    </ul>
                                   </div>



                               </li>
                               <li className='list-inline-item'>
                                <Button><Link>Contact</Link></Button>
                               </li>
                              
                            </ul>
                            </nav>
                   </div>

                   <div className='col-sm-2 part3 d-flex align-items-center'>
                       <div className='phNo d-flex align-items-cente ml-auto'>
                      <span><HeadphonesOutlinedIcon/></span> 
                      <div className='info ml-3'>
                            <h3 className='text-g mb-0' >98526-00000</h3>
                            <p className='mb-0'>24/7 Support Center</p>
                      </div>
                       </div>

                   </div>
            </div>
            </div>
          </div>
    );  // Added closing parenthesis for the return statement
};  // Added semicolon after the function closing curly brace

export default Nav;