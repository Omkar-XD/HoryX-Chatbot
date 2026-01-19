import Navbar from "../components/Navbar";
import HorizonBackground from "../components/hero/HorizonBackground";
import FeaturesSection from "../components/FeaturesSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import GetStartedButton from "../components/ui-compo/GetStartedButton";


const Home = () => {
  return (
    <>
      <HorizonBackground />
      <Navbar />

      {/* Hero Content */}
      <section 
      id = "home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6">
  <h1
  className="
    font-extrabold
    leading-none
    tracking-tight
    text-red-500
    text-[18vw] sm:text-[14vw] md:text-[12vw]
  "
>
  HoryX
</h1>


  <p
  className="
    relative
    mt-6
    font-bold
    text-[2.25rem] sm:text-[2.75rem] md:text-[3rem]
    leading-tight
    text-white
    max-w-2xl
  "
>
  {/* Shine overlay */}
  <span
    className="
      absolute inset-0
      bg-gradient-to-r
      from-white/90 via-white/40 to-transparent
      bg-clip-text
      text-transparent
      pointer-events-none
    "
  >
    Text-only AI chat. Fast. Simple. Reliable.
  </span>

  {/* Base text */}
  Text-only AI chat. Fast. Simple. Reliable.
</p>

  <div className="mt-8">
  <GetStartedButton onClick={() => window.location.href = "/login"} />
</div>

</section>


      <FeaturesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;
