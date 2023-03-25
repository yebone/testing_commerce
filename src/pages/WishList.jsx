import React from "react";
import WishListCard from "../components/WishListCard";
import { useStateContext } from "../context/StateContext";

const WishList = () => {
  const {
    state: { products },
  } = useStateContext();

  return (
    <div>
      <div>
        <h1>My WishLists</h1>
      </div>
      <div className=" flex gap-5 flex-wrap justify-center">
        {products?.map((product) => {
          return <WishListCard key={product.goods_id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default WishList;
