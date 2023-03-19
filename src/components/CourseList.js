import React from 'react'
import Course from './Course';
import { useSelector } from 'react-redux';
import './Course.css'
import { cardRemove } from '../CartSlice';
import { useDispatch } from 'react-redux';
const CourseList = () => {
  const {cartItems, quantity, total} = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  return (
    <>
    {
      quantity < 1 ? (
        <div className='boş'>
        <h3>Sepetiniz</h3>
        <p>Bomboş..</p>
        </div>
      ) : (
        <div>
          <h3 className='title'>Sepetiniz</h3>
          {
            cartItems.map((cartItem)=>{
              return <Course cartItem = {cartItem} />
            })
          }
          <div className="footer">
            <h4>Toplam Tutar : <span>{total} TL</span></h4>
            <button onClick={()=> dispatch(cardRemove())}>Temizle</button>
          </div>
          
        </div>
       

      )
    }
    
    
    </>
  )

  }
export default CourseList
