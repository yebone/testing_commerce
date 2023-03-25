import React from "react";
import { Link, NavLink } from "react-router-dom";

import { IoLogoJavascript } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsBag, BsHeart, BsSearch } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const {
    state: { products },
  } = useStateContext();

  return (
    <div>
      <div className="flex justify-between items-center bg-slate-100 m-0 h-[50px]  ">
        <div className="flex gap-2">
          <h1 className="text-2xl cursor-pointer  ">Women</h1>
          <h1 className="text-2xl cursor-pointer ">Women</h1>
          <h1 className="text-2xl cursor-pointer ">Women</h1>
          <h1 className="text-2xl cursor-pointer ">Women</h1>
        </div>
        <div>
          <IoLogoJavascript className="text-3xl cursor-pointer " />
        </div>
        <div className="flex gap-2">
          <CgProfile className="text-2xl cursor-pointer " />
          <BsBag className="text-2xl cursor-pointer " />
          <NavLink to={"/wishList"} className="flex items-center">
            <BsHeart className="text-2xl cursor-pointer " />
            <p>{products.length}</p>
          </NavLink>

          <RiCustomerService2Line className="text-2xl cursor-pointer " />
          <TfiWorld className="text-2xl cursor-pointer " />
        </div>
      </div>
      <div className="flex justify-around gap-2 items-center shadow-orange-300 w-[60vw] h-[40px] rounded-3xl p-3 shadow-sm">
        <input
          type="text"
          placeholder="Search"
          id="search"
          className="  placeholder:text-orange-400 focus:outline-none focus:placeholder:text-orange-600 text-orange-300 focus:placeholder:font-bold"
        />
        <label htmlFor="search">
          <BsSearch className=" fill-orange-500 text-2xl" />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
