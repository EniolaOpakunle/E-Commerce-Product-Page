import React, { useState, useEffect } from "react";
import productImg1 from "../assets/image-product-1.jpg";
import productImg2 from "../assets/image-product-2.jpg";
import productImg3 from "../assets/image-product-3.jpg";
import productImg4 from "../assets/image-product-4.jpg";
import cartImg from "../assets/icon-cart.svg";
import minusImg from "../assets/icon-minus.svg";
import plusImg from "../assets/icon-plus.svg";
import Lightbox from "../components/Lightbox";
import logo from "../assets/logo.svg";
// import cartImg from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import deleteImg from "../assets/icon-delete.svg";
import menuImg from "../assets/icon-menu.svg";

function Display() {
  const images = [productImg1, productImg2, productImg3, productImg4];
  const [number, setNumber] = useState(0);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState(
    () => JSON.parse(localStorage.getItem("products")) || []
  );
  const handleDeleteCart = () => {
    setProducts([]);
    localStorage.setItem("products", JSON.stringify([]));
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleImgChange = (image) => {
    setIndex(images.indexOf(image));
  };

  const handleIncreaseNum = () => {
    setNumber(number + 1);
  };

  const handleDecreaseNum = () => {
    if (number > 0) setNumber(number - 1);
  };

  const handleAddCart = () => {
    const productObj = {
      img: productImg1,
      name: "Fall Limited Edition Sneakers",
      price: "$125.00",
      quantity: number,
      totalPrice: number * 125.0,
    };
    setProducts(productObj)
    // let products = JSON.parse(localStorage.getItem("products")) || [];
    // products.push(productObj);
  };
  useEffect(() =>{
    localStorage.setItem("products", JSON.stringify(products));
  },[products])

  return (
    <div className=" lg:px-14">
      {/* navbar starts here */}
      <div className="fixed w-full top-0 lg:px-14 bg-white z-10">
        <div className="flex lg:px-10 lg:py-5 justify-between items-center w-full m-auto lg:border-b-2">
          <div className="flex justify-between items-center lg:gap-x-12">
            <button className="text-[#330111] lg:hidde">
              <img src={menuImg} alt="" className="lg:hidden" />
            </button>

            <a href="">
              <img src={logo} alt="sneakers" />
            </a>
            <div className="hidden lg:flex gap-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-500">
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
          <div className="flex items-center lg:gap-x-6">
            <button
              className="bg-white hover:border-white"
              onClick={toggleDropdown}
            >
              <img src={cartImg} alt="" className="w-[25px] h-[25px]" />
            </button>
            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-[400px] lg:mt-[300px] w-full lg:w-[320px]  lg:h-[200px] py-5 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                <div className="border-b-2">
                  <p className="px-5 py-2">Cart</p>
                </div>
                <div className="p-5 gap-3 flex flex-col ">
                  {/* {products.map((product, index) => ( */}
                  <div className="flex items-center justify-center">
                    <img
                      src={products.img}
                      alt=""
                      className="w-[50px] rounded-lg"
                    />
                    <div className="ml-2 flex flex-col">
                      <span>{products.name}</span>
                      <span>
                        {products.price} x {products.quantity}{" "}
                        <b>${products.totalPrice}.00</b>
                      </span>
                    </div>
                    <img
                      src={deleteImg}
                      alt=""
                      className="w-3 h-5 ml-2"
                      onClick={handleDeleteCart}
                    />
                  </div>
                  {/* ))} */}
                  <button
                    className="w-full bg-orange-500 px-9 flex gap-x-2 justify-center lg:w-[280px]"
                    onClick={toggleDropdown}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
            <button className="bg-white hover:border-white">
              <img
                src={avatar}
                alt=""
                className="w-[50px] border-2 rounded-full border-orange-500"
              />
            </button>
          </div>
        </div>
      </div>
      {/* navbar ends here */}
      <div className=" lg:flex mt-[70px] lg:px-10 lg:justify-between">
        <div className=" flex flex-col lg:w-1/2">
          <div className="w-full">
            <Lightbox images={images} imgName={index} />
          </div>
          <div className=" hidden lg:flex lg:gap-x-3">
            {images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt=""
                className=" lg:w-[140px] rounded-lg"
                onClick={() => handleImgChange(image)}
              />
            ))}
          </div>
        </div>
        <div className="p-4 flex flex-col gap-y-5 mt-10 lg:w-1/2 lg:p-0">
          <p className="font-[500]">SNEAKER COMPANY</p>
          <p className="text-4xl lg:text-[45px] font-[700]">
            Fall Limited Edition Sneakers
          </p>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex justify-between items-center lg:block">
            <div className="flex gap-x-3">
              <span className="text-[26px] font-[700]">$125.00</span>
              <span className="bg-black text-white rounded-lg px-3 py-1 text-center">
                50%
              </span>
            </div>
            <p className="line-through">$250.00</p>
          </div>
          <div className="gap-y-3 flex flex-col lg:flex-row lg:gap-x-3">
            <div className="w-full flex items-center lg:gap-x-4 lg:px-7 bg-gray-200 rounded-lg justify-between lg:w-0">
              <button
                onClick={handleDecreaseNum}
                className="bg-gray-200 hover:border-gray-200"
              >
                <img src={minusImg} alt="" />
              </button>
              <p>{number}</p>
              <button
                onClick={handleIncreaseNum}
                className="bg-gray-200 hover:border-gray-200"
              >
                <img src={plusImg} alt="" />
              </button>
            </div>
            <button
              className="w-full bg-orange-500 lg:px-9 flex gap-x-2 justify-center items-center lg-0"
              onClick={handleAddCart}
            >
              <img src={cartImg} alt="" className="" />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
