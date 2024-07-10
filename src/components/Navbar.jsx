import React from "react";
import logo from "../assets/logo.svg";
import cartImg from '../assets/icon-cart.svg'
import avatar from '../assets/image-avatar.png'

function Navbar() {
  return (
    <div className="fixed top-0 px-14">
      <div className="  flex py-5 justify-between items-center w-[1400px]  m-auto border-b-2">
        <div className="flex gap-x-12" >
          <a href="">
            <img src={logo} alt="sneakers" />
          </a>
          <div className="flex gap-x-6">
            <p className="text-red">collections</p>
            <p className="transition ease-in-out hover:text-red-500 duration-300">Men</p>
            <p className="hover:text-red-500">Women</p>
            <p className="hover:text-red-500">About</p>
            <p className="hover:text-red-500">Contact</p>
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <img src={cartImg} alt="" className="w-[25px] h-[25px]" />
          <img src={avatar} alt="" className="w-[50px] border-2 rounded-full border-orange-500"/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
