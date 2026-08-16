import React, { useState } from 'react'
import { RiHomeFill } from "react-icons/ri";
import { MdOutlinePerson } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";
import { Link } from 'react-router';
import { IoMdClose } from "react-icons/io";

const sidebarItems = [
  {
    name: "Deshboard",
    icon: <RiHomeFill />,
    link: "/"
  },
  {
    name: "Profile",
    icon: <MdOutlinePerson />,
    link: "profile"
  },
  {
    name: "Order",
    icon: <FaCartShopping />,
    link: "order"
  },
  {
    name: "Product",
    icon: <IoBagHandleOutline />,
    link: "products"
  },
  {
    name: "Sales Report",
    icon: <FaChartLine />,
    link: "selasReport"
  },
]

function Sidebar({ toggleSidebar }) {
  const [isactive, setIsActive] = useState(0)

  return (
    <div className='text-grayText bg-primary1 border-r h-screen p-5 w-44 transition-all'>
      <ul className='space-y-3 mt-5 md:mt-0'>
        {
          sidebarItems.map((item, idx) => (
            <li key={item.name}>
              <Link
                to={item.link}
                onClick={() => setIsActive(idx)}
                className={`flex font-medium px-2 py-2 rounded-lg items-center gap-2 cursor-pointer hover:bg-secondary hover:text-primary1 transition-all duration-200 ${idx === isactive ? "text-primary2 bg-secondary" : "text-grayText"}`}
              >
                {item.icon} {item.name}
              </Link>
            </li>
          ))
        }
      </ul>
     <button
  onClick={toggleSidebar}
  className="md:hidden absolute top-0 right-0 px-2 py-3 text-2xl cursor-pointer"
>
  <IoMdClose />
</button>
    </div>
  )
}

export default Sidebar