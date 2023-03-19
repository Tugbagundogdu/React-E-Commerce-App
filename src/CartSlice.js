import { createSlice } from "@reduxjs/toolkit";
import CourseItems from './CourseItems'

const initialState = {
    cartItems: CourseItems,
    quantity: 4,
    total: 0
}
const CartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        cardRemove(state){
            state.cartItems = [];
        },
        cardDelete(state, action){
            const ıtemId = action.payload;
            state.cartItems = state.cartItems.filter((item)=> item.id !== ıtemId);
        },
        cardIncrease(state ,action){
          const cardItemIn = state.cartItems.find((item)=> item.id === action.payload)
          cardItemIn.quantity += 1;
        },
        cardDecrease(state , action){
            const cardItemDec = state.cartItems.find((item) => item.id === action.payload);
            cardItemDec.quantity -= 1;

        },
        cardTotal(state){
            let total = 0;
            let quanti = 0;
            state.cartItems.forEach((item)=>{
            total += item.quantity*item.price;
            quanti += item.quantity;
            })
            state.total = total;
            state.quantity = quanti;
        }



        }
    }
)

export default CartSlice.reducer;
export const {cardRemove , cardDelete , cardIncrease , cardDecrease, cardTotal} = CartSlice.actions;