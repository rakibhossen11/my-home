import React from "react";
import profile from "../../assets/home2.jpg";
import { Link, useLoaderData } from "react-router-dom";

const ClientDetails = () => {
  const client = useLoaderData();
  const {_id, name} = client;
  console.log(client._id);

  
  return (
    <div className="w-full">
      <div className="flex p-10 m-10 gap-5  bg-gray-100">
        <div>
          <img className="h-20 w-20 rounded-lg" src={profile} />
        </div>
        <div className="font-display text-2xl">
          <h1>Name: {name}</h1>
          <h1>Phone: 01966366745</h1>
          <h1>Address: Jamalpur</h1>
          <Link to='/dashboard/rent'><h2>Edit</h2></Link>
        </div>
      </div>
      {/* data table */}
      <div className="px-12 rounded-lg">
        <table className="w-full rounded-lg mt-10">
          <thead className="font-display uppercase text-lg text-left">
            <tr className="bg-dark-purple text-white origin-left font-display text-xl">
              <th className="px-6 py-3">Month Name</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Total Amount</th>
              <th className="px-6 py-3">Paid</th>
              <th className="px-6 py-3">Unpaid</th>
            </tr>
          </thead>
          <tbody className="text-[#000000] font-regular uppercase text-lg text-left">
            <tr className="border-b-2 border-[#000000]">
              <th className="px-6 py-3 ">Octobor 23</th>
              <th className="px-6 py-3 ">Paid</th>
              <th className="px-6 py-3 ">3000</th>
              {/* <th className='px-6 py-3 '></th> */}
              <th className="px-6 py-3 ">3000</th>
              <th className="px-6 py-3 ">0</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientDetails;
