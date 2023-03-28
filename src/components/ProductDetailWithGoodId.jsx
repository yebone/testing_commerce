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
  //     "X-RapidAPI-Key": "",
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
