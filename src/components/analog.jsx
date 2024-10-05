import React, { useState, useEffect } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  
  const secondAngle = (seconds / 60) * 360;
  const minuteAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourAngle = (hours % 12 / 12) * 360 + (minutes / 60) * 30;


  const clockNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const getPosition = (index) => {
    const angle = (index - 3) * (Math.PI / 6); 
    const radius = 115;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="flex items-center justify-center h-screen mt-[-5cm] ml-[-3cm]">
     
      <div className="relative w-64 h-64 border-4 border-gray-800 rounded-full flex items-center justify-center">
        
        {clockNumbers.map((number, index) => {
          const { x, y } = getPosition(number);
          return (
            <div
              key={number}
              className="absolute text-xl font-bold"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {number}
            </div>
          );
        })}

       
        <div
          className="absolute bg-gray-800"
          style={{
            width: "4px",
            height: "50px",
            marginLeft:'15px',
            top: "32px",
            transformOrigin: "bottom",
            transform: `rotate(${hourAngle}deg)`,
            transition: "transform 0.5s ease-in-out",
          }}
        />
       
        <div
          className="absolute bg-gray-600"
          style={{
            width: "3px",
            height: "110px",
            top: "12px",
            transformOrigin: "bottom",
            transform: `rotate(${minuteAngle}deg)`,
            transition: "transform 0.5s ease-in-out",
          }}
        />
       
        <div
          className="absolute bg-red-500"
          style={{
            width: "2px",
            height: "120px",
            top: "2px",
            transformOrigin: "bottom",
            transform: `rotate(${secondAngle}deg)`,
            transition: "transform 0.5s ease-in-out",
          }}
        />
        
        <div className="absolute w-4 h-4 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default AnalogClock;
