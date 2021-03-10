import React, { useReducer, useEffect, useContext } from "react";
import { MemeContext } from "../../context/MemeContext";
import { initialState, captionReducer } from "../singleMemePage/CaptionReducer";
import Caption from "../singleMemePage/memeEditingTools/Caption";
import ColorSection from "../singleMemePage/memeEditingTools/ColorSection";
import FontStyle from "../singleMemePage/memeEditingTools/FontStyle";

const Box = ({ index, id }) => {
  const { changeBoxes } = useContext(MemeContext);
  const [state, dispatch] = useReducer(captionReducer, initialState);

  useEffect(() => {
    let { text, outline_color, color, fontFamily, fontSize } = state;
    changeBoxes(text, color, outline_color, fontFamily, fontSize, index); // eslint-disable-next-line
  }, [state]);

  return (
    <div className="container flex flex-col justify-start items-start mb-10">
      <div className="flex items-center gap-5">
        <Caption state={state} dispatch={dispatch} index={index} id={id} />
        <ColorSection state={state} dispatch={dispatch} index={index} />
        <FontStyle state={state} dispatch={dispatch} index={index} />
      </div>
    </div>
  );
};

export default Box;
