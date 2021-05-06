import CustomNavLink from "../layouts/CustomNavLink";

const Home = () => {
  return (
    <div className="h-[87vh] overflow-hidden bg-cover relative bg-intro-page">
      {/* Dark Overlay */}
      <section className="absolute top-0 left-0 w-full h-full bg-[#1b1b1b] bg-opacity-60">
        {/* Heading */}
        <h2 className="flex justify-center w-11/12 mt-32 text-3xl text-center text-white md:w-full md:text-6xl">
          Start creating your own memes ...
        </h2>

        {/* Links to create meme */}
        <div className="flex flex-col items-center justify-center gap-10 mt-5 md:flex-row">
          <CustomNavLink
            to="memeTemplates"
            heading="All Meme Templates"
            component="home"
          />
          <CustomNavLink to="ownMeme" heading="Upload File" component="home" />
        </div>
      </section>
    </div>
  );
};

export default Home;
