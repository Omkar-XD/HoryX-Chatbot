import AboutFlipCard from "./ui-compo/AboutFlipCard";

const AboutSection = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center px-6"
  >
    <div className="max-w-5xl w-full text-center">

      <h2
        className="
          relative
          font-bold
          text-[2.5rem] sm:text-[3rem]
          leading-tight
          text-red-600
          text-center
          mb-12
        "
      >
        <span
          className="
            absolute inset-0
            bg-gradient-to-r
            from-red-200
            via-red-400/70
            to-red-700/10
            bg-clip-text
            text-transparent
            pointer-events-none
          "
        >
          Know About us
        </span>

        Know About us
      </h2>

      {/* ✅ CORRECT CENTERING — NO GRID FOR ONE ITEM */}
      <div className="flex justify-center w-full">
        <AboutFlipCard />
      </div>

    </div>
  </section>
);

export default AboutSection;
