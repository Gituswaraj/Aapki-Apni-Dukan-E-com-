import React from 'react';
import './style.css';
const Product =()=>{
    return(
        <div className='productThumb'>
           <div className='imgWrapper'>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/401282a.jpg?ts=1687328280" className='w-100'/>
           </div>

           <div className='info'>
            <span className='d-block brand'>Snack</span>
            <h4 className='title'>Real Fruit Power Masala Mixed Fruit Juice</h4>
           </div>
        </div>
    )
}

export default Product;