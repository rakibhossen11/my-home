import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RentCollection = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch("https://myhome-server.vercel.app/payments")
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, []);

  return (
    <div className="px-12 rounded-lg w-full">
      <Link to="/dashboard/rent">Rent Add</Link>
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
          {payments.map((payment) => (
            <tr className="border-b-2 border-[#000000]" key={payment._id}>
              <th className="px-6 py-3">{payment.name}</th>
              <th className="px-6 py-3">January</th>
              <th className="px-6 py-3">{payment.amount}</th>
              <th className="px-6 py-3">PAid</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RentCollection;
