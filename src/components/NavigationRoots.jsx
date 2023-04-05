import React from "react";

const NavigationRoots = ({ navigationRoots, root_id, dispatch }) => {
  return (
    <>
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
            className={` text-1xl p-3 border-b-2 w-full md:w-fit md:text-sm text-start   hover:border-b-4   ${
              root.id === root_id ? "text-red-700 border-b-4" : "opacity-70"
            }`}
          >
            {root.name}
          </button>
        );
      })}
    </>
  );
};

export default NavigationRoots;
