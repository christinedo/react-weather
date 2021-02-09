import React from "react";
import { F } from "../App";
import { toCelsius, toKilometers } from "../util/convertScale";

export const CurrentWeatherDetails = ({ scale, feelsLike, wind, humidity }) => {
  const headingStyle =
    "text-xs text-opacity-50 text-black uppercase font-semibold";
  const valueStyle = "text-2xl";
  return (
    <div className='flex space-x-10 sm:space-x-12 text-center'>
      <div>
        <p className={headingStyle}>Feels Like</p>
        <span className={valueStyle}>
          {scale === F ? Math.round(feelsLike) : toCelsius(feelsLike)}°
        </span>
      </div>
      <div>
        <p className={headingStyle}>Wind</p>
        <span className={valueStyle}>
          {scale === F
            ? `${Math.round(wind)} mph`
            : `${toKilometers(wind)} km/h`}
        </span>
      </div>
      <div>
        <p className={headingStyle}>Humidity</p>
        <span className={valueStyle}>{humidity}%</span>
      </div>
    </div>
  );
};
