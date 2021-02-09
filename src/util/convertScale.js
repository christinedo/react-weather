export const toCelsius = (fahrenheit) => {
  return Math.round(((fahrenheit - 32) * 5) / 9);
};

export const toFahrenheit = (celsius) => {
  return Math.round((celsius * 9) / 5 + 32);
};

export const toKilometers = (miles) => {
  return Math.round(miles * 1.609);
};
