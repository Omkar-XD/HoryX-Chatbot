import { Component as Horizon } from "@/components/ui/horizon-hero-section";

const HorizonBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Horizon />
    </div>
  );
};

export default HorizonBackground;
