import React from "react";
import dayjs from "dayjs";
import { CurrentWeather } from "./CurrentWeather";
import { CurrentWeatherDetails } from "./CurrentWeatherDetails";

const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

export const CurrentContainer = ({ scale, current }) => {
  if (!current) return null;

  return (
    <div className='flex flex-col items-center text-white bg-green-400 rounded-lg mt-2.5 mb-5 p-5 sm:p-8'>
      <p className='self-start text-black text-opacity-50 font-medium'>
        As of{" "}
        {dayjs(current.dt * 1000)
          .utcOffset(current.timezone / 60)
          .format("h:mm a")}
      </p>
      <CurrentWeather scale={scale} current={current} />
      <CurrentWeatherDetails
        scale={scale}
        feelsLike={current.main.feels_like}
        wind={current.wind.speed}
        humidity={current.main.humidity}
      />
    </div>
  );
};
