import React from 'react'
import Logo from './img/logo.png'
import Avata from './img/avatar.png'
import { MdAdd, MdLogout, MdShoppingCart,MdHome, MdMenuBook, MdMiscellaneousServices, MdAccessibilityNew } from "react-icons/md";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { app } from '../firebase';
import {getAuth,GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { useState } from 'react';
const Header = () => {
  const firebaseAuth = getAuth(app);  
    const provider = new GoogleAuthProvider();
    const [{ user}, dispatch] = useStateValue();
    const [isMenu, setIsMenu] = useState(false);

 const login =async()=>{
  if (!user){
    const {user: {  providerData }} = await signInWithPopup(firebaseAuth, provider);
    // console.log(response);
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],      
    });
    localStorage.setItem('user', JSON.stringify(providerData[0]));
  }
  else{
   setIsMenu(!isMenu)
  }
 }
 const logout = () => {
  setIsMenu(false);
  localStorage.clear();

  dispatch({
    type: actionType.SET_USER,
    user: null,
  });
};
  return (

      
        <div className='fixed z-10 w-screen bg-cyan-400 p-6 ' >
     {/* desktop and tablet */}
     <div className='hidden md:flex w-full h-full items-center justify-between  '>
      {/* logo */}
        <Link to={'/'} className='flex items-center gap-2'>
            <img src={Logo} className='w-8 object-cover ' alt="logo" />
            <p className='text-headerColor text-xl font-bold'>CiTy Food</p>
        </Link>
        {/* logo */}
        <div className="flex items-center gap-8  ">
        <ul className="flex items-center gap-8 ml-auto">
            <li className="text-xl  text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">          
                <div className="flex items-center pr-1  ">
                <MdHome />               
                Home              
              </div>
            </li>
            <li className="text-xl text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">    
            <div className="flex items-center pr-1  ">
                <MdMenuBook />               
               Menu           
              </div>
            </li>
            <li className="text-xl text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">    
            <div className="flex items-center pr-1  ">                           
              <MdAccessibilityNew/>  About Us          
              </div>
             
            </li>
            <li className="text-xl text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">   
            <div className="flex items-center pr-1  ">                            
              <MdMiscellaneousServices/>  Services           
              </div>          
            </li>
          </ul>

        <div className='relative flex items-center justify-center'>
        <MdShoppingCart className="text-textColor text-2xl ml-8 cursor-pointer">       
        </MdShoppingCart>
        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold"> 6+ </p>
             </div>
        </div>

        <div className='relative '>
                 <motion.img  whileTap={{ scale: 0.7 }}className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer'
                  src={user ? user.photoURL : Avata} alt="avata" onClick={login}  />
                    {
                      isMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-11 right-0'>

                            <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"> <MdAdd /> New Item</p>
                            <p onClick={logout} className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"> <MdLogout /> Logout</p>
                        </motion.div>
                    )
                    }
                



             </div>
        </div>
     </div>





      {/*Mobile */}
      <div  className='flex items-center justify-between md:hidden w-full h-full'>
        {/* gio hang copy ở trên xuống   */}
        <div className='relative flex items-center justify-center'>
        <MdShoppingCart className="text-textColor text-2xl ml-8 cursor-pointer">       
        </MdShoppingCart>
        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold"> 3+ </p>
             </div>
      </div>
       {/* logo */}
       <Link to={'/'} className='flex items-center gap-2'>
                    <img className='w-8 object-cover' src={Logo} alt='logo' />
                    <p className='text-headingColor text-xl font-bold'>City Food</p>
                    </Link>
 {/*avata  */}
 <div className="relative">
                    <motion.img
                        whileTap={{ scale: 0.7 }}
                        className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer'
                        src={user ? user.photoURL : Avata}
                        alt="Avatar"
                        onClick={login}
                    />
                    {
                        isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-11 right-0'>

                                <Link to={'/createItem'}>
                                    <p className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                                        <MdAdd /> New Item
                                    </p>
                                </Link>

                                {/* menu  */}
                                <ul className="flex flex-col px-4 py-3 gap-4">
                                <li className="text-xl  text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">          
                <div className="flex items-center pr-1  ">
                <MdHome />               
                Home              
              </div>
            </li>
            <li className="text-xl text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">    
            <div className="flex items-center pr-1  ">
                <MdMenuBook />               
               Menu           
              </div>
            </li>
            <li className="text-xl text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">    
            <div className="flex items-center pr-1  ">                           
              <MdAccessibilityNew/>  About Us          
              </div>
             
            </li>
            <li className="text-xl text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">   
            <div className="flex items-center pr-1  ">                            
              <MdMiscellaneousServices/>  Services           
              </div>          
            </li>
                                </ul>

                                <p className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                                    onClick={logout}
                                ><MdLogout />Logout</p>
                            </motion.div>
                        )
                    }
                </div>
        </div>
  </div>
   
    )
}

export default Header