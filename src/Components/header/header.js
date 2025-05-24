import React,{useState,useEffect} from 'react';
import '../header/header.css';
import Logo from '../../assets/images/Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
import axios from 'axios';
import  LocationOnOutlinedIcon  from '@mui/icons-material/LocationOnOutlined';
import iconCompare from '../../assets/images/compare.png';
import iconWishlish from '../../assets/images/widhlist.png';
import iconCart from '../../assets/images/cart.png';
import iconUser from '../../assets/images/user.png';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
//import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TuneIcon from '@mui/icons-material/Tune';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import Nav from './nav/nav';

// Remove unused import since Link is not used in this component

const Header =()=>{


    const [isOpenDropDown,setisOpenDropDown]=useState(false);

const [categories, setcategories] = useState([
          

    'Grocery',
    'Milks and Dairies',
    'Bread and Juice',
    'Cold Drinks',
    'Stationary',
    'Beauty Products',
    'Baby Corner',
    'Plastics'
    
]);
const countryList=[];

useEffect(()=>{
    getCountry('https://api.countrystatecity.in/v1/countries/IN/states/JH/cities');
},[]);

const getCountry=async(url)=>{
    try{
        await axios.get(url).then((res)=>{
            if(res!==null){
                res.data.data.map((item,index)=>{
                    countryList.push(item.country);
                })
            }
        })
    }catch(error){
        console.log(error.message);
    }
}
 

    return(
        <>
        <header>
            <div ClassName='container-fluid'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <Link to="/">
                            <img src={Logo} style={{ width: "150px", height: "100px" }} />
                        </Link>
                    </div>
        {/*headerSearch start here* */}            
                 <div className ='col-sm-5'>
                <div className='headerSearch d-flex align-items-center'>
                <Select data={categories} placeholder={'All Categories'} icon={false}/>
                  
                    <div
                        className='search'>
                            <input type='text' placeholder='Search for items...'/>
                            <SearchIcon className="searchIcon cursor"/>
                    </div>
                    </div> 
                     </div>
                    
                    {/*headerSearch start here* */}  

                    <div className='col-sm-5 d-flex aligh-items-center'>
                    <div className ='col-ml-auto d-flex align-items-center'>
                        <div className='countryWrapper'>
                    <Select data={countryList} placeholder={'Your Location'} icon={ <LocationOnOutlinedIcon style={{opacity:'0.5'}}/>   
}/> 
</div>
<ClickAwayListener onClickAway={()=>setisOpenDropDown(false)}>
              <ul className='list list-inline mb-0 headerTabs'>
                
                
                <li className='list-inline-item'>
                
                    <span><img src={iconWishlish}/>
                    <span className='badge bg-success rounded-circle'></span>
                    Wishlist</span>
                    
                </li>
        
               
                <li className='list-inline-item'>
                  <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                    
                      <span><img src={iconCart}/>
                      <span className='badge bg-success rounded-circle'></span>
                      Cart</span>
                    
                  </Link>
                </li>
           
                <li className='list-inline-item' >
          
                    <span onClick={()=>setisOpenDropDown(!isOpenDropDown)}><img src={iconUser}/>
                    
                    Account</span>
                    

{
    isOpenDropDown!==false &&
    <ul className='dropdownMenu'>
      <li>
        <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button className='align-item-center'><Person2OutlinedIcon/>My Account</Button>
        </Link>
      </li>
      <li>
        <Link to="/orders" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button><LocationOnOutlinedIcon/>Order Tracking</Button>
        </Link>
      </li>
      <li>
        <Link to="/admin/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button><TuneIcon/>Admin Dashboard</Button>
        </Link>
      </li>
      <li>
        <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button><ExitToAppIcon/>Sign In</Button>
        </Link>
      </li>
      <li>
        <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button><ExitToAppIcon/>Register</Button>
        </Link>
      </li>
    </ul>
}






                </li>
              </ul>
              </ClickAwayListener>
                    </div>
                        </div>
                     





                </div>
            </div>
        </header>
              <Nav/>
        </>
    )
}





export default Header;