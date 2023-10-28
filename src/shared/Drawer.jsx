import React from "react";
import { Link } from "react-router-dom";

const Drawer = () => {
  return (
    <div className="bg-[#fbe3e8]">
      <ul className="font-display flex flex-col">
        <Link
          to="/dashboard/adminhome"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          Residents
        </Link>
        <Link to="/dashboard/rentcollection" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          Rent Collection
        </Link>
        <Link to="/dashboard/cost" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          Cost
        </Link>
        <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          Home
        </Link>
      </ul>
    </div>
  );
};

export default Drawer;
