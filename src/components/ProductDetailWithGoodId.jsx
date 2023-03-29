import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailWithGoodId = () => {
  const param = useParams();
  ////////////production
  // const [product, setProduct] = useState({});
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
  //     "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
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
