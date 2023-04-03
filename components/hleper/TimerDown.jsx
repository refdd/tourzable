import React, { useState, useEffect } from "react";

function TimerDown({ date }) {
  const [timeRemaining, setTimeRemaining] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = date.getTime() - now;

      if (distance > 0) {
        setTimeRemaining({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [date]);
  return (
    <ul className="flex space-x-4 items-center z-40">
      <li className="flex space-x-1 items-end">
        <span className="text-3xl font-semibold text-white">
          {timeRemaining.days}{" "}
        </span>
        <span className="text-sm font-semibold text-[#bdc2cb] uppercase">
          {timeRemaining.days > 1 ? "days" : "day"}
        </span>
      </li>
      <li className="flex space-x-1 items-end">
        <span className="text-3xl font-semibold text-white">
          {timeRemaining.hours}
        </span>
        <span className="text-sm font-semibold text-[#bdc2cb] uppercase">
          Hrs
        </span>
      </li>
      <li className="flex space-x-1 items-end">
        <span className="text-3xl font-semibold text-white">
          {timeRemaining.minutes}
        </span>
        <span className="text-sm font-semibold text-[#bdc2cb] uppercase">
          mins
        </span>
      </li>
      <li className="flex space-x-1 items-end">
        <span className="text-3xl font-semibold text-white">
          {timeRemaining.seconds}
        </span>
        <span className="text-sm font-semibold text-[#bdc2cb] uppercase">
          secs
        </span>
      </li>
    </ul>
  );
}

export default TimerDown;
