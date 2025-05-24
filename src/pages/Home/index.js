import React from 'react';
import Slider from './slider/index';
import CatSlider from '../../Components/catSlider';
import Banners from '../../Components/banners';

import './style.css';
import Product from '../../Components/product';



const Home=()=>{
    return (
        <>
           <Slider/>
           <CatSlider/>

           <Banners/>

           <section className='homeProducts'>
            <div className='container-fluid'>
                <div className='d-flex align-items-center'>
                <h2 className='hd mb-0 mt-0'>Popular Products</h2>
                 <ul className='list list-inline ml-auto filterTab'>
                    <li className='list-inline-item'>
                        <a className='cursor'>All</a>
                    </li>

                    <li className='list-inline-item'>
                        <a className='cursor'>Milks and Dairies</a>
                    </li>

                    <li className='list-inline-item'>
                        <a className='cursor'>coffes & Teas</a>
                    </li>

                    <li className='list-inline-item'>
                        <a className='cursor'>Grocery</a>
                    </li>

                    <li className='list-inline-item'>
                        <a className='cursor'>Dry Fruits</a>
                    </li>

                    <li className='list-inline-item'>
                        <a className='cursor'>Instant Foods</a>
                    </li>
                 </ul>
                 </div>

              <div className='  productRow'>
                <div className='item'>
                    <Product/>
                </div>
                <div className='item'>
                    <Product/>
                </div>
                <div className='item'>
                    <Product/>
                </div>
                <div className='item'>
                    <Product/>
                </div>
                <div className='item'>
                    <Product/>
                </div>

              </div>

            </div>
           </section>
        </>
    )
}
export default Home;
