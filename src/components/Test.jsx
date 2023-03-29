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
  tabKidsType4,
  tabCurveType6,
  tabHomeType5,
  tabBeautyType9,
  nodeContextWomenJustForYou,
  nodeContentKid2031SchoolSupplies,
  nodeContentkid4,
  nodeContentWomenNewIn,
} from "../test";
const Test = () => {
  console.log("country list", countryList);
  console.log("detail---", detail);
  console.log("Navigation");
  console.log("tabs---", tabs);
  console.log("root");
  console.log("rootType2,women", rootType2);
  console.log("rootType3,men", rootType3Men);
  console.log("rootKidType4", tabKidsType4);
  console.log("tabCurveType6", tabCurveType6);
  console.log("tabHomeType5", tabHomeType5);
  console.log("tabBeautyType9", tabBeautyType9);
  //nice to filter arr[0]
  // const {
  //   info: { content },
  // } = tabKidsType4;
  // console.log(content);
  // console.log(content.filter((con) => con.level === "1"));
  console.log(
    "nodeContentKid2031SchoolSupplies",
    nodeContentKid2031SchoolSupplies
  );

  console.log("nodeContentkid4", nodeContentkid4);
  // const {
  //   info: { content },
  // } = nodeContentkid4;
  // console.log(content);
  // console.log(content.filter((con) => con.thumb));

  console.log("context");
  console.log("node-content,2026,men,26066300130 ", nodeContent);
  console.log(
    "node-content,2030,women,30046800294,dressId ",
    nodeContentWomenDress
  );
  const {
    info: { content },
  } = nodeContentWomenNewIn;
  console.log(content);
  function findingGoodId(content) {
    const filtered = content.filter((con) => con.thumb && con.type === "5");
    const thumb = filtered.map((filter) => filter.thumb);
    console.log("filtered", filtered);
    console.log("thumb", thumb);
    for (let i = 0; i < thumb.length; i++) {
      for (let j = 0; j < thumb[i].length; j++) {
        if (thumb[i][j].goodsId) {
          return thumb[i][j];
        }
      }
    }
  }
  console.log(findingGoodId(content));

  function findingHrefTargetReal(content) {
    const filtered = content.filter((con) => con.thumb && con.type === "5");
    const thumb = filtered.map((filter) => filter.thumb);
    console.log("filtered", filtered);
    console.log("thumb", thumb);
    for (let i = 0; i < thumb.length; i++) {
      for (let j = 0; j < thumb[i].length; j++) {
        if (thumb[i][j].trackHrefType === "real") {
          return thumb[i][j];
        }
      }
    }
  }
  console.log("findingHrefTargetReal", findingHrefTargetReal(content));

  console.log("nodeContextWomenJustForYou", nodeContextWomenJustForYou);
  console.log("product");
  console.log("product by id,2777128", goodId2777128);
  // console.log(
  //   "product/list 1727 goodsId 12361726",
  //   productsList1727GoodId12361726
  // );
  console.log("product/detail/4386616", productDetails4386616);

  console.log();
  console.log("nodeContentWomenNewIn", nodeContentWomenNewIn);
  // const {
  //   info: { content },
  // } = nodeContentWomenNewIn;
  // console.log(content);
  // console.log(content.filter((con) => con.thumb && con.type === "5"));

  return <div></div>;
};

export default Test;
