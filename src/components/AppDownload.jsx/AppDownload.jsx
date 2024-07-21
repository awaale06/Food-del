import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='mt-[80px] text-center  ' id='app-download'>
        <p className='text-2xl font-semibold'>For Better Experience Download <br /> Milgo App</p>
        <div className='flex justify-center gap-3 mt-2 '>
            <img className=' w-[max(30vw,120px)] max-w-[180px] hover:scale-105 cursor-pointer' src={assets.app_store} alt="" />
            <img className='w-[max(30vw,120px)] max-w-[180px] hover:scale-105 cursor-pointer' src={assets.play_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload