import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    
    console.log(food_list); // Debugging
  
    return (
      <div className='mt-5  '>
        <h1 className='text-2xl font-semibold mb-1'>Top dishes near you</h1>
        <div className='grid sm:grid-cols-3 w-[80%] ml-5 sm:ml-0 sm:w-[100%]    gap-4 mt-4'>
          {food_list.map((item, index) => {
            if (category==="All" || category===item.category) {
                return (
                    <FoodItem key={index}  id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                  );
            }
            console.log(item); // Debugging
           
          })}
        </div>
      </div>
    );
  };
  
 
export default FoodDisplay