import React from "react";
import profile from "../../assets/home2.jpg";
import { Link } from "react-router-dom";

const ClientDetails = () => {
  return (
    <div>
      <div className="flex p-10 m-10 gap-5  bg-gray-100">
        <div>
          <img className="h-20 w-20 rounded-lg" src={profile} />
        </div>
        <div className="font-display text-2xl">
          <h1>Name: Aminul Islam</h1>
          <h1>Phone: 01966366745</h1>
          <h1>Parmanent Address: Jamalpur</h1>
          <Link to='/dashboard/rent'><h2>Edit</h2></Link>
        </div>
      </div>
      {/* data table */}
      <div className="px-12 rounded-lg">
        <table className="w-full rounded-lg mt-10">
          <thead className="text-gray-700 font-display uppercase text-lg text-left">
            <tr>
              <th className="px-6 py-3 bg-gray-200">Month Name</th>
              <th className="px-6 py-3 bg-gray-200">Status</th>
              <th className="px-6 py-3 bg-gray-200">Total Amount</th>
              <th className="px-6 py-3 bg-gray-200">Paid</th>
              <th className="px-6 py-3 bg-gray-200">Unpaid</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 font-regular uppercase text-lg text-left">
            <tr>
              <th className="px-6 py-3 bg-gray-50">Octobor 23</th>
              <th className="px-6 py-3 bg-gray-50">Paid</th>
              <th className="px-6 py-3 bg-gray-50">3000</th>
              {/* <th className='px-6 py-3 bg-gray-50'></th> */}
              <th className="px-6 py-3 bg-gray-50">3000</th>
              <th className="px-6 py-3 bg-gray-50">0</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientDetails;
