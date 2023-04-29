import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin3Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { remove_from_wishlists } from "../features/wishlists/wishListsSlice";

const WishListCard = ({ goods_img, goods_id, goods_name, salePrice }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-[150px] md:w-[250px] group z-0  ">
      {/* both image and name will direct to detail page and 
     passing goods_id as a param to process get/product/detail request */}
      <div className="relative">
        <Link to={`/productDetail/${goods_id}`}>
          <img
            className=" object-fill cursor-pointer "
            src={goods_img}
            alt={goods_name}
          />
        </Link>
        {/* Add to bag btn */}
        {/* <button
          onClick={() =>
            dispatch({
              type: "ADD_TO_BAG",
              payload: { goods_img, goods_id, goods_name, salePrice },
            })
          }
          className=" text-sm font-bold bg-white px-12 py-2 absolute left-9 top-60 opacity-0 group-hover:opacity-100 "
        >
          ADD TO BAG
        </button> */}
      </div>
      <div>
        <Link to={`/productDetail/${goods_id}`}>
          <h2 className=" cursor-pointer truncate ...">{goods_name}</h2>
        </Link>
        <div className=" flex justify-between items-center text-rose-600">
          <h3>{salePrice.usdAmountWithSymbol}</h3>
          <RiDeleteBin3Line
            className=" cursor-pointer opacity-0 group-hover:opacity-80"
            onClick={() => dispatch(remove_from_wishlists(goods_id))}
          />
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
