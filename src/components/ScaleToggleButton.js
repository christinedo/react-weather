import React from "react";

export const ScaleToggleButton = ({
  scale,
  scaleValue,
  handleScaleClick,
  unit,
}) => {
  const selected = scale === scaleValue ? "" : "text-opacity-20";
  return (
    <button
      className={`text-black ${selected} font-semibold focus:outline-white`}
      type='button'
      id={scaleValue}
      name='degree-type'
      value={scaleValue}
      onClick={handleScaleClick}
    >
      {unit}
    </button>
  );
};
