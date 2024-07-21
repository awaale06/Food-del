import React from 'react'
import './Header.css'
function Header() {
  return (
    <div  className='header relative rounded  '>
        <div className='absolute flex flex-col items-start gap-[1.5vw] sm:max-w-[50%] max-w-[75%] bottom-[10%] left-[6vw] '>
            <h1  className='sm:text-5xl  text-2xl text-white font-bold '>Order Your Favorite food here.</h1>
            <p className='text-white sm:text-2xl font-semibold hidden sm:block'>Your perfect spot for coffee and meals. </p>
            <button className=' p-[2vw, 4vw]  p-2 bg-transparent border-2 border-white text-white sm:text-xl rounded-xl'>view menu</button>
        </div>
    </div>
  )
}

export default Header