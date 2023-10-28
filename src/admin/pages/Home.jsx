import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {

    const residents = [
        {
            'name': 'Aminul Islam',
            'roomno': '02',
            'rentrate': '3000',
            'unpaid': '0'
        },
        {
            'name': 'Aminul Islam',
            'roomno': '02',
            'rentrate': '3000',
            'unpaid': '2000'
        },
    ]

    return (
        <div className='px-12 rounded-lg'>
            <table className='w-full rounded-lg'>
                <thead className='text-gray-700 font-display uppercase text-lg text-left'>
                    <tr>
                        <th className='px-6 py-3 bg-gray-200'>Name</th>
                        <th className='px-6 py-3 bg-gray-200'>Rent Rate</th>
                        <th className='px-6 py-3 bg-gray-200'>Last Month</th>
                        {/* <th className='px-6 py-3 bg-gray-200'></th> */}
                        <th className='px-6 py-3 bg-gray-200'>Unpaid</th>
                        <th className='px-6 py-3 bg-gray-200'> </th>
                        
                    </tr>
                </thead>
                <tbody className='text-gray-700 font-regular uppercase text-lg text-left'>
                    {
                        residents.map((resident) => (
                            <tr>
                                <th className='px-6 py-3 bg-gray-50'>{resident.name}</th>
                                <th className='px-6 py-3 bg-gray-50'>{resident.rentrate}</th>
                                <th className='px-6 py-3 bg-gray-50'>Octobor 23</th>
                                {/* <th className='px-6 py-3 bg-gray-50'></th> */}
                                <th className='px-6 py-3 bg-gray-50'>{resident.unpaid}</th>
                                <th className='px-6 py-3 bg-gray-50'> <Link to='/clientdetails'><button>Details</button></Link> </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AdminHome;