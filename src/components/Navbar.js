import React from 'react'
import {BsFillBasketFill} from 'react-icons/bs'
import './Navbar.css';
import { useSelector} from 'react-redux';


const Navbar = () => {
    const {quantity} = useSelector((store) => store.cart)
 
  return (
    <nav>
    <div className='navbar'>
        <h3>Kurs Uygulaması</h3>
        <div className='icon'>
            <div className='span'>{quantity}</div>
            <BsFillBasketFill/>
        </div>
      
    </div>
    </nav>
  )
}

export default Navbar
