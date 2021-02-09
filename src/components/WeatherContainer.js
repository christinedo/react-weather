import React from "react";
import { CurrentContainer } from "./CurrentContainer";
import { ForecastContainer } from "./ForecastContainer";

export const WeatherContainer = ({ scale, current, forecast }) => {
  return (
    <div className='px-4 pb-4'>
      <div className='flex flex-col'>
        <h1 className='text-2xl sm:text-4xl font-semibold'>
          {current.name}, {current.sys.country}
        </h1>
      </div>
      <CurrentContainer current={current} scale={scale} />
      <ForecastContainer forecast={forecast} scale={scale} />
    </div>
  );
};
