import React from 'react'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='flex mt-5 text-[#d9d9d9] bg-[#323232] flex-col items-center gap-5 pt-[40px] p-[20px, 8vw]' id='footer'>
        <div className='sm:grid flex flex-col gap-6 sm:grid-cols-[2fr,1fr,1fr] w-[100%] sm:gap-20'>
            <div className='flex flex-col items-start gap-5 ml-4'>
                <img className='w-[120px] mt-3' src={assets.logo} alt="" />
                <p className='m-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel illum repudiandae iste, blanditiis quo omnis expedita cumque eveniet fuga quam.</p>
                <div className='flex gap-2' >
                    <img className='w-[40px]' src={assets.facebook_icon} alt="" />
                    <img className='w-[40px]' src={assets.twitter_icon} alt="" />
                    <img className='w-[40px]' src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='flex flex-col items-start gap-5 ml-4'>
                <h1 className='text-2xl text-white font-semibold'>Company</h1>
                <ul>
                    <li className='mb-2 cursor-pointer'>Home</li>
                    <li className='mb-2 cursor-pointer'>About Us</li>
                    <li className='mb-2 cursor-pointer'>Delivery</li>
                    <li className='mb-2 cursor-pointer'>Privacy and Policy</li>
                </ul>
            </div>
            <div className='flex flex-col items-start gap-5 ml-4'>
                <h1 className='text-2xl text-white font-semibold' >Get In Touch</h1>
                <ul>
                    <li className='mb-2 cursor-pointer'>+252617950074</li>
                    <li className='mb-2 cursor-pointer'>contact:@milgo.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-[100%] h-[2px] m-[20px 10px]' />
        <p className='text-center'>Copyright 2024 &copy;  Milgo.com-All Rights Reserved.</p>
    </div>
  )
}

export default Footer