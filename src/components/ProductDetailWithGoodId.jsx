import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { goodId2777128 } from "../test";

const ProductDetailWithGoodId = () => {
  const param = useParams();

  // const options = {
  //   method: "GET",
  //   url: "https://unofficial-shein.p.rapidapi.com/products/detail",
  //   params: {
  //     goods_id: param.goods_id,
  //     language: "en",
  //     country: "US",
  //     currency: "USD",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "9c873acc87msh84cf4f546cc4661p1af758jsnf3c2ab74e001",
  //     "X-RapidAPI-Host": "unofficial-shein.p.rapidapi.com",
  //   },
  // };
  // useEffect(() => {
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response);
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, [param]);
  return (
    <div>
      <h1>hello i am id</h1>
    </div>
  );
};

export default ProductDetailWithGoodId;
