import React from "react";
import loader from "../../images/loader.svg";

function Loader() {
  return (
    <div className="container flex justify-center mt-20">
      <img src={loader} alt="Loading memes..." style={{ width: "75px" }} />
    </div>
  );
}

export default Loader;
