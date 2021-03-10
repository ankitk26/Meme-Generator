import React from "react";
import { setText } from "../CaptionReducer";

const Text = ({ state, dispatch, index }) => {
  const handleCaptionChange = (e) => {
    dispatch(setText(e.target.value));
  };

  return (
    <>
      <div className="container w-full text-left">
        <div className="flex flex-col justify-start items-start gap-5 w-full">
          <input
            type="text"
            value={state.text}
            className="meme-text w-full"
            placeholder={`Text ${index + 1}`}
            onChange={handleCaptionChange}
          />
        </div>
      </div>
    </>
  );
};

export default Text;
