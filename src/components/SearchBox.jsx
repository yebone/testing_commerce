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
    <>
      <div className="flex justify-around gap-2 items-center shadow-orange-300 w-[30vw] h-[40px] rounded-3xl p-3 shadow-sm">
        <input
          type="text"
          placeholder="Search"
          id="search"
          onChange={handling}
          className="  placeholder:text-orange-400 focus:outline-none focus:placeholder:text-orange-600 text-orange-300 focus:placeholder:font-bold"
        />
        <Link to={`/SearchPage/${search}`}>
          <label
            htmlFor="search"
            onClick={() =>
              dispatch({ type: "SEARCH_KEY_WORDS", payload: search })
            }
          >
            <BsSearch className=" fill-orange-500 text-2xl cursor-pointer" />
          </label>
        </Link>
      </div>
    </>
  );
};

export default SearchBox;
