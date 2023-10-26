import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-[#6495ED] rounded-b-3xl mt-10 flex items-center justify-between px-10 py-10'>
            <h1 className='font-display text-3xl text-[#FBFCFC]'>MY HOME</h1>
            <div className='flex gap-6 justify-center items-center text-[#FBFCFC] text-2xl'>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Customer Add</h1>
                <h1>See All</h1>
            </div>
        </div>
    );
};

export default Navbar;