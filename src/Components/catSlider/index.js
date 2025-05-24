import React from 'react';
import Slider from "react-slick";

import './style.css';
import { colors } from '@mui/material';

const CatSlider=()=>{


         var settings={
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 10,
            slidesToScroll: 1,
            fade: false,
            arrows: true

         };
    return(
      <>
        <div className='catSliderSection'>
            <div className='container-fluid'>
                <h2 className='hd'>Featured Categories</h2>
            <Slider {...settings} className='cat_slider_Main'>
                <div className='item' >
                      <div className='info'>
                        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-12/Slice-24.png'></img>
                        
                        
                      </div>
                </div>

                <div className='item'>
                      <div className='info'>
                        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-12/Slice-25.png'></img>
                        
        
                      </div>
                </div>

                <div className='item'>
                      <div className='info'>
                        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-12/Slice-22_0.png'></img>
                        
                        
                      </div>
                </div>

                <div className='item'>
                      <div className='info'>
                        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-12/Slice-29.png'></img>
                        
                        
                      </div>
                </div>

                <div className='item'>
                      <div className='info'>
                        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-12/Slice-27.png'></img>
                        
                        
                      </div>
                </div>

                <div className='item'>
                      <div className='info'>
                        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-12/Slice-28.png'></img>
                        
                        
                      </div>
                </div>

                <div className='item'>
                      <div className='info'>
                        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-12/Slice-31.png'></img>
                        
                        
                      </div>
                </div>

                <div className='item'>
                      <div className='info'>
                        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-12/Slice-30.png'></img>
                        
                        
                      </div>
                </div>

                <div className='item'>
                      <div className='info'>
                        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-12/Slice-35.png'></img>
                        
                        
                      </div>
                </div>

                <div className='item'>
                      <div className='info'>
                        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-12/Slice-36.png'></img>
                        
                        
                      </div>
                </div>

                <div className='item'>
                      <div className='info'>
                        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-12/Slice-37.png'></img>
                        
                        
                      </div>
                </div>

                <div className='item'>
                      <div className='info'>
                        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-12/Slice-40.png'></img>
                        
                        
                      </div>
                </div>

                <div className='item'>
                      <div className='info'>
                        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-12/Slice-39.png'></img>
                                                
                      </div>
                </div>

                <div className='item'>
                      <div className='info'>
                        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-12/Slice-32.png'></img>
                                                
                      </div>
                </div>

                <div className='item'>
                      <div className='info'>
                        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-12/Slice-39.png'></img>
                        
                        
                      </div>
                </div>


            </Slider>
            </div>
        </div>
      
           
            </>
    )
}

export default CatSlider;