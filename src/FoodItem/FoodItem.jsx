import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';

function FoodItem({ id, name, price, description, image }) {
    const{  cartItems,addToCart, removeFromCart}=useContext(StoreContext);
  return (
    <div className='w-full  rounded-xl shadow-2xl'>
      <div className=' relative'>
        <img className='rounded-t-lg w-[100%] h-[100%]' src={image} alt={name} />
        {!cartItems[id]
            ?<img className=' absolute w-[35px]  cursor-pointer bottom-[10px] right-[10px] rounded-[50%]' src={assets.add_icon_white} onClick={()=>addToCart(id)} alt="" />
            : <div className=' absolute   cursor-pointer bottom-[10px] right-[10px] rounded-[50px] flex items-center gap-1 p-[3px]  bg-white'>
                <img className='w-[25px]' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]} </p>
                <img className='w-[25px]' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>

        }
      </div>
      <div className='p-1'>
        <div className='flex justify-between mb-2 items-center'>
          <p className='font-semibold '>{name}</p>
          <img className='w-[60px]' src={assets.rating_starts} alt="rating stars" />
        </div>
        <p className='text-xs'>{description}</p>
        <p className='text-sm font-semibold text-orange-600 mb-2 mt-1'>${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
