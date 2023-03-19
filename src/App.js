import Navbar from './components/Navbar'
import CourseList from './components/CourseList';
import { useSelector, useDispatch } from 'react-redux';
import { cardTotal } from './CartSlice';
import { useEffect } from 'react';

function App() {
const {cartItems} = useSelector((store) => store.cart)
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(cardTotal());
},[cartItems])

  return (
    <div className="App">
      <Navbar/>
      <CourseList/>
    </div>
  );
}

export default App;
