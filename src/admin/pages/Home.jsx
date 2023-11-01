import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
    const [residents,setResidents] = useState([]);
    const [amount,setAmount] = useState([]);

    const myNum = residents.map(resident => (parseInt(resident.rent)));

    // total amount calculation
    let sum = myNum.reduce((accumulator, currentValue) =>{
        return accumulator + currentValue;
    },0);

    console.log(sum);

    useEffect(() =>{
        fetch("http://localhost:5000/clients")
        .then((res) => res.json())
        .then((data) => setResidents(data))
    },[]);

    return (
        <div className='px-12 rounded-lg'>
            <div>
                <h1>Total Amount Of Rent: {sum}</h1>
            </div>
            <table className='w-full rounded-lg'>
                <thead className='text-gray-700 font-display uppercase text-lg text-left rounded-lg'>
                    <tr className='bg-dark-purple text-white origin-left font-display text-xl '>
                        <th className='px-6 py-3'>Name</th>
                        <th className='px-6 py-3'>Rent Rate</th>
                        <th className='px-6 py-3'>Last Month</th>
                        {/* <th className='px-6 py-3'></th> */}
                        <th className='px-6 py-3'>Unpaid</th>
                        <th className='px-6 py-3'> </th>
                    </tr>
                </thead>
                <tbody className='text-gray-700 font-regular uppercase text-lg text-left'>
                    {
                        residents.map((resident) => (
                            <tr key={resident._id}>
                                <th className='px-6 py-3 bg-gray-50'>{resident.name}</th>
                                <th className='px-6 py-3 bg-gray-50'>{resident.rent}</th>
                                <th className='px-6 py-3 bg-gray-50'></th>
                                {/* <th className='px-6 py-3 bg-gray-50'></th> */}
                                <th className='px-6 py-3 bg-gray-50'></th>
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