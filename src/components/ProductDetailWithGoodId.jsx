import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailWithGoodId = () => {
  const param = useParams();
  console.log(param);
  return (
    <div>
      <h1>hello i am id</h1>
    </div>
  );
};

export default ProductDetailWithGoodId;
