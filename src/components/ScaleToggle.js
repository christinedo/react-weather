import React from "react";
import { C, F } from "../App";
import { ScaleToggleButton } from "./ScaleToggleButton";

export const ScaleToggle = ({ scale, handleScaleClick }) => {
  return (
    <div className='flex'>
      <div className='mr-3'>
        <ScaleToggleButton
          scale={scale}
          scaleValue={F}
          handleScaleClick={handleScaleClick}
          unit='°F'
        />
      </div>
      |
      <div className='ml-3'>
        <ScaleToggleButton
          scale={scale}
          scaleValue={C}
          handleScaleClick={handleScaleClick}
          unit='°C'
        />
      </div>
    </div>
  );
};
