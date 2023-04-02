import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

const initialState = {
  hote: false,
  tour: false,
  acitivty: false,
  HolidayRentals: false,
};

export const ContextProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(initialState);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });
  return (
    <StateContext.Provider
      value={{ handleClick, isClicked, setIsClicked, dateRange, setDateRange }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
