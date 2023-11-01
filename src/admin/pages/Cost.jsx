import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cost = () => {
    const [costs,setCosts] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5000/costs")
        .then((res) => res.json())
        .then((data) => setCosts(data))
    },[])

    return (
        <div className='px-12 rounded-lg w-full'>
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
                    {costs.map((cost) => 
                    <tr key={cost._id}>
                    <th className='px-6 py-3 bg-gray-50'>{cost.date}</th>
                    <th className='px-6 py-3 bg-gray-50'>{cost.statement}</th>
                    <th className='px-6 py-3 bg-gray-50'>{cost.amount}</th>
                    {/* <th className='px-6 py-3 bg-gray-50'></th> */}
                    <th className='px-6 py-3 bg-gray-50'></th>
                    {/* <th className='px-6 py-3 bg-gray-50'> <Link to='/clientdetails'><button>Details</button></Link> </th> */}
                </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Cost;