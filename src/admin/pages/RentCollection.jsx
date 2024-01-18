import React from "react";
import { Link } from "react-router-dom";

const RentCollection = () => {
  return (
    <div className="px-12 rounded-lg w-full">
       <Link to='/dashboard/rent'>Rent Add</Link>
      <table className="w-full rounded-lg mt-10">
        <thead className="text-gray-700 font-display uppercase text-lg text-left">
          <tr className="bg-dark-purple text-white origin-left font-display text-xl ">
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Payment Month</th>
            <th className="px-6 py-3">Amount</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="text-[#000000] font-regular uppercase text-lg text-left">
          <tr>
            <th className="px-6 py-3">Aminul</th>
            <th className="px-6 py-3">Octobor 23</th>
            <th className="px-6 py-3">3000</th>
            <th className="px-6 py-3">Paid</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RentCollection;
