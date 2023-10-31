import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Drawer from '../shared/Drawer';

const Dashboard = () => {
    return (
        <div className='flex pt-10 max-w-7xl mx-auto bg-[#c2edda]'>
            <Drawer></Drawer>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;