import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";

const CountdownTimer = ({ onEnd }) => {
  const targetDate = useMemo(() => new Date("2023-12-21T18:00:00"), []);
  const onEndRef = useRef(onEnd); // useRef to keep track of the latest onEnd function

  useEffect(() => {
    onEndRef.current = onEnd; // Update the current property with the new onEnd function on each render
  }, [onEnd]);

  const calculateTimeLeft = (difference) => {
    return {
      days: Math.abs(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.abs(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.abs(Math.floor((difference / 1000 / 60) % 60)),
      seconds: Math.abs(Math.floor((difference / 1000) % 60)),
    };
  };

  const calculateTimeSince = useCallback(() => {
    const currentTime = new Date().getTime();
    const difference = targetDate.getTime() - currentTime;

    if (difference <= 0) {
      if (typeof onEndRef.current === "function") {
        onEndRef.current(); // Call the onEnd function using the ref
      }
      return calculateTimeLeft(difference); // Continue showing time passed
    } else {
      return calculateTimeLeft(difference);
    }
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeSince());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeSince();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeSince]);

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <span key={interval} className="time-component">
      {timeLeft[interval]}{" "}
      <span className="time-label">{interval.toUpperCase()}</span>
    </span>
  ));

  return <div>{timerComponents}</div>;
};

export default CountdownTimer;
