import React from 'react';
import { Link } from 'react-router-dom';

const Cost = () => {
    return (
        <div className='px-12 rounded-lg'>
            <Link to='/costadd'><button className='bg-[#0049B7] px-6 py-4 font-display text-white rounded-lg '>Add Cost</button></Link>
            <table className='w-full rounded-lg mt-10'>
                <thead className='text-gray-700 font-display uppercase text-lg text-left'>
                    <tr>
                        <th className='px-6 py-3 bg-gray-200'>Date</th>
                        <th className='px-6 py-3 bg-gray-200'>Statement</th>
                        <th className='px-6 py-3 bg-gray-200'>Amonut</th>
                        <th className='px-6 py-3 bg-gray-200'></th>
                    </tr>
                </thead>
                <tbody className='text-gray-700 font-regular uppercase text-lg text-left'>
                    
                </tbody>
            </table>
        </div>
    );
};

export default Cost;