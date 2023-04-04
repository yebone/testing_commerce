import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";
import { developmentUsageProductList } from "../storage";
import ProductsListCard from "./ProductsListCard";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const { nodeContent, state } = useStateContext();

  //development environment

  useEffect(() => {
    if (developmentUsageProductList[state.root_name] ? true : false) {
      setProductList(developmentUsageProductList[state.root_name]);
    } else {
      setProductList(developmentUsageProductList["BAGS & LUGGAGE"]);
    }
  }, [state.root_name]);

  // ////////////////////////Production////
  // // requesting product list with cat_id and goodId;
  // function findingGoodId(content) {
  //   const filtered = content.filter((con) => con.thumb && con.type === "5");
  //   const thumb = filtered.map((filter) => filter.thumb);
  //   console.log("filtered", filtered);
  //   console.log("thumb", thumb);
  //   for (let i = 0; i < thumb.length; i++) {
  //     for (let j = 0; j < thumb[i].length; j++) {
  //       if (thumb[i][j].goodsId) {
  //         return thumb[i][j];
  //       }
  //     }
  //   }
  // }

  // //controlling to work when nodeContent change
  // useEffect(() => {
  //   console.log("this is product list request");
  //   console.log("nodeContent testing from product list", nodeContent);
  //   const {
  //     info: { content },
  //   } = nodeContent;
  //   console.log("content from product list request", content);

  //   const target = findingGoodId(content);
  //   console.log("target should be obj/ product list", target);

  //   const options = {
  //     method: "GET",
  //     url: "https://unofficial-shein.p.rapidapi.com/products/list",
  //     params: {
  //       cat_id:
  //         target.hrefTarget.length === 4 ? target.hrefTarget : state.cat_id,
  //       adp: target.goodsId ? target.goodsId : 13950930,
  //       language: "en",
  //       country: "US",
  //       currency: "USD",
  //       sort: "7",
  //       limit: "20",
  //       page: "1",
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
  //       "X-RapidAPI-Host": "unofficial-shein.p.rapidapi.com",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log("yay product list", response.data);
  //       const {
  //         info: { products },
  //       } = response.data;
  //       setProductList(products);
  //       console.log(products);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, [nodeContent]);

  return (
    <div className=" flex gap-5 flex-wrap justify-center ">
      {productList?.map((product) => {
        return <ProductsListCard key={product.goods_id} {...product} />;
      })}
    </div>
  );
};

export default Products;
