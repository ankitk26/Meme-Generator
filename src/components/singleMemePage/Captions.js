import { useEffect, useReducer } from "react";
import { useMeme } from "../../context/MemeContext";
import { captionReducer, initialState } from "../singleMemePage/CaptionReducer";
import Caption from "../singleMemePage/memeEditingTools/Caption";
import ColorSection from "../singleMemePage/memeEditingTools/ColorSection";
import FontStyle from "../singleMemePage/memeEditingTools/FontStyle";

const Box = ({ index, id }) => {
  const { changeBoxes } = useMeme();
  const [state, dispatch] = useReducer(captionReducer, initialState);

  useEffect(() => {
    let { text, outline_color, color, fontFamily, fontSize } = state;
    changeBoxes(text, color, outline_color, fontFamily, fontSize, index); // eslint-disable-next-line
  }, [state]);

  return (
    <div className="container flex flex-col items-start justify-start mb-10">
      <div className="flex items-center gap-5">
        <Caption state={state} dispatch={dispatch} index={index} id={id} />
        <ColorSection state={state} dispatch={dispatch} index={index} />
        <FontStyle state={state} dispatch={dispatch} index={index} />
      </div>
    </div>
  );
};

export default Box;
