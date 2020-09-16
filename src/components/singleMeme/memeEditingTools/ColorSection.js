import React from "react";
import Color from "./Color";

const ColorSection = ({ state, dispatch, index }) => {
  return (
    <div className="flex items-start justify-center ml-5 gap-5">
      <div className="flex justify-evenly items-start gap-5">
        {/* Font Color */}
        <Color state={state} dispatch={dispatch} index={index} type="color" />
        {/* Border Color */}
        <Color state={state} dispatch={dispatch} index={index} type="border" />
      </div>
    </div>
  );
};

export default ColorSection;
