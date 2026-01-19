
import Card from "./ui-compo/FeatureCard";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl w-full">
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
  {/* Stronger shine overlay */}
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
    What You Can Do with HoryX
  </span>

  {/* Base text */}
  What You Can Do with HoryX
</h2>



<div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">

  <Card
    title={<>ASK<br />ANYTHING</>}
    subtitle="TEXT AI"
    description="Interact with an advanced text intelligence that understands your questions, reasons through them, and delivers clear, accurate, and actionable answers instantly."
  />

  <Card
    title={<>WRITE<br />BETTER</>}
    subtitle="CONTENT"
    description="Create, refine, and rewrite content with precision — from emails and essays to creative writing — while improving clarity, tone, and structure in seconds."
  />

  <Card
    title={<>CODE<br />HELP</>}
    subtitle="DEVELOPMENT"
    description="Get smart assistance with debugging, logic, architecture, and writing clean, efficient, production-ready code across languages and frameworks."
  />

</div>


      </div>
    </section>
  );
};

export default FeaturesSection;
