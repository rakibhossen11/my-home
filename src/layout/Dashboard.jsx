import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Drawer from '../shared/Drawer';

const Dashboard = () => {
    return (
        <div className='flex max-w-7xl mx-auto py-10 bg-[#c2edda]'>
            <div className='basis-1/4'>
                <Drawer></Drawer>
            </div>
            <div className='basis-3/4 '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;