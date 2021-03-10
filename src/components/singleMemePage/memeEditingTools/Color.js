import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { setColor, setOutlineColor } from "../CaptionReducer";

const Color = ({ state: { color, outline_color }, dispatch, type }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const getPropertyColor = () => {
    return type === "color" ? `${color}` : `${outline_color}`;
  };

  const handleColorChange = (updatedColor) => {
    let color = updatedColor.hex;
    type === "color" ? dispatch(setColor(color)) : dispatch(setOutlineColor(color));
  };

  const handleColorPickerClick = (e) => {
    e.preventDefault();
    setShowColorPicker((showColorPicker) => !showColorPicker);
  };

  return (
    <div>
      <button
        className="shadow px-4 py-4 rounded text-sm focus:outline-none hover:shadow-xl"
        style={{ backgroundColor: getPropertyColor() }}
        onClick={handleColorPickerClick}
      ></button>
      {showColorPicker && (
        <ChromePicker
          className="cursor-pointer absolute z-50"
          color={getPropertyColor()}
          onChange={handleColorChange}
        />
      )}
    </div>
  );
};

export default Color;
