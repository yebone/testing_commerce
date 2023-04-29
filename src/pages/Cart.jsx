import React from "react";
import CartCard from "../components/CartCard";
import CheckoutNavbar from "../components/CheckoutNavbar";
import { useSelector } from "react-redux";

const Cart = () => {
  const bagProducts = useSelector((state) => state.bag.bagProducts);
  const mainTotalPrice = useSelector((state) => state.bag.totalPrice);

  return (
    <div>
      <CheckoutNavbar />
      <div className=" border shadow-md max-w-fit p-3 flex flex-col items-center">
        {bagProducts?.map((product) => {
          return <CartCard key={product.goods_id} {...product} />;
        })}
      </div>
      <div>
        <h1 className="text-3xl">$ {mainTotalPrice.toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default Cart;
