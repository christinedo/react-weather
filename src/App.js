import { React, useState } from "react";
import { useFetch } from "./util/useFetch";
import { NavBar } from "./components/NavBar";
import { SearchBar } from "./components/SearchBar";
import { WeatherContainer } from "./components/WeatherContainer";
import { Information } from "./components/Information";

export const [C, F] = ["celsius", "fahrenheit"];

const App = () => {
  const [scale, setScale] = useState(F);
  const [city, setCity] = useState("Truth or Consequences");
  const currentUrl = `${process.env.REACT_APP_BASE_URL}weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`;
  const forecastUrl = `${process.env.REACT_APP_BASE_URL}forecast?q=${city}&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`;
  const current = useFetch(currentUrl);
  const forecast = useFetch(forecastUrl);
  const errorMsg = current.error ? current.error : forecast.error;

  if (!current.data || !forecast.data) return null;

  const onScaleClick = (event) => {
    setScale(event.target.value);
  };

  const onCityChange = (city) => {
    setCity(city);
  };

  return (
    <div>
      <NavBar
        onCityChange={onCityChange}
        errorMsg={errorMsg}
        scale={scale}
        onScaleClick={onScaleClick}
      />
      <SearchBar handleCityChange={onCityChange} error={errorMsg} />
      <div className='container mx-auto md:max-w-screen-sm'>
        <WeatherContainer
          scale={scale}
          current={current.data}
          forecast={forecast.data}
        />
      </div>
      <Information />
    </div>
  );
};

export default App;
