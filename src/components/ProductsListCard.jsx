import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";

const ProductsListCard = ({ goods_img, goods_id, goods_name, salePrice }) => {
  const { state, dispatch } = useStateContext();
  const [toggle, setToggle] = useState(false);

  return (
    <div className="  w-[150px] md:w-[250px] ">
      {/* both image and name will direct to detail page and 
     passing goods_id as a param to process get/product/detail request */}
      <Link to={`/productDetail/${goods_id}`}>
        <img
          className=" object-fill cursor-pointer"
          src={goods_img}
          alt={goods_name}
        />
      </Link>
      <div>
        <Link to={`/productDetail/${goods_id}`}>
          <h2 className=" cursor-pointer truncate ...">{goods_name}</h2>
        </Link>
        <div className=" flex justify-between items-center text-rose-600">
          <h3>{salePrice.usdAmountWithSymbol}</h3>
          <div onClick={() => setToggle(!toggle)} className="cursor-pointer">
            {toggle ? (
              <AiFillHeart
                className="text-2xl"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_WISHLIST",
                    payload: goods_id,
                  })
                }
              />
            ) : (
              <AiOutlineHeart
                className="text-2xl"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_WISHLIST",
                    payload: { goods_img, goods_id, goods_name, salePrice },
                  })
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsListCard;
