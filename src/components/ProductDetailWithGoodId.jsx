import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectDetailId13468318 } from "../storage";

const ProductDetailWithGoodId = ({ product }) => {
  return (
    <div>
      <div className=" flex gap-1 flex-nowrap overflow-auto scrollbar-hide ">
        {product?.allColorDetailImages[product?.goods_id].map((image) => (
          <img src={image.origin_image} className="h-[50vh] object-contain" />
        ))}
      </div>
      <div>
        <h1>{product?.goods_name}</h1>
        <div className="flex justify-between">
          <p>{product?.sale_price.amountWithSymbol}</p>
          <p>rating</p>
        </div>
        <div>
          <h2>Size</h2>
          <div className="flex gap-3">
            {Object.keys(product?.attrSizeDict).map((size) => (
              <p className=" m-1 px-4 py-1 rounded-full border-2">{size}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailWithGoodId;
