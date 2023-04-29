import React from "react";
import { useDispatch } from "react-redux";
import { decrease_quantity, increase_quantity } from "../features/bag/bagSlice";

const CartCard = ({
  goods_img,
  goods_name,
  goods_id,
  salePrice: { amountWithSymbol, amount },
  quantity,
}) => {
  const dispatch = useDispatch();
  const subtotal = amount * quantity;

  return (
    <div className=" flex gap-3 mb-3 w-[50vw] border-red-400">
      <img
        src={goods_img}
        alt={goods_name}
        className=" w-[100px] object-contain"
      />
      <div className=" w-[500px]">
        <h1 className=" mb-5">{goods_name}</h1>
        <div className="flex justify-around">
          <h1>unit price</h1>
          <h2>{amountWithSymbol}</h2>
          <div>
            <button
              onClick={() =>
                quantity > 1 &&
                dispatch(decrease_quantity({ goods_id, amount }))
              }
              className=" font-bold border px-2 py-1 rounded-l-full"
            >
              -
            </button>
            <button className=" font-bold border px-2 py-1">{quantity}</button>
            <button
              onClick={() => dispatch(increase_quantity({ goods_id, amount }))}
              className=" font-bold border px-2 py-1 rounded-r-full"
            >
              +
            </button>
          </div>
          <h2> $ {subtotal.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
