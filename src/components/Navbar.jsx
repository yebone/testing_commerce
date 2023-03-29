import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { IoLogoJavascript } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsBag, BsHeart } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
import { useStateContext } from "../context/StateContext";
import axios from "axios";
import SearchBox from "./SearchBox";
import { navigationRootForDevelopment } from "../storage";

const Navbar = () => {
  const {
    state: {
      wishListProducts,
      addToBagProducts,
      navigationTabs,
      channelType_id,
      root_id,
    },
    dispatch,
  } = useStateContext();

  const [navigationRoots, setNavigationRoots] = useState([]);
  ////development

  useEffect(() => {
    const navigationRoot = [];
    switch (channelType_id) {
      case "2":
        return setNavigationRoots(navigationRootForDevelopment.women);
      case "3":
        return setNavigationRoots(navigationRootForDevelopment.men);
      default:
        return setNavigationRoots([]);
    }
  }, [channelType_id]);

  ////////////////production navigation root request
  // const options = {
  //   method: "GET",
  //   url: "https://unofficial-shein.p.rapidapi.com/navigations/get-root",
  //   params: {
  //     channelType: channelType_id,
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
  //       console.log("response yay", response.data);
  //       const {
  //         info: { content },
  //       } = response.data;
  //       console.log(content);
  //       console.log(content.filter((con) => con.level === "1"));
  //       setNavigationRoots(
  //         content.filter((con, index) => index > 0 && index < 7)
  //       );
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, [channelType_id]);
  // console.log("yay navigationRoots", navigationRoots);

  return (
    <div className="w-full mt-0 mb-5">
      <div className="flex justify-between items-center bg-slate-100 m-0 mb-2 p-0  ">
        <div className="flex gap-4">
          {navigationTabs.map((tab) => {
            return (
              <button
                key={tab.id}
                onClick={() => {
                  dispatch({ type: "TAB", payload: tab });
                }}
                className={`text-2xl p-3   ${
                  tab.id === channelType_id
                    ? "text-red-700 bg-white"
                    : "opacity-70"
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>
        {/* <div>
          <IoLogoJavascript className="text-3xl cursor-pointer " />
        </div> */}
        <div className="flex gap-2">
          <CgProfile className="text-2xl cursor-pointer " />
          {/* for add to bag */}
          <div className=" relative group">
            <NavLink to={"/cart"} className="flex items-center">
              <BsBag className="text-2xl cursor-pointer " />
              <p>{addToBagProducts.length}</p>
              {/* <TextBoxForBag className=" bg-white shadow-md absolute top-10 z-50 w-500px " /> */}
            </NavLink>
          </div>

          <NavLink to={"/wishList"} className="flex items-center">
            <BsHeart className="text-2xl cursor-pointer " />
            <p>{wishListProducts.length}</p>
          </NavLink>

          <RiCustomerService2Line className="text-2xl cursor-pointer " />
          <TfiWorld className="text-2xl cursor-pointer " />
        </div>
      </div>
      <div className=" flex flex-nowrap">
        <div className="w-[60vw] flex flex-nowrap gap-5">
          {navigationRoots?.map((root) => {
            const id = root.id;
            //for development root name
            const name = root.name;

            return (
              <button
                key={root.id}
                onClick={() =>
                  dispatch({
                    type: "ROOT",
                    payload: id,
                    developmentUsage: name,
                  })
                }
                className={`text-sm  hover:border-b-4   ${
                  root.id === root_id ? "text-red-700 border-b-4" : "opacity-70"
                }`}
              >
                {root.name}
              </button>
            );
          })}
        </div>
        <SearchBox />
      </div>
    </div>
  );
};

export default Navbar;
