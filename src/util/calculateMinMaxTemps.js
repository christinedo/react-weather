import { convertToTimezone } from "./convertToTimezone";

const calculateMinMax = (array) => {
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;

  for (const element of array) {
    if (element < min) {
      min = element;
    }

    if (element > max) {
      max = element;
    }
  }
  return [min, max];
};

const groupedTemperatures = (forecast, timezone) => {
  let dailyTemps = new Map();
  let currentTime = Date.now() / 1000; // convert to seconds for dayjs
  const currentDay = convertToTimezone(currentTime, timezone).format("dddd");
  for (const element of forecast) {
    const convertedTime = convertToTimezone(element.dt, timezone);
    const day = convertedTime.format("dddd");
    const hour = convertedTime.hour();
    const temp = element.main.temp;
    if (currentDay !== day) {
      if (!dailyTemps.has(day)) {
        dailyTemps.set(day, { temps: [temp], weatherId: null });
      } else {
        dailyTemps.get(day).temps.push(temp);
      }
      if (hour > 10 && hour <= 13) {
        dailyTemps.get(day).weatherId = element.weather[0].id;
      }
    }
  }
  return dailyTemps;
};

export const minMaxTemps = (forecast, timezone) => {
  let minMaxByDay = new Map();
  const groupedTemps = groupedTemperatures(forecast, timezone);
  for (const [day, data] of groupedTemps) {
    let [min, max] = calculateMinMax(data.temps);
    minMaxByDay.set(day, { min: min, max: max, weatherId: data.weatherId });
  }
  return minMaxByDay;
};
