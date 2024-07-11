import React from "react";
import logo from "../assets/logo.svg";
import cartImg from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";

function Navbar() {
  return (
    <div className="fixed top-0 px-14">
      <div className="  flex px-10 py-5 justify-between items-center w-[1400px]  m-auto border-b-2">
        <div className="flex gap-x-12">
          <a href="">
            <img src={logo} alt="sneakers" />
          </a>
          <div className="flex gap-x-6">
            <a href="#" className=" text-gray-400 hover:text-orange-500">
              Collection
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              Men
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              Women
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              Contact
            </a>
    
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <select name="" id="" value={'hii'}>
            {/* <option value=""></option>
             */}
             <img src={cartImg} alt="" className="w-[25px] h-[25px]" />
            {/* <option value="">hi</option> */}
          </select>
          {/* <button className=" bg-white hover:border-white">
            <img src={cartImg} alt="" className="w-[25px] h-[25px]" />
          </button> */}
          <button className=" bg-white hover:border-white">
            <img
              src={avatar}
              alt=""
              className="w-[50px] border-2 rounded-full border-orange-500"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
