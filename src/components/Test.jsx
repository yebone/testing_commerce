import React from "react";
import {
  countryList,
  detail,
  goodId2777128,
  nodeContent,
  nodeContentWomenDress,
  productDetails4386616,
  productsList1727GoodId12361726,
  rootType2,
  rootType3Men,
  tabs,
} from "../test";
const Test = () => {
  console.log("country list", countryList);
  console.log("detail---", detail);
  console.log("Navigation");
  console.log("tabs---", tabs);
  console.log("rootType2,women", rootType2);
  console.log("rootType3,men", rootType3Men);
  console.log("node-content,2026,men,26066300130 ", nodeContent);
  console.log(
    "node-content,2030,women,30046800294,dressId ",
    nodeContentWomenDress
  );
  console.log("product");
  console.log("product by id,2777128", goodId2777128);
  // console.log(
  //   "product/list 1727 goodsId 12361726",
  //   productsList1727GoodId12361726
  // );
  console.log("product/detail/4386616", productDetails4386616);

  console.log();
  return <div></div>;
};

export default Test;
