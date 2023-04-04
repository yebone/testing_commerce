import React from "react";

const NavigationTabs = ({ navigationTabs, dispatch, channelType_id }) => {
  return (
    <>
      {navigationTabs?.map((tab) => {
        return (
          <button
            key={tab.id}
            onClick={() => {
              dispatch({ type: "TAB", payload: tab });
            }}
            className={`p-2 md:text-1xl lg:text-2xl md:p-3  ${
              tab.id === channelType_id
                ? " font-bold border-b-4 md:border-b-0 md:font-normal md:text-red-700 md:bg-white"
                : "md:opacity-70"
            }`}
          >
            {tab.name}
          </button>
        );
      })}
    </>
  );
};

export default NavigationTabs;
