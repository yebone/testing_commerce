import React from "react";
import WishListCard from "../components/WishListCard";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const WishList = () => {
  const wishlistsProducts = useSelector(
    (state) => state.wishlists.wishlistsProducts
  );

  return (
    <div>
      <Navbar />
      <div>
        <h1 className=" text-1xl md:text-2xl lg:text-3xl text-center py-3 mb-1 font-bold text-slate-400">
          My WishLists
        </h1>
      </div>
      <div className=" flex gap-5 flex-wrap justify-center">
        {wishlistsProducts?.map((product) => {
          return <WishListCard key={product.goods_id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default WishList;
