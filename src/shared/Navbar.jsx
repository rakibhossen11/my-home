import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="bg-white">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
          <div>
            <img
              className="w-16 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
              alt=""
            />
          </div>
          <div className="duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li className="hover:text-gray-500"><Link to='/'>Home</Link></li>
              <li className="hover:text-gray-500">About</li>
              <li className="hover:text-gray-500">Pricing</li>
              <li className="hover:text-gray-500"><Link to='/dashboard/adminhome'>Dashboard</Link></li>
            </ul>
          </div>
          <div class="flex items-center gap-6">
            <button class="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              Sign in
            </button>
            <ion-icon
              name="menu"
              class="text-3xl cursor-pointer md:hidden"
            ></ion-icon>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
