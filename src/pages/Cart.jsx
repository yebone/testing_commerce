import React, { useState } from "react";
import CartCard from "../components/CartCard";
import { useStateContext } from "../context/StateContext";

const Cart = () => {
  const {
    state: { addToBagProducts },
  } = useStateContext();
  return (
    <div>
      <div className=" border shadow-md">
        {addToBagProducts?.map((product) => {
          const [count, setCount] = useState(1);

          return (
            <CartCard
              key={product.goods_id}
              {...product}
              count={count}
              setCount={setCount}
            />
          );
        })}
      </div>
      <div>
        <h1 className="text-3xl"></h1>
      </div>
    </div>
  );
};

export default Cart;
