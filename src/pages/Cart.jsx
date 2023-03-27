import React, { useState } from "react";
import CartCard from "../components/CartCard";
import { useStateContext } from "../context/StateContext";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const {
    state: { addToBagProducts },
  } = useStateContext();
  console.log(addToBagProducts);
  return (
    <div>
      <div className=" border shadow-md">
        {addToBagProducts?.map((product) => {
          return (
            <CartCard
              key={product.goods_id}
              {...product}
              setTotal={setTotal}
              total={total}
            />
          );
        })}
      </div>
      <div>
        <h1 className="text-3xl">{total}</h1>
      </div>
    </div>
  );
};

export default Cart;
