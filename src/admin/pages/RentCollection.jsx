import React from "react";

const RentCollection = () => {
  return (
    <div className="px-12 rounded-lg w-full">
      <table className="w-full rounded-lg mt-10">
        <thead className="text-gray-700 font-display uppercase text-lg text-left">
          <tr>
            <th className="px-6 py-3 bg-gray-200">Name</th>
            <th className="px-6 py-3 bg-gray-200">Payment Month</th>
            <th className="px-6 py-3 bg-gray-200">Amount</th>
            <th className="px-6 py-3 bg-gray-200">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 font-regular uppercase text-lg text-left">
          <tr>
            <th className="px-6 py-3 bg-gray-200">Aminul</th>
            <th className="px-6 py-3 bg-gray-200">Octobor 23</th>
            <th className="px-6 py-3 bg-gray-200">3000</th>
            <th className="px-6 py-3 bg-gray-200">Paid</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RentCollection;
