import loader from "../assets/images/loader.svg";

const Loader = () => {
  return (
    <div className="container flex justify-center mt-20">
      <img src={loader} alt="Loading memes..." className="w-16" />
    </div>
  );
};

export default Loader;
