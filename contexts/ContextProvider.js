import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

const initialState = {
  Packages: false,
  Activities: false,
  UmrahPlus: false,
};
const initialDataInquiry = {
  firstName: "user",
  lastName: "user",
  email: "text@example.com",
  data: "26-04-2023",
  message: "message",
  number: "+1 (867) 543-2456",
  aduits: 4,
  childs: 4,
};

export const ContextProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(initialState);
  const [ViewTours, setViewTours] = useState(false);
  const [sideBar, setSideBar] = useState(true);
  const [loadMore, setLoadMore] = useState(12);
  const [sortBy, setSortBy] = useState("");
  const [direction, setDirection] = useState(1);
  const [destination, setDestination] = useState(1);
  const [pricesPayment, setPricesPayment] = useState();
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [navDashbord, setnavDashbord] = useState(false);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setnavDashbord(!navDashbord);
  };
  const handleClick = (clicked, vlaue) =>
    setIsClicked({ ...initialState, [clicked]: true, typeTour: vlaue });
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
        navDashbord,
        setnavDashbord,
        toggleDrawer,
        sideBar,
        setSideBar,
        destination,
        setDestination,
        loadMore,
        setLoadMore,
        sortBy,
        setSortBy,
        direction,
        setDirection,
        pricesPayment,
        setPricesPayment,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
