import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

function PlaceOrder() {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='sm:flex items-start justify-between gap-[50px] mt-[100px]'>
      <div className='max-w-[max(30%,500px)] w-[100%]'>
        <p className='text-[30px] font-semibold mb-[50px]'>Delivery Information </p>
        <div className='flex gap-2'>
          <input className='border border-[#c5c5c5] w-[100%] mb-[15px] p-1 rounded-[4px] outline-yellow-400' type="text" placeholder='enter first name' />
          <input className='border border-[#c5c5c5] w-[100%] mb-[15px] p-1 rounded-[4px] outline-yellow-400' type="text" placeholder='enter last name' />
        </div>
        <input className='border border-[#c5c5c5] w-[100%] mb-[15px] p-1 rounded-[4px] outline-yellow-400' type="email" placeholder='enter email address' />
        <input className='border border-[#c5c5c5] w-[100%] mb-[15px] p-1 rounded-[4px] outline-yellow-400' type="text" placeholder='enter distract' />
        <div className='flex gap-2'>
          <input className='border border-[#c5c5c5] w-[100%] mb-[15px] p-1 rounded-[4px] outline-yellow-400' type="text" placeholder='enter city' />
          <input className='border border-[#c5c5c5] w-[100%] mb-[15px] p-1 rounded-[4px] outline-yellow-400' type="text" placeholder='enter village' />
        </div>
        <div className='flex gap-2'>
          <input className='border border-[#c5c5c5] w-[100%] mb-[15px] p-1 rounded-[4px] outline-yellow-400' type="text" placeholder='enter region' />
          <input className='border border-[#c5c5c5] w-[100%] mb-[15px] p-1 rounded-[4px] outline-yellow-400' type="text" placeholder='enter country' />
        </div>
        <input className='border border-[#c5c5c5] w-[100%] mb-[15px] p-1 rounded-[4px] outline-yellow-400' type="text" placeholder='phone' />
      </div>
      <div className='max-w-[max(40%,500px)] w-[100%]'>
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
          <button  className=' border-none text-white bg-yellow-400 w-[max(15vw,200px)] mt-7 py-2 px-0 rounded-[4px] cursor-pointer'>PROCEED TO Payment</button>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder