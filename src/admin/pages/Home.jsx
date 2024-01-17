import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; 

const AdminHome = () => {
  const [residents, setResidents] = useState([]);
  console.log(residents);

  // total amount calculation
  const myNum = residents.map((resident) => parseInt(resident.rent));
  let sum = myNum.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  useEffect(() => {
    fetch("http://localhost:5000/clients")
      .then((res) => res.json())
      .then((data) => setResidents(data));
  }, []);

  return (
    <div className="px-12 rounded-lg w-full">
      <div className="bg-[#FFFFFF] shadow-lg p-10 rounded-lg ">
        <h1 className="font-display text-2xl ">$ {sum}</h1>
      </div>
      <div className="mt-10 rounded-md bg-[#FFFFFF] shadow-md">
        <table className="w-full rounded-lg">
          <thead className="text-gray-700 font-display uppercase text-lg text-left rounded-lg">
            <tr className="bg-dark-purple text-white origin-left font-display text-xl ">
              <th className="px-6 py-3">Id</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Rent Rate</th>
              <th className="px-6 py-3">Last Month</th>
              {/* <th className='px-6 py-3'></th> */}
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">View</th>
            </tr>
          </thead>
          <tbody className="text-[#000000] font-regular uppercase text-lg text-left ">
            {residents.map((resident) => (
              <tr className="border-b-2 border-[#000000]" key={resident._id}>
                <th className="px-6 py-3 bg-gray-50">{resident.code}</th>
                <th className="px-6 py-3 bg-gray-50">{resident.name}</th>
                <th className="px-6 py-3 bg-gray-50">{resident.rent}</th>
                <th className="px-6 py-3 bg-gray-50"></th>
                {/* <th className='px-6 py-3 bg-gray-50'></th> */}
                <th className="px-6 py-3 bg-gray-50"></th>
                <th className="px-6 py-3 bg-gray-50">
                  {" "}
                  <Link to={`/dashboard/clientdetails/${resident._id}`}>
                    <button>Details</button>
                  </Link>{" "}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHome;
