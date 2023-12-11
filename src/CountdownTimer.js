import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2023-12-21T18:00:00");
    const targetTime = targetDate.getTime();
    const difference = targetTime - new Date().getTime();

    if (difference < 0) {
      // If the difference is negative, the date has passed
      return null;
    } else {
      // Else, calculate the time left
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Set up the interval to tick every second
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    // If the timeLeft is null, clear the interval
    if (!timeLeft) {
      clearTimeout(timer);
    }

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = timeLeft
    ? Object.keys(timeLeft).map((interval) => {
        return (
          <span key={interval} className="time-component">
            {timeLeft[interval]}{" "}
            <span className="time-label">{interval.toUpperCase()}</span>
          </span>
        );
      })
    : "Finally Engaged!";

  return <div>{timerComponents}</div>;
};

export default CountdownTimer;
