import React, { useState, useEffect } from "react";

export const TimeNow = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Сейчас {time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default TimeNow;
