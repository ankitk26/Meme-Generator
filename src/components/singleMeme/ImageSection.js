import React, { useContext, useEffect } from "react";
import { MemeContext } from "../context/MemeContext";
import { Rnd } from "react-rnd";

const ImageSection = ({ image }) => {
  const { boxes, clear } = useContext(MemeContext);

  const getTop = (index) => 70 * index;

  const getBorder = (color) =>
    ` 2px 0 0 ${color}, -2px 0 0 ${color}, 0 2px 0 ${color}, 0 -2px 0 ${color}, 1px 1px ${color}, -1px -1px 0 ${color}, 1px -1px 0 ${color}, -1px 1px 0 ${color}`;

  const getStyle = (outline_color, font_color, fontStyle, fontSize) => ({
    fontFamily: `${fontStyle}`,
    fontSize: `${fontSize}px`,
    textShadow: getBorder(outline_color),
    color: `${font_color}`,
    overflowWrap: "break-word",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  useEffect(() => {
    return () => {
      clear();
    }; // eslint-disable-next-line
  }, [image]);

  return (
    <>
      <div className="container w-11/12 relative" id="downloadMeme">
        <img src={image} alt="memeImage" className="w-full object-contain relative overflow-auto" />
        {boxes !== undefined &&
          boxes.map(({ outline_color, color, fontFamily, fontSize, text }, index) => (
            <Rnd
              style={getStyle(outline_color, color, fontFamily, fontSize)}
              default={{ x: 20, y: getTop(index) }}
              key={index}
              bounds="#downloadMeme"
            >
              {text}
            </Rnd>
          ))}
      </div>
    </>
  );
};

export default ImageSection;
