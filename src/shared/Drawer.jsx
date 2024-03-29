import React, { useState } from "react";
import { Link } from "react-router-dom";

const Drawer = () => {
  const [open,setOpen] = useState(true);
  const menus = [
    { title: "Dashboard", src: "Chart_fill", to: '/dashboard/adminhome' },
    { title: "Collection", src: "Chat", to: '/dashboard/rentcollection' },
    { title: "Accounts", src: "User", to: '/dashboard/cost', gap: true },
    // { title: "Schedule ", src: "Calendar" },
    // { title: "Search", src: "Search" },
    // { title: "Analytics", src: "Chart" },
    // { title: "Files ", src: "Folder", gap: true },
    // { title: "Setting", src: "Setting" },
  ]
  return (
    <div className="flex">
        <div className={`${open ? "w-72" : "w-20"} bg-dark-purple h-screen p-5 pt-8 relative duration-300`}>
          <img src="../../src/assets/control.png" alt="" className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img src="../../src/assets/logo (1).png" className={`cursor-pointer duration-500 ${!open && "rotate-180"}`} />
            <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && 'scale-0'}`}>Designer</h1>
          </div>
          <ul className="pt-6">
              {
                menus.map((menu,index) => (
                  <li key={index} 
                  
                  >
                    <Link to={`${menu.to}`} className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && 'bg-light-white'}`}>
                    <img src={`../../src/assets/${menu.src}.png`} alt="" />
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                    </Link>
                    
                  </li>
                ))
              }
          </ul>
        </div>
    </div>
  );
};

export default Drawer;
