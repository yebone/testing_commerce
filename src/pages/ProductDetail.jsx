import React, { useEffect, useState } from "react";
import ProductDetailWithGoodId from "../components/ProductDetailWithGoodId";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const param = useParams();
  console.log(param.goods_id);
  //////////production
  const [product, setProduct] = useState({});
  const options = {
    method: "GET",
    url: "https://unofficial-shein.p.rapidapi.com/products/detail",
    params: {
      goods_id: param.goods_id,
      language: "en",
      country: "US",
      currency: "USD",
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "unofficial-shein.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response);
        console.log(response.data);
        setProduct(response.data.info);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [param]);
  return (
    <div>
      <h1>hello iam detail page</h1>
      {product.goods_id ? <ProductDetailWithGoodId product={product} /> : null}
    </div>
  );
};

export default ProductDetail;
