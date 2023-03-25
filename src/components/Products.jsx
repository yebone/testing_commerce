import React from "react";
import { productsList1727GoodId12361726 } from "../test";
import ProductsListCard from "./ProductsListCard";

const Products = () => {
  const {
    info: { products },
  } = productsList1727GoodId12361726;
  <div></div>;

  return (
    <div className=" flex gap-5 flex-wrap justify-center">
      {products?.map((product) => {
        return <ProductsListCard key={product.goods_id} {...product} />;
      })}
    </div>
  );
};

export default Products;
