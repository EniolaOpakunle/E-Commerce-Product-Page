import React, { useState } from "react";
import productImg1 from "../assets/image-product-1.jpg";
import productImg2 from "../assets/image-product-2.jpg";
import productImg3 from "../assets/image-product-3.jpg";
import productImg4 from "../assets/image-product-4.jpg";
import productImg1Th from "../assets/image-product-1-thumbnail.jpg";

function Display() {
  const [imgName, setImgName] = useState(productImg1)
  const handleImgChange = (image) =>{
    setImgName(image)

  }
  return (
    <div className="w-[1400px] px-14">
      <div className="flex mt-[100px] px-8">
        <div className="flex flex-col gap-y-5">
          <img
            src={imgName}
            alt=""
            className=" h-[350px] rounded-lg"
          />
          <div className="flex gap-x-2">
            <img src={productImg1} alt="" className="w-[120px] rounded-lg" onClick={() => handleImgChange(productImg1)}/>
            <img src={productImg2} alt="" className="w-[120px] rounded-lg" onClick={() => handleImgChange(productImg2)}/>
            <img src={productImg3} alt="" className="w-[120px] rounded-lg" onClick={() => handleImgChange(productImg3)}/>
            <img src={productImg4} alt="" className="w-[120px] rounded-lg" onClick={() => handleImgChange(productImg4)}/>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Display;
