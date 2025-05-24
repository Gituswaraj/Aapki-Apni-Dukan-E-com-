import React from 'react';
import Slider from "react-slick";
import './index.css';
import Masala from '../slider/1.png';
import Pulses from '../slider/2.png';
import Pasta from '../slider/3.png';
import Cookeis from '../slider/4.png';
import { Fade } from 'react-bootstrap';

const HomeSlider=()=>{

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesToScroll:1,
        fade:true,
        arrows:true

      };



    return(
        <section className='homeSlider'>
            
            <div className='container-fluid'>

            <Slider {...settings} className='home_slider_Main'>
      
             <div className="item">
             <img src={Masala} className='w-100'/>
             </div>
             <div className="item">
             <img src={Pulses} className='w-100'/>
             </div>
             <div className="item">
             <img src={Pasta} className='w-100'/>
             </div>
             <div className="item">
             <img src={Cookeis} className='w-100'/>
             </div>
            

      
        
    </Slider>


            </div>
        </section>
    )
}

export default HomeSlider;