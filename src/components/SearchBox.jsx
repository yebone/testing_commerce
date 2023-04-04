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
        className=" p-1 border-2 border-r-0  "
      />
      <Link to={`/SearchPage/${search}`}>
        <label
          htmlFor="search"
          onClick={() =>
            dispatch({ type: "SEARCH_KEY_WORDS", payload: search })
          }
        >
          <BsSearch className=" w-10 h-full p-1  fill-white font-extrabold  text-2xl cursor-pointer bg-black " />
        </label>
      </Link>
    </div>
  );
};
{
}

export default SearchBox;
