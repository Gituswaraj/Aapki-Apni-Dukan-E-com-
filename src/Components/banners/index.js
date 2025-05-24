import React from 'react';
import Banner1 from '../../assets/images/1.png';
import Banner2 from '../../assets/images/2.png';
import Banner3 from '../../assets/images/3.png'

import './style.css'


const Banners=()=>{
    return(
        <div className='bannersSection'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                            <div className='box'>
                                <img src={Banner1}
                                 style={{ width: "150px", height: "150px" }}
                                 className='w-100 transition'/>
                            </div>
                          
                    </div>


                    <div className='col'>
                            <div className='box'>
                                <img src={Banner2}
                                style={{ width: "150px", height: "150px" }}
                                className='w-100 transition'/>
                            </div>
                          
                    </div>


                    <div className='col'>
                            <div className='box'>
                                <img src={Banner3}
                                style={{ width: "150px", height: "150px" }}
                                 className='w-100 transition'/>
                            </div>
                          
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Banners;