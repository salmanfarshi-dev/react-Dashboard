
import { FaRankingStar } from "react-icons/fa6";
import { RiBattery2ChargeLine } from "react-icons/ri";
import { MdPersonalInjury } from "react-icons/md";
import { TbShoppingBagEdit } from "react-icons/tb";



const salesData = [
  {
    id: 1,
    icon: FaRankingStar ,
    sale: '$12,450',
    title: 'Total Sales',
    des: 'Compared to last month',
    color: '#FEB95A'
  },
  {
    id: 2,
    icon: RiBattery2ChargeLine ,
    sale: '$8,320',
    title: 'Orders',
    des: 'New purchases this week',
    color: '#A9DFD8'
  },
  {
    id: 3,
    icon: TbShoppingBagEdit ,
    sale: '$4,780',
    title: 'Revenue',
    des: 'Growth in online sales',
    color: '#F2C8ED'
  },
  {
    icon: MdPersonalInjury ,
    id: 4,
    sale: '$3,600',
    title: 'Customers',
    des: 'Returning shoppers this month',
    color: '#20AEF3'
  }
];

export default salesData;
