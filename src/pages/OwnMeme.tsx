import { useState } from "react";
import { MdImage, MdInfo } from "react-icons/md";
import MemeGenerator from "../components/MemeGenerator";

export default function OwnMeme() {
  const [imageUrl, setImageUrl] = useState<string | null>("");
  const [imageName, setImageName] = useState("");
  const [imageLink, setImageLink] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (files) {
      setImageName(files[0].name);
      setImageUrl(URL.createObjectURL(files[0]));
    }
  };

  const handleImageLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageLink(e.target.value);
  };

  const resetState = () => {
    setImageUrl(null);
    setImageLink("");
    setImageName("");
  };

  return (
    <div className="container mx-auto mt-12">
      <h1 className="md:text-2xl text-xl font-semibold text-center text-gray-800">
        Create your own custom Meme
      </h1>

      <div className="flex flex-col items-stretch justify-center w-11/12 gap-5 mx-auto my-10 md:flex-row md:gap-10 ">
        {/* Image Upload from file */}
        <div className="w-full md:w-auto">
          <label
            htmlFor="inputImage"
            className="flex items-center gap-2 w-full px-4 py-2 text-gray-800 bg-gray-200 cursor-pointer md:w-auto hover:bg-gray-300"
          >
            <MdImage />
            <span>Upload Image</span>
          </label>
          <input
            type="file"
            name="inputImage"
            id="inputImage"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <span className="self-center text-xs text-gray-600">OR</span>

        {/* Paste Image Link */}
        <div className="w-full md:w-auto">
          <input
            value={imageLink}
            placeholder="Paste image link"
            className="inline-block w-full px-4 py-2 text-gray-800 bg-gray-200 md:w-auto focus:outline-none"
            onChange={handleImageLink}
          />
        </div>

        <button
          className="w-full px-4 rounded text-sm py-2 text-gray-100 bg-primary hover:bg-primary-dark md:w-auto"
          onClick={resetState}
        >
          Clear
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-10">
        <MdInfo className="text-gray-800" />
        <h4 className="text-gray-800 text-sm">
          Drag the text to move it around the image
        </h4>
      </div>

      {(imageUrl || imageLink) && (
        <MemeGenerator
          imageUrl={imageUrl ? imageUrl : imageLink}
          box_count={2}
          imageName={imageName}
        />
      )}
    </div>
  );
}
