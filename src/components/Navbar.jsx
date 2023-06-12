import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
    type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative p-3 text-xl rounded-full hover:bg-light-gray"
      >
         <span
        style={{ background: dotColor }}
        className="absolute inline-flex w-2 h-2 rounded-full right-2 top-2"
      />
      {icon}
    </button>
      </TooltipComponent>
)


const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <div className="relative flex justify-between p-2 md:ml-6 md:mr-6">
      <NavButton title='menu' customFunc={()=> setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} color='blue' icon={<AiOutlineMenu />} />
    </div>
  );
};

export default Navbar;
