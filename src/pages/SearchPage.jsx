import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsListCard from "../components/ProductsListCard";

const SearchPage = () => {
  const [productList, setProductList] = useState([]);
  const { search_key_words } = useParams();

  const options = {
    method: "GET",
    url: "https://unofficial-shein.p.rapidapi.com/products/search",
    params: {
      keywords: search_key_words,
      language: "en",
      country: "US",
      currency: "USD",
      sort: "7",
      limit: "20",
      page: "1",
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
        console.log(response.data);
        const {
          info: { products },
        } = response.data;
        setProductList(products);
        console.log(products);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [search_key_words]);

  return (
    <div>
      <h1>Your key words is : {search_key_words}</h1>
      <h2>Please wait... </h2>
      <div className=" flex gap-5 flex-wrap justify-center">
        {productList?.map((product) => {
          return <ProductsListCard key={product.goods_id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default SearchPage;
