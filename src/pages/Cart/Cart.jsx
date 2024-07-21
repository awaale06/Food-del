import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

function Cart() {
    const {cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);
    const navigate = useNavigate();
  return (
    <div className='mt-[100px]'>
      <div>
        <div className=' grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr]  text-gray-400 text-[max(1vw,12px)]'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item,index) =>{
            if(cartItems[item._id]>0){
              return(
                <div>
                  <div className=' grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr]  m-2 text-[max(1vw,12px)]'>
                  <img className='w-[50px] pr-2 ' src={item.image} alt="" />
                  <p>{item.name} </p>
                  <p>${item.price} </p>
                  <p>{cartItems[item._id]} </p>
                  <p>${item.price*cartItems[item._id]} </p>
                  <p onClick={() =>removeFromCart(item._id)} className=' cursor-pointer'>x</p>
                </div>
                <hr className='h-[1px]' />
                </div>
                
              )
            }
          })
        }
      </div>
      <div className='mt-[80px]  sm:flex   justify-between gap-[max(12vw,20px)]'>
        <div className='flex-1 flex flex-col  gap-[20px]'>
          <h1 className=' text-2xl font-bold'>Cart Totals</h1>
          <div>
            <div className='flex justify-between text-[#555]'>
              <p>SubTotal</p>
              <p>${getTotalCartAmount()} </p>
            </div>
            <hr className='mt-2' />
            <div className='flex justify-between text-[#555]'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:3} </p>
            </div>
            <hr className='mt-2' />
            <div className='flex justify-between text-[#555]'>
              <b>Total</b>
              <b>$ {getTotalCartAmount()===0?0:getTotalCartAmount() +3} </b>
            </div>
          
          </div>
          <button onClick={() =>navigate('/order')} className=' border-none text-white bg-yellow-400 w-[max(15vw,200px)] py-2 px-0 rounded-[4px] cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>
        <div className='flex-1 mt-4'>
          <div>
            <p className='text-[#555]'>If you have a promo code, Enter it here</p>
            <div className='flex justify-between items-center rounded-[4px] bg-[#eaeaea] mt-2'>
              <input className='bg-transparent border-none outline-none pl-2' type="text" placeholder='promo code' />
              <button className='w-[max(10vw,150px)] py-2 px-1 bg-black border-none text-white rounded-[4px]'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart