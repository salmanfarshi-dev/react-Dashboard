import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="bg-primary1 py-3 px-2 md:px-4 md:py-2 lg:w-6xl">
      <div className="flex items-center justify-between gap-2">

       
        <button
          onClick={toggleSidebar}
          className="md:hidden text-grayText text-xl cursor-pointer"
        >
          <FiMenu />
        </button>

       
        <div className="flex gap-x-2 items-center flex-1 max-w-50 md:max-w-100 lg:max-w-125 bg-primary2 py-1.5 rounded-xl px-3 text-grayText shadow-lg">
          <FiSearch />

          <input
            type="text"
            placeholder="Search here...."
            className="text-grayText w-full focus:outline-none bg-transparent"
          />
        </div>

        
        <div className="flex items-center gap-x-2 ml-14 md:ml-0">

          <div className="relative">
            <IoMdNotifications className="text-grayText text-2xl" />

            <div className="w-2 h-2 rounded-full bg-red-500 absolute top-0 right-0"></div>
          </div>

          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="/public/Profile.png"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;