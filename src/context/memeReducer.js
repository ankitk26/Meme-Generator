import { CHANGE_BOXES, CLEAR, SET_MEMES, LOADING, ERROR, SET_IMAGE, FILTER_MEMES, CLEAR_FILTER } from "./actions";

const compare = (a, b) => {
  if (a.index < b.index) return -1;
  if (a.index > b.index) return 1;
  return 0;
};

export const memeReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_BOXES:
      let { text, color, outline_color, index, fontFamily, fontSize } = payload;
      let { boxes } = state;
      return {
        ...state,
        boxes: [
          ...boxes.filter((box) => box.index !== index),
          { index, text, color, outline_color, fontSize, fontFamily },
        ].sort(compare),
      };
    case CLEAR:
      return { ...state, boxes: [], imageUrl: null };
    case SET_MEMES:
      return { ...state, memes: payload };
    case LOADING:
      return { ...state, loading: payload };
    case ERROR:
      return { ...state, error: payload };
    case SET_IMAGE:
      return { ...state, imageUrl: payload };
    case FILTER_MEMES:
      return {
        ...state,
        filteredMemes: state.memes.filter((meme) => {
          const regex = new RegExp(`${payload}`, "gi");
          return meme.name.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return { ...state, filteredMemes: null };
    default:
      return state;
  }
};
