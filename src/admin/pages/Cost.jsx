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
            <Link to='/dashboard/costadd'><button className='bg-[#0049B7] px-6 py-4 font-display text-white rounded-lg '>Add Cost</button></Link>
            <table className='w-full rounded-lg mt-10'>
                <thead className='text-gray-700 font-display uppercase text-lg text-left'>
                    <tr className="bg-dark-purple text-white origin-left font-display text-xl">
                        <th className='px-6 py-3'>Date</th>
                        <th className='px-6 py-3'>Statement</th>
                        <th className='px-6 py-3'>Amonut</th>
                        <th className='px-6 py-3'></th>
                    </tr>
                </thead>
                <tbody className='text-[#000000] font-regular uppercase text-lg text-left'>
                    {costs.map((cost) => 
                    <tr className="border-b-2 border-[#000000]" key={cost._id}>
                    <th className='px-6 py-3'>{cost.date}</th>
                    <th className='px-6 py-3'>{cost.statement}</th>
                    <th className='px-6 py-3'>{cost.amount}</th>
                    {/* <th className='px-6 py-3'></th> */}
                    <th className='px-6 py-3'></th>
                    {/* <th className='px-6 py-3'> <Link to='/clientdetails'><button>Details</button></Link> </th> */}
                </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Cost;