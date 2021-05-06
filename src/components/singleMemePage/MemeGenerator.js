import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { useState } from "react";
import Captions from "./Captions";
import ImageSection from "./ImageSection";

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
    <div className="container mx-auto mt-6">
      <div className="flex flex-col items-center gap-10 px-10 py-5 bg-gray-200 md:flex-row justify-evenly md:items-start md:gap-20">
        <div className="w-full md:w-1/2">
          <ImageSection
            image={isMeme ? props.meme.url : props.imageUrl}
            box_count={boxesCount}
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full mt-5 md:w-4/5 md:mx-3">
            {boxes.map((box, index) => (
              <Captions
                key={index}
                index={index}
                id={isMeme ? props.meme.id : index}
              />
            ))}
            <div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
              <button
                className="flex items-center justify-center w-full gap-3 px-4 py-2 tracking-widest text-white bg-blue-700 rounded shadow md:w-auto md:ml-3 hover:bg-blue-900 focus:outline-none"
                onClick={downloadMeme}
              >
                <i className="text-white fas fa-download"></i>
                <span>Download Meme</span>
              </button>
              <button
                className="w-full px-4 py-2 text-blue-700 bg-gray-100 border-2 border-blue-700 rounded shadow md:w-auto md:ml-3 hover:bg-gray-200"
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
