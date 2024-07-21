import React from 'react'
import { assets } from '../../assets/assets'
import { menu_list } from '../../assets/assets'
import "./ExploreMenu.css"
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='ex-m flex gap-3 flex-col  ' id='explore-menu'>
        <h1 className='text-2xl font-semibold'>Explore our menu</h1>
        <p className='font-medium'>Your perfect spot for coffee and meals.   </p>
        <div className='flex justify-between items-center gap-7 text-center  overflow-x-scroll ex'>
            {menu_list.map((item, index) =>{
                return(
                    <div className='pr' onClick={()=>setCategory(prev=>prev===item.menu_name?"All" :item.menu_name)} key={index} >
                        <img  src={item.menu_image}  className={category===item.menu_name? "active" : "" } id='cu'   alt="" />
                        <p className='cursor-pointer mt-[10px] text-[#747474] text-[max(1.4vw, 16px)] '>{item.menu_name} </p>
                        
                    </div>
                )
            })}
        </div>
       <hr className='mb-3' />

    </div>
  )
}

export default ExploreMenu