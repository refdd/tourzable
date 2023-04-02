import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useStateContext } from "../../contexts/ContextProvider";

const DateRange = () => {
  const { dateRange, setDateRange } = useStateContext();

  const handleSelect = (ranges) => {
    setDateRange(ranges.selection);
  };

  return (
    <div className=" test absolute top-[188px] hidden left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
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
