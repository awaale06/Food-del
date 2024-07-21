import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
function Navbar({setShowLogin} ) {
    const [menu,setMenu]= useState("home");
    const {getTotalCartAmount} = useContext(StoreContext)
    const [isOpen,setIsOpen] = useState(false)
  // function that handels open action
  const handelOpen = () => {
    setIsOpen(true)
  }
  // function that handels close action
  const handelClose = () => {
    setIsOpen(false)}
  return (
    <>
     <div className='flex justify-between items-center sm:px-3 '>
          <i style={ {display: isOpen == true ? "none" : ""}} onClick={handelOpen}  className="fa-solid fa-bars sm:hidden absolute text-gray-500 mt-1 right-3 mr-1 text-3xl"></i>
          <i style={ { display: isOpen == true ? "block" :"none" }} onClick={handelClose} className="fa-solid fa-xmark absolute text-gray-500 mt-1 mr-1 text-3xl right-3"></i>
        <Link to='/'><img src={assets.logo} className='sm:w-[120px] w-[80px] mt-3' alt="" /></Link>
      <ul className='sm:flex gap-4 text-gray-500 text-sm hidden    cursor-pointer'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu=="home" ?"active " :"" } >Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu=="menu" ?"active" :""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("contact-us")} className={menu=="contact-us" ?"active" :""}>Contact Us</a>
            <a href='#footer' onClick={()=>setMenu("mobile-app")} className={menu=="mobile-app" ?"active" :""}>Mobile-App</a>
        </ul>
       
        <div className='n flex items-center gap-5 mr-6 sm:mr-0 mt-2'>
            <img src={assets.search_icon} className='w-[20px] sm:w-[30px]' alt="" />
            <div className='relative'>
                <Link to='/cart'><img src={assets.basket_icon} className='w-[20px] sm:w-full'  alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"absolute min-w-[10px] min-h-[10px] bg-yellow-400 rounded-[5px] top-[-8px] right-[-8px]"} ></div>
            </div>
            <button onClick={() =>setShowLogin(true)} className='bg-transparent hover:bg-gray-500 hover:text-white  text-gray-500 border-2 border-gray-500 sm:px-3 px-1 rounded-xl sm:rounded-2xl py-1'>Sign-in</button>
        </div>
    </div>
    <ul style={ {display:isOpen == true ? "flex" : "" } } className=' pl-4 font-semibold  hidden flex-col gap-3 text-gray-500  cursor-pointer'>
            <li >Home</li>
            <li >Menu</li>
            <li >Contact Us</li>
            <li>Mobile-App</li>
        </ul>
        
    </>
   
  )
}

export default Navbar