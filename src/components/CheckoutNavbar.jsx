import React from "react";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const CheckoutNavbar = () => {
  return (
    <div className=" flex justify-around items-center p-3 ">
      <div className="flex gap-1 items-baseline">
        <h1 className="text-3xl font-bold">SHEIN</h1>
        <h1 className="text-3xl">/</h1>
        <div className="flex gap-2 items-baseline">
          <RiSecurePaymentFill size={25} className=" text-green-800 " />
          <h1 className="text-1xl text-green-800">SECURE CHECKOUT</h1>
        </div>
      </div>
      <Link to={"/"}>
        <h1 className=" hover:underline">CONTINUE SHOPPING </h1>
      </Link>
    </div>
  );
};

export default CheckoutNavbar;
