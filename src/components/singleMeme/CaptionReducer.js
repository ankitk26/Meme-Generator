export const TEXT = "TEXT";
export const COLOR = "COLOR";
export const OUTLINE_COLOR = "OUTLINE_COLOR";
export const FONT_FAMILY = "FONT_FAMILY";
export const FONT_SIZE = "FONT_SIZE";

export const initialState = {
  text: "",
  color: "#ffffff",
  outline_color: "#222222",
  fontFamily: "impact",
  fontSize: "50",
};

export const captionReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case TEXT:
      return { ...state, text: payload };
    case COLOR:
      return { ...state, color: payload };
    case OUTLINE_COLOR:
      return { ...state, outline_color: payload };
    case FONT_FAMILY:
      return { ...state, fontFamily: payload };
    case FONT_SIZE:
      return { ...state, fontSize: payload };
    default:
      return state;
  }
};

export const setText = (text) => {
  return { type: TEXT, payload: text };
};
export const setColor = (color) => {
  return { type: COLOR, payload: color };
};
export const setOutlineColor = (outline_color) => {
  return { type: OUTLINE_COLOR, payload: outline_color };
};
export const setFontFamily = (font) => {
  return { type: FONT_FAMILY, payload: font };
};
export const setFontSize = (size) => {
  return { type: FONT_SIZE, payload: size };
};
