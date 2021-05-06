import { setText } from "../CaptionReducer";

const Text = ({ state, dispatch, index }) => {
  const handleCaptionChange = (e) => {
    dispatch(setText(e.target.value));
  };

  return (
    <>
      <div className="container w-full text-left">
        <div className="flex flex-col items-start justify-start w-full gap-5">
          <input
            type="text"
            value={state.text}
            className="border-0 border-b-[2px] border-[#718096] py-1 px-3 bg-transparent w-full focus:outline-none focus:border-[#2d3748]"
            placeholder={`Text ${index + 1}`}
            onChange={handleCaptionChange}
          />
        </div>
      </div>
    </>
  );
};

export default Text;
