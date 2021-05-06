import { useState } from "react";
import MemeGenerator from "../components/singleMemePage/MemeGenerator";

const OwnMeme = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageLink, setImageLink] = useState("");

  const handleFileChange = (e) => {
    e.preventDefault();
    setImageName(e.target.files[0].name);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleImageLink = (e) => {
    setImageLink(e.target.value);
  };

  const resetState = () => {
    setImageUrl(null);
    setImageLink("");
    setImageName("");
  };

  return (
    <div className="container mx-auto mt-5 text-center">
      <h1 className="text-3xl text-gray-800">Create your own custom Meme</h1>

      <div className="flex flex-col items-center justify-center w-11/12 gap-5 mx-auto my-10 md:flex-row md:gap-10 ">
        {/* Image Upload from file */}
        <div className="w-full md:w-auto">
          <label
            htmlFor="inputImage"
            className="inline-block w-full px-4 py-2 text-gray-900 bg-gray-300 cursor-pointer md:w-auto hover:bg-gray-400"
          >
            <i className="mr-2 fas fa-image"></i> Upload Image
          </label>
          <input
            type="file"
            name="inputImage"
            id="inputImage"
            className="hidden"
            onChange={handleFileChange}
          />
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
              className="inline-block w-full px-4 py-2 text-center text-gray-900 bg-gray-300 md:w-auto focus:outline-none"
              onChange={handleImageLink}
            />
          </label>
        </div>

        <button
          className="w-full px-5 py-2 text-gray-100 bg-blue-700 md:w-auto"
          onClick={resetState}
        >
          Clear
        </button>
      </div>

      <div className="flex items-center justify-center gap-3 mt-10">
        <i className="text-gray-800 fas fa-info-circle"></i>
        <h1 className="text-gray-800">
          Drag the text to move it around the image
        </h1>
      </div>

      {(imageUrl || imageLink) && (
        <MemeGenerator
          imageUrl={imageUrl === null ? imageLink : imageUrl}
          box_count={2}
          imageName={imageName}
        />
      )}
    </div>
  );
};

export default OwnMeme;
