import React from "react";
import { toCelsius } from "../util/convertScale";
import { F } from "../App";

export const CurrentWeather = ({ scale, current }) => {
  const weatherID = current.weather[0].id;
  const dayOrNight =
    current.dt > current.sys.sunrise && current.dt < current.sys.sunset
      ? "day"
      : "night";

  return (
    <div className='flex pt-6 mb-10'>
      <div className='self-center mr-4'>
        <i
          className={`wi wi-owm-${dayOrNight}-${weatherID} text-8xl sm:text-9xl`}
        ></i>
      </div>
      <div>
        <div className='text-8xl sm:text-9xl'>
          {scale === F
            ? Math.round(current.main.temp)
            : toCelsius(current.main.temp)}
          °
        </div>
        <span className='font-semibold capitalize text-sm sm:text-base'>
          {current.weather[0].description}
        </span>
      </div>
    </div>
  );
};
