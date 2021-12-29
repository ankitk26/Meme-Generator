import LinkButton from "../components/LinkButton";

const Home = () => {
  return (
    <div className="relative h-full overflow-hidden bg-cover bg-intro-page">
      {/* Dark Overlay */}
      <section className="absolute top-0 left-0 w-full h-full bg-[#1b1b1b] bg-opacity-60">
        <div className="mx-auto w-4/5">
          {/* Heading */}
          <h2 className="flex justify-center mt-32 text-3xl text-center text-white md:w-full md:text-6xl">
            Start creating your own memes
          </h2>

          {/* Links to create meme */}
          <div className="flex flex-col items-stretch justify-center gap-10 mt-8 md:flex-row">
            <LinkButton
              to="meme-templates"
              text="All Meme Templates"
              component="home"
            />
            <LinkButton
              to="own-meme"
              text="Create Custom Meme"
              component="home"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
