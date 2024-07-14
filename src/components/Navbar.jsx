import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import cartImg from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import { useOutletContext } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const productObj = JSON.parse(localStorage.getItem("product")) || [];
    setProducts(productObj);
    // console.log(products)
  }, []);

  console.log(products);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

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
          <button
            className=" bg-white hover:border-white"
            onClick={() => toggleDropdown()}
          >
            <img src={cartImg} alt="" className="w-[25px] h-[25px]" />
          </button>
          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-[300px] w-[320px] h-[200px] py-5 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="border-b-2">
                <p className="px-5 py-2">Cart</p>
              </div>
              <div className="p-5 gap-3 flex flex-col">
                <div className="flex ">
                  <p>
                    <img
                      src={products.img}
                      alt=""
                      className="w-[50px] rounded-lg"
                    />
                  </p>
                  <p className="ml-1 flex flex-col">
                    <span>{products.name}</span>
                    <span>{products.price} * {products.quantity} <b>{products.totalPrice}</b></span>
                  </p>
                </div>
                <div className="">
                <button className="bg-orange-500 px-9 flex gap-x-2 justify-center w-[280px]">Checkout</button>
                </div>
              </div>
            </div>
          )}
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
