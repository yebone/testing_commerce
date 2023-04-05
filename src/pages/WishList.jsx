import React from "react";
import WishListCard from "../components/WishListCard";
import { useStateContext } from "../context/StateContext";
import Navbar from "../components/Navbar";

const WishList = () => {
  const {
    state: { wishListProducts },
  } = useStateContext();

  return (
    <div>
      <Navbar />
      <div>
        <h1 className=" text-1xl md:text-2xl lg:text-3xl text-center py-3 mb-1 font-bold text-slate-400">
          My WishLists
        </h1>
      </div>
      <div className=" flex gap-5 flex-wrap justify-center">
        {wishListProducts?.map((product) => {
          return <WishListCard key={product.goods_id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default WishList;
