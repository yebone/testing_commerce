import React from "react";
import SearchBox from "./SearchBox";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsBag, BsHeart } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";

const NavbarForBigScreen = ({
  navigationTabs,
  dispatch,
  channelType_id,
  addToBagProducts,
  wishListProducts,
  navigationRoots,
  root_id,
}) => {
  return (
    <div className=" mb-3">
      <div className="flex justify-between items-center bg-slate-100 m-0 mb-2 px-3">
        <div className=" flex gap-2">
          {navigationTabs?.map((tab) => {
            return (
              <button
                key={tab.id}
                onClick={() => {
                  dispatch({ type: "TAB", payload: tab });
                }}
                className={` text-2xl py-3 px-0   ${
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

export default NavbarForBigScreen;
