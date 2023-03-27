import React from "react";
import { useStateContext } from "../context/StateContext";

const TextBoxForBag = () => {
  const {
    state: { addToBagProducts },
  } = useStateContext();
  return (
    <div className=" w-[100%]">
      {addToBagProducts?.map((product) => {
        return (
          <div key={product.goods_id} className="flex gap-2 ">
            <img
              src={product.goods_img}
              alt=""
              className=" w-[100px] object-contain"
            />
            <div>
              <h1>{product.goods_name}</h1>
            </div>
          </div>
        );
      })}

      <div></div>
    </div>
  );
};

export default TextBoxForBag;
