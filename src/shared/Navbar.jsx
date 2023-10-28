import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-[#f75990] rounded-b-3xl mt-10 flex items-center justify-between px-10 py-10'>
            <h1 className='font-display text-3xl text-[#FBFCFC]'><Link to='/'>MY HOME</Link></h1>
            <div className='flex gap-6 justify-center items-center text-[#FBFCFC] text-2xl'>
                <h1><Link to='/'>Home</Link></h1>
                <h1><Link to='dashboard'>Dashboard</Link></h1>
            </div>
        </div>
    );
};

export default Navbar;