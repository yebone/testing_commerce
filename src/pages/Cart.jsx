import React, { useEffect, useState } from "react";
import CartCard from "../components/CartCard";
import { useStateContext } from "../context/StateContext";
import CheckoutNavbar from "../components/CheckoutNavbar";

const Cart = () => {
  const {
    state: { addToBagProducts },
  } = useStateContext();
  //Main Total of all products in cart
  const [mainTotal, setMainTotal] = useState(0);
  useEffect(() => {
    setMainTotal(total);
  }, []);
  const total = addToBagProducts.reduce(
    (pv, cv) => pv + Number(cv.salePrice.amount),
    0
  );
  // updating main total according to the numbers of individual product
  // it will be update with quantity state
  function increaseMainTotal(price) {
    setMainTotal(mainTotal + price);
  }
  function decreaseMainTotal(price) {
    setMainTotal(mainTotal - price);
  }
  return (
    <div>
      <CheckoutNavbar />
      <div className=" border shadow-md max-w-fit p-3 flex flex-col items-center">
        {addToBagProducts?.map((product) => {
          const [quantity, setQuantity] = useState(1);

          return (
            <CartCard
              key={product.goods_id}
              {...product}
              quantity={quantity}
              setQuantity={setQuantity}
              increaseMainTotal={increaseMainTotal}
              decreaseMainTotal={decreaseMainTotal}
            />
          );
        })}
      </div>
      <div>
        <h1 className="text-3xl">{mainTotal.toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default Cart;
