import React, { useState } from "react";
import productImg1 from "../assets/image-product-1.jpg";
import productImg2 from "../assets/image-product-2.jpg";
import productImg3 from "../assets/image-product-3.jpg";
import productImg4 from "../assets/image-product-4.jpg";
import cartImg from "../assets/icon-cart.svg";
import minusImg from "../assets/icon-minus.svg";
import plusImg from "../assets/icon-plus.svg";
import Lightbox from "../components/Lightbox";

function Display() {
  const images = [productImg1,productImg2,productImg3,productImg4]
  const [imgName, setImgName] = useState(productImg1);
  const [number, setNumber] = useState(0);
  const [Index, setIndex] = useState(0)
  const handleImgChange = (image) => {
    setIndex(images.indexOf(image))
    console.log(images.indexOf(image))
    setImgName(image);
  };
  const handleIncreaseNum = () => {
    let num = number + 1;
    setNumber(num);
  };
  const handleDecreaseNum = () => {
    let num = number - 1;
    setNumber(num);
  };
  return (
    <div className="w-[1400px] px-14">
      <div className="flex mt-[100px] px-10 justify-between">
        <div className="flex flex-col gap-y-5">
          {/* <img src={imgName} alt="" className=" h-[350px] rounded-lg" /> */}
          <Lightbox images = {images} imgName= {Index}/>
          <div className="flex gap-x-2">
            <img
              src={productImg1}
              alt=""
              className="w-[130px] rounded-lg"
              onClick={() => handleImgChange(productImg1)}
            />
            <img
              src={productImg2}
              alt=""
              className="w-[130px] rounded-lg"
              onClick={() => handleImgChange(productImg2)}
            />
            <img
              src={productImg3}
              alt=""
              className="w-[130px] rounded-lg"
              onClick={() => handleImgChange(productImg3)}
            />
            <img
              src={productImg4}
              alt=""
              className="w-[130px] rounded-lg"
              onClick={() => handleImgChange(productImg4)}
            />
          </div>
        </div>
        <div className="w-[500px] flex flex-col gap-y-5 mt-10">
          <p>SNEAKER COMPANY</p>
          <h1 className=" text-[45px] font-[700]">Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer
          </p>
          <div className="flex gap-x-3">
            <span className="text-[26px] font-[700]">$125.00</span>
            <span className="bg-black text-white rounded-lg px-3 py-1 text-center">
              50%
            </span>
          </div>
          <p className="line-through">$250.00</p>
          <div className="flex gap-x-3">
            <div className="flex items-center gap-x-4 px-7 bg-gray-200 rounded-lg">
              <button
                onClick={() => handleDecreaseNum()}
                className="bg-gray-200 hover:border-gray-200"
              >
                <img src={minusImg} alt="" />
              </button>
              <p>{number}</p>
              <button
                onClick={() => handleIncreaseNum()}
                className="bg-gray-200 hover:border-gray-200"
              >
                <img src={plusImg} alt="" />
              </button>
            </div>
            <div>
              <button className="bg-orange-500 px-9 flex gap-x-2 items-center">
                <img src={cartImg} alt="" className="" />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
