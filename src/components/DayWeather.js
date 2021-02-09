import React from "react";
import { toCelsius } from "../util/convertScale";
import { F } from "../App";

export const DayWeather = ({ day, min, max, weatherId, scale }) => {
  let weatherIcon = weatherId ? `owm-${weatherId}` : "na";

  return (
    <div className='text-lg grid grid-cols-8 place-items-center px-5 my-2.5 sm:px-8'>
      <span className='col-span-3 justify-self-start'>{day}</span>
      <i className={`wi wi-${weatherIcon} col-span-3 text-xl`}></i>
      <span>{scale === F ? Math.round(max) : toCelsius(max)}°</span>
      <span className='justify-self-end text-white text-opacity-60'>
        {scale === F ? Math.round(min) : toCelsius(min)}°
      </span>
    </div>
  );
};
