import React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import './Course.css';
import { cardDelete , cardDecrease , cardIncrease } from '../CartSlice';
import { useDispatch } from 'react-redux';


const Course = ({cartItem}) => {
const {id, title , price , img, quantity} = cartItem;
const dispatch = useDispatch();

  return (
    <div className='course'>
      <img src={img} alt="" />
      <div className='description'>
        <h3>{title}</h3>
        <p>{price} TL</p>
        <div className='icons'>
          <button onClick={()=> dispatch(cardIncrease(id))} className='btn'>
          <BsChevronUp/>
          </button>
          <p className='quantity'>{quantity}</p>
          <button onClick={()=> dispatch(cardDecrease(id))} className='btn'>
          <BsChevronDown/>
          </button>
        </div>
        <button onClick={()=> dispatch(cardDelete(id))} className='silButonu'>
          Sil
        </button>
        </div>
      </div>
  )
}

export default Course
