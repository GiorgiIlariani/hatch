import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[url('/assets/images/hero-desktop.png')] w-full h-[748px] bg-cover bg-center">
      <div className="flex items-center gap-20">
        <div className="max-w-[642px] flex flex-col items-start gap-10 ml-5 sm:ml-[40px] lg:ml-[120px] mt-[200px] md:mt-[136px] pt-[96px]">
          <h1 className="font-bold text-5xl lg:text-[64px]">
            Your Startup
            <br /> Journey Starts Here
          </h1>
          <p className="text-lg md:text-[24px] font-medium">
            Be part of the innovation movement. Find your co-founders and
            collaborators here
          </p>

          <Button className="px-5 py-3 border-2 border-[#0000FF] bg-[#0000FF] text-white font-bold">
            Try it Yourself
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
