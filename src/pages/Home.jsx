import React from 'react';
import Slider from '../components/Slider';
import image from '../assets/home4.jpg';

const Home = () => {
    return (
        <div>
            {/* Slider */}
            <Slider />
            {/* Category */}
            <section className='grid grid-cols-2 gap-4 p-4 items-center'>
                <div>
                    <img src={image} className='h-full rounded-lg shadow-xl'  />
                </div>
                <div className='pl-3'>
                    <p className='text-xl font-display '>Commitment</p>
                    <h2 className='text-6xl font-display '>Ensure Proper service</h2>
                    <p className='font-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sunt expedita neque eum enim veritatis molestiae, repudiandae qui, dolor id, numquam soluta! Deleniti cupiditate accusantium error blanditiis repudiandae. Libero, nisi.</p>
                    <div className='mt-10 flex gap-5 '>
                        <button className='bg-[#3498DB] text-[#FBFCFC] font-display rounded-lg px-6 py-3 hover:bg-[#1F618D] '>Book Now</button>
                        <button className='bg-[#3498DB] text-[#FBFCFC] font-display rounded-lg px-6 py-3 hover:bg-[#1F618D] '>Contact Us</button>
                    </div>
                </div>
            </section>
            {/* Section 3 */}
            <section className='bg-[#ff1d58] py-10 my-10'>
                <h1 className='font-display text-3xl text-white text-center'>WHY CHOOSE MY HOME ?</h1>
            </section>
        </div>
    );
};

export default Home;