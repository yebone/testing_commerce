import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";

const SearchBox = () => {
  const { dispatch } = useStateContext();
  const [search, setSearch] = useState("");
  function handling(event) {
    setSearch(event.target.value);
  }

  return (
    <div className=" flex gap-0 ">
      <input
        type="text"
        placeholder="Search"
        id="search"
        onChange={handling}
        className=" w-24 md:w-full h-8 md:h-10 md:p-1 border-2 border-r-0  "
      />
      <Link to={`/SearchPage/${search}`}>
        <label
          htmlFor="search"
          onClick={() =>
            dispatch({ type: "SEARCH_KEY_WORDS", payload: search })
          }
        >
          <BsSearch className=" text-1xl w-10 h-8 md:p-1 md:h-full  fill-white font-extrabold  md:text-2xl cursor-pointer bg-black " />
        </label>
      </Link>
    </div>
  );
};

export default SearchBox;
