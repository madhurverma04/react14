import React, { useState } from 'react';

const App = () => {
 
  return (
    <div className='w-full h-screen bg-gray-400 py-[5%] px-[10%] flex items-center justify-center relative'>
      <div className='w-[80%] h-[80%] absolute py-5 px-[10%] flex flex-col justify-between '>
       <div className='flex justify-between'>
       <h1 className='text-white text-2xl uppercase font-bold'>protofilo</h1>
        <div className='text-black flex gap-10'>
          <h3 className='text-xl font-semibold'>HOME</h3>
          <h3 className='text-xl font-semibold'>ABOUT</h3>
          <h3 className='text-xl font-semibold'>WORKS</h3>
          <h3 className='text-xl font-semibold'>BLOG</h3>
          <h3 className='text-xl font-semibold'>CONTACT</h3>
        </div>
       </div>
       <div className=' mt-80 absolute ml-[17%]'>
        <h1 className='text-2xl font-semibold opacity-3 text-white'>MY NAME IS</h1>
        <h1 className='text-3xl font-semibold text-white mb-5'>ABDULRAHMAN</h1>
        <button className='py-2 px-5 bg-yellow-400 text-sm font-semibold'> I'M A DEVELOPER</button>
       </div>
      </div>
      <div className='h-full w-[40%] bg-black'></div>
      <div className='h-full w-[60%] bg-white'>
        <img className='h-full' src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  );
};

export default App;




