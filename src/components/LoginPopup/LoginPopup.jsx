import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin} ) => {

  const [currState,setCurrState] = useState("Login")
  return (
    <div className=' absolute w-[100%] h-[100%] bg-[#00000090] grid z-[1]'>
        <form className=' place-self-center w-[max(23vw,330px)] text-[#808080] p-2 bg-white flex flex-col gap-[25px] p-[25px 30px]  text-[14px] rounded-[8px]'>
          <div className='flex justify-between items-center text-black'>
            <h2 className='text-2xl font-semibold'>{currState} </h2>
            <img onClick={() =>setShowLogin(false)} className=' cursor-pointer w-[16px]' src={assets.cross_icon} alt="" />
          </div>
          <div className='flex flex-col gap-[20px]'>
            {currState==="Login"?<></>: <input className=' outline-none border-2 border-[#c9c9c9] p-[10px] rounded-[4px]' type="text" placeholder='Enter your name'  required />}
           
            <input className=' outline-none border-2 border-[#c9c9c9] p-[10px] rounded-[4px]' type="email" placeholder='Enter your email' required  />
            <input className=' outline-none border-2 border-[#c9c9c9] p-[10px] rounded-[4px]' type="password" placeholder='Enter your password' required  />
          </div>
          <button className=' border-none p-[10px] rounded-[4px] text-white  bg-yellow-400 text-[15px] cursor-pointer'>{currState==="sign Up"?"Create an account":"Login"} </button>
          <div className='flex items-center gap-[8px] mt-[-15px]'>
            <input className='mt-[-20px]' type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy. </p>
          </div>
          {
            currState==="Login"
            ? <p>Create new account? <span className='text-yellow-400 font-medium cursor-pointer' onClick={() =>setCurrState("Sign Up")}>click here</span></p>
            :<p>Already have an account? <span className='text-yellow-400 font-medium cursor-pointer' onClick={() =>setCurrState("Login")}>Login here</span></p>
          }
         
          
        </form>
    </div>
  )
}

export default LoginPopup