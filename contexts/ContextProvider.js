import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

const initialState = {
  Packages: false,
  Activities: false,
  UmrahPlus: false,
};

export const ContextProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(initialState);
  const [ViewTours, setViewTours] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });
  return (
    <StateContext.Provider
      value={{
        handleClick,
        isClicked,
        setIsClicked,
        dateRange,
        setDateRange,
        ViewTours,
        setViewTours,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
