import React, { useEffect, useState } from "react";

const CartCard = ({
  goods_img,
  goods_name,
  salePrice: { amountWithSymbol, amount },
  setTotal,
  total,
}) => {
  const [count, setCount] = useState(1);
  const [itemTotal, setItemTotal] = useState(Number(amount));
  useEffect(() => {
    setItemTotal(Number(amount) * count);
    setTotal(total + itemTotal);
  }, [count, itemTotal]);

  return (
    <div className=" flex gap-3 mb-3 ">
      <img
        src={goods_img}
        alt={goods_name}
        className=" w-[100px] object-contain"
      />
      <div className=" w-[500px]">
        <h1 className=" mb-5">{goods_name}</h1>
        <div className="flex justify-around">
          <h2>{amountWithSymbol}</h2>
          <div>
            <button
              onClick={() => (count > 1 ? setCount(count - 1) : count)}
              className=" font-bold border px-2 py-1 rounded-l-full"
            >
              -
            </button>
            <button className=" font-bold border px-2 py-1">{count}</button>
            <button
              onClick={() => setCount(count + 1)}
              className=" font-bold border px-2 py-1 rounded-r-full"
            >
              +
            </button>
          </div>
          <h2>{itemTotal}</h2>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
