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
        <h1>My WishLists</h1>
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
