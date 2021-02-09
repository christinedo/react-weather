import React from "react";
import { DayWeather } from "./DayWeather";
import { minMaxTemps } from "../util/calculateMinMaxTemps";

export const ForecastContainer = ({ forecast, scale }) => {
  const timezone = forecast.city.timezone;
  const groupedMinMaxTemps = minMaxTemps(forecast.list, timezone);

  return (
    <div className='text-white bg-blue-400 rounded-lg py-2.5 mt-4 sm:py-5'>
      <p className='text-black text-opacity-50 font-medium px-5 my-2.5 sm:px-8'>
        Weather Forecast
      </p>
      <div className='flex flex-col'>
        {[...groupedMinMaxTemps].map((data, idx) => {
          const [day, { min, max, weatherId }] = data;
          return (
            <DayWeather
              key={idx}
              day={day}
              min={min}
              max={max}
              weatherId={weatherId}
              scale={scale}
            />
          );
        })}
      </div>
    </div>
  );
};
