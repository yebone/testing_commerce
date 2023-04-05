import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";
import axios from "axios";
import { navigationRootForDevelopment } from "../storage";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsBag, BsHeart } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import SearchBox from "./SearchBox";
import NavigationTabs from "./NavigationTabs";
import NavigationRoots from "./NavigationRoots";

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

  //////root navigation slide icon
  function leftSlide() {
    let slider = document.querySelector("#rootScroll");
    slider.scrollLeft = slider.scrollLeft + 200;
  }
  function rightSlide() {
    let slider = document.querySelector("#rootScroll");
    slider.scrollLeft = slider.scrollLeft - 200;
  }

  const [open, setOpen] = useState(false);
  return (
    <nav className=" mb-3">
      <div className=" bg-slate-50 flex items-center justify-between w-full md:w-auto z-50  p-3 md:p-0 ">
        {/* menu icon and close icon for mobile view */}
        {open ? (
          <AiOutlineClose
            onClick={() => setOpen(!open)}
            className="text-3xl md:hidden cursor-pointer"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setOpen(!open)}
            className="text-3xl md:hidden cursor-pointer "
          />
        )}
        {/* nav item for md */}
        <div className="hidden md:flex">
          <NavigationTabs
            dispatch={dispatch}
            navigationTabs={navigationTabs}
            channelType_id={channelType_id}
          />
        </div>
        {/* icon for all view port */}
        {/* p-2 md:text-1xl lg:text-2xl md:p-3 */}
        <div className="flex gap-3 items-center mr-3">
          <CgProfile className="text-2xl cursor-pointer hidden md:block " />
          {/* for add to bag */}
          <div className=" relative group">
            <NavLink to={"/cart"} className="flex items-center">
              <BsBag className="text-1xl md:text-2xl cursor-pointer  " />
              <p>{addToBagProducts.length}</p>
              {/* <TextBoxForBag className=" bg-white shadow-md absolute top-10 z-50 w-500px p-2 md:p-3 "/> */}
            </NavLink>
          </div>

          <NavLink to={"/wishList"} className="flex items-center">
            <BsHeart className="text-1xl md:text-2xl cursor-pointer" />
            <p>{wishListProducts.length}</p>
          </NavLink>

          <RiCustomerService2Line className="text-2xl cursor-pointer hidden md:block  " />
          <TfiWorld className="text-2xl cursor-pointer hidden md:block  " />
          <div className=" h-[30px ] md:hidden">
            <SearchBox />
          </div>
        </div>
      </div>

      {/* second tab bar */}
      <div className=" hidden md:flex justify-between px-3 mt-1 ">
        <div
          id="rootScroll"
          className="w-full  flex gap-5  whitespace-nowrap overflow-x-auto scrollbar-hide "
        >
          <NavigationRoots
            dispatch={dispatch}
            root_id={root_id}
            navigationRoots={navigationRoots}
          />
        </div>
        <div className="flex items-center gap-1">
          <MdKeyboardArrowLeft
            onClick={leftSlide}
            className=" text-2xl cursor-pointer hover:text-3xl"
          />
          <MdKeyboardArrowRight
            onClick={rightSlide}
            className="text-2xl cursor-pointer hover:text-3xl"
          />
          <SearchBox />
        </div>
      </div>
      {/* mobile drawer */}
      <ul
        className={`z-10 
        md:hidden bg-slate-50 shadow-lg fixed w-full top-16 overflow-y-auto bottom-0  pl-4
        duration-500 ${open ? "left-[-20%]" : "left-[-100%]"}
        `}
      >
        <div className="ms-20 flex overflow-x-auto scrollbar-hide    ">
          <NavigationTabs
            dispatch={dispatch}
            navigationTabs={navigationTabs}
            channelType_id={channelType_id}
          />
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <div className=" ms-20 flex flex-col items-start">
          <NavigationRoots
            dispatch={dispatch}
            root_id={root_id}
            navigationRoots={navigationRoots}
          />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
