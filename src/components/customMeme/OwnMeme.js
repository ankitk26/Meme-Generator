import React, { useState } from "react";
import MemeGenerator from "../singleMeme/MemeGenerator";

const OwnMeme = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageLink, setImageLink] = useState("");

  const handleFileChange = (e) => {
    e.preventDefault();
    setImageName(e.target.files[0].name);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleImageLink = (e) => setImageLink(e.target.value);

  const resetAll = () => {
    setImageUrl(null);
    setImageLink("");
    setImageName("");
  };

  return (
    <div className="container mx-auto text-center mt-5">
      <h1 className="text-gray-800 text-3xl">Create your own custom Meme</h1>

      <div className="my-10 flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center w-11/12 mx-auto ">
        {/* Image Upload from file */}
        <div className="w-full md:w-auto">
          <label
            htmlFor="inputImage"
            className="inline-block px-4 py-2 w-full md:w-auto cursor-pointer bg-gray-300 text-gray-900 hover:bg-gray-400"
          >
            <i className="fas fa-image mr-2"></i> Upload Image
          </label>
          <input type="file" name="inputImage" id="inputImage" onChange={handleFileChange} />
        </div>
        {/* Paste Image Link */}
        <div className="w-full md:w-auto">
          <label htmlFor="customImageUrl">
            <input
              type="text"
              name="customImageUrl"
              placeholder="Paste image link"
              value={imageLink}
              id="customImageUrl"
              className="inline-block px-4 text-center py-2 w-full md:w-auto bg-gray-300 text-gray-900 focus:outline-none"
              onChange={handleImageLink}
            />
          </label>
        </div>
        <button className="bg-blue-700 text-gray-100 px-2 py-1 w-full md:w-auto" onClick={resetAll}>
          Clear
        </button>
      </div>
      <div className="flex gap-3 justify-center items-center mt-10">
        <i className="fas fa-info-circle text-gray-800"></i>
        <h1 className="text-gray-800">Drag the text to move it around the image</h1>
      </div>
      {(imageUrl || imageLink) && (
        <MemeGenerator imageUrl={imageUrl === null ? imageLink : imageUrl} box_count={2} imageName={imageName} />
      )}
    </div>
  );
};

export default OwnMeme;
