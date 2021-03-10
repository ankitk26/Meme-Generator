import React, { useState } from "react";
import { setFontFamily, setFontSize } from "../CaptionReducer";

const FontEditingSection = ({ state, dispatch }) => {
  const { fontFamily, fontSize } = state;
  const [isOpen, setIsOpen] = useState(false);

  const fontStyles = [
    "Impact",
    "Arial",
    "Comic Sans MS",
    "Helvetica",
    "Times New Roman",
    "Courier New",
    "Verdana",
    "Georgia",
    "Bookman",
    "Trebuchet MS",
    "Cooper",
  ];
  const fontOptions = fontStyles.map((fontStyle, index) => (
    <option key={index} value={fontStyle}>
      {fontStyle}
    </option>
  ));

  const handleDropDown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleFontFamilyChange = (e) => {
    dispatch(setFontFamily(e.target.value));
  };

  const handleFontSizeChange = (e) => {
    dispatch(setFontSize(e.target.value));
  };

  return (
    <div className="relative">
      <span onClick={handleDropDown}>
        <i className="fas fa-font text-2xl text-blue-700 mt-2 ml-3 cursor-pointer hover:text-blue-900"></i>
      </span>
      {isOpen && (
        <div className="absolute bg-gray-400 px-5 py-5 z-50">
          <span>Font Family</span>
          <select
            value={fontFamily}
            onChange={handleFontFamilyChange}
            className="px-1 bg-gray-100 border-2 my-3 border-gray-600 rounded focus:outline-none cursor-pointer"
          >
            {fontOptions}
          </select>
          <span>Font Size</span>
          <div className="flex items-center gap-5 self-center">
            <input
              type="range"
              min="10"
              max="50"
              value={fontSize}
              className="text-gray-600 cursor-pointer"
              onChange={handleFontSizeChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FontEditingSection;
