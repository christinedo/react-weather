import React from "react";
import { ScaleToggle } from "./ScaleToggle";

export const NavBar = ({ onCityChange, errorMsg, scale, onScaleClick }) => {
  return (
    <nav className='flex items-center justify-between bg-purple-100 border-b-2 border-purple-200 border-opacity-75 p-4'>
      <span className='font-semibold'>🌈 React Weather App</span>
      <ScaleToggle scale={scale} handleScaleClick={onScaleClick} />
    </nav>
  );
};
