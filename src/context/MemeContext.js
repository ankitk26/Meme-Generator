import React, { useReducer, createContext } from "react";
import axios from "axios";
import { memeReducer } from "./memeReducer";
import { CHANGE_BOXES, CLEAR, SET_MEMES, LOADING, ERROR, SET_IMAGE, FILTER_MEMES, CLEAR_FILTER } from "./actions";

const initialState = {
  boxes: [],
  memes: [],
  loading: false,
  error: false,
  imageUrl: null,
  filteredMemes: null,
};

export const MemeContext = createContext();

export const MemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(memeReducer, initialState);

  const changeBoxes = (text, color, outline_color, fontFamily, fontSize, index) =>
    dispatch({ type: CHANGE_BOXES, payload: { text, color, outline_color, index, fontFamily, fontSize } });

  const clear = () => dispatch({ type: CLEAR, payload: [] });

  const isLoading = (value) => dispatch({ type: LOADING, payload: value });

  const hasError = (value) => dispatch({ type: ERROR, payload: value });

  const setMemes = (memes) => dispatch({ type: SET_MEMES, payload: memes });

  const filterMemes = (text) => dispatch({ type: FILTER_MEMES, payload: text });

  const clearFilter = () => dispatch({ type: CLEAR_FILTER });

  const setImage = (url) => dispatch({ type: SET_IMAGE, payload: url });

  // Fetch memes from IMGFLIP API
  const GET_MEMES_URL = "https://api.imgflip.com/get_memes";
  const fetchMemes = async () => {
    isLoading(true);
    hasError(false);
    try {
      const memesData = await axios.get(GET_MEMES_URL);
      setMemes(memesData.data.data.memes);
    } catch (err) {
      hasError(true);
    }
    isLoading(false);
  };

  return (
    <MemeContext.Provider
      value={{
        boxes: state.boxes,
        memes: state.memes,
        loading: state.loading,
        error: state.error,
        imageUrl: state.imageUrl,
        filteredMemes: state.filteredMemes,
        changeBoxes,
        clear,
        isLoading,
        hasError,
        setMemes,
        setImage,
        fetchMemes,
        filterMemes,
        clearFilter,
      }}
    >
      {children}
    </MemeContext.Provider>
  );
};
