import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import { RiDeleteBin3Line } from "react-icons/ri";

const WishListCard = ({ goods_img, goods_id, goods_name, salePrice }) => {
  const { dispatch } = useStateContext();

  return (
    <div className=" w-[250px] group  ">
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
          <RiDeleteBin3Line
            className=" cursor-pointer opacity-0 group-hover:opacity-80"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: goods_id,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default WishListCard;