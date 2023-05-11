import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useStateContext } from "../../contexts/ContextProvider";

const DateRange = ({refBoxDateRang}) => {
  const { dateRange, setDateRange } = useStateContext();

  const handleSelect = (ranges) => {
    setDateRange(ranges.selection);
  };

  return (
    <div className=" test absolute top-[248px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl rounded-md overflow-hidden  ">
      <DateRangePicker
        ranges={[dateRange]}
        onChange={handleSelect}
        showSelectionPreview={false}
        showMonthAndYearPickers={false}
      />
    </div>
  );
};

export default DateRange;
