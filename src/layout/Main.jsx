import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;