import React, { useState, useEffect, useMemo, useCallback } from "react";

const CountdownTimer = ({ onEnd }) => {
  const targetDate = useMemo(() => new Date("2023-12-02T18:00:00"), []);

  const calculateTimePassed = (difference) => {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const calculateTimeSince = useCallback(() => {
    const currentTime = new Date().getTime();
    const difference = currentTime - targetDate.getTime();

    if (difference < 0) {
      return "Finally Engaged!";
    } else {
      return calculateTimePassed(difference);
    }
  }, [targetDate]);

  const [timeSince, setTimeSince] = useState(calculateTimeSince());

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeSince = calculateTimeSince();
      setTimeSince(newTimeSince);

      if (newTimeSince === "Finally Engaged!" && onEnd) {
        onEnd();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeSince, calculateTimeSince, onEnd]);

  const timerComponents =
    typeof timeSince === "object"
      ? Object.keys(timeSince).map((interval) => (
          <span key={interval} className="time-component">
            {timeSince[interval]}{" "}
            <span className="time-label">{interval.toUpperCase()}</span>
          </span>
        ))
      : timeSince;

  return <div>{timerComponents}</div>;
};

export default CountdownTimer;
