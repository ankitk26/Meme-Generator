import React, { useState } from "react";
import Captions from "./Captions";
import ImageSection from "./ImageSection";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const MemeGenerator = (props) => {
  const [isMeme] = useState(props.meme !== undefined ? true : false);
  const [boxesCount, setBoxesCount] = useState(
    isMeme ? props.meme.box_count : props.box_count
  );

  let boxes = [];
  for (let i = 1; i <= boxesCount; i++) {
    boxes.push(i);
  }

  const downloadMeme = async () => {
    let node = document.getElementById("downloadMeme");
    const blob = await domtoimage.toBlob(node);
    saveAs(blob, isMeme ? `${props.meme.name}.png` : props.imageName);
  };

  return (
    <div className="mt-6 mx-auto container">
      <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start gap-10 md:gap-20 bg-gray-200 px-10 py-5">
        <div className="w-full md:w-1/2">
          <ImageSection
            image={isMeme ? props.meme.url : props.imageUrl}
            box_count={boxesCount}
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full md:w-4/5 mt-5 md:mx-3">
            {boxes.map((box, index) => (
              <Captions
                key={index}
                index={index}
                id={isMeme ? props.meme.id : index}
              />
            ))}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
              <button
                className="w-full md:w-auto md:ml-3 bg-blue-700 tracking-widest text-white px-4 py-2 rounded shadow hover:bg-blue-900 focus:outline-none flex items-center gap-3 justify-center"
                onClick={downloadMeme}
              >
                <i className="fas fa-download text-white"></i>
                <span>Download Meme</span>
              </button>
              <button
                className="w-full md:w-auto bg-gray-100 border-2 border-blue-700 text-blue-700 md:ml-3 px-4 py-2 shadow rounded hover:bg-gray-200"
                onClick={() => setBoxesCount((prevCount) => prevCount + 1)}
              >
                Add Text
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeGenerator;
