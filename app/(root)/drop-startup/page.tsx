import DropStartupForm from "@/components/forms/DropStartupForm";
import Image from "next/image";
import React from "react";

const DropStartup = () => {
  return (
    <div className="bg-[#DDE1E6] min-h-[200vh]">
      <div className="w-full h-[500px] absolute">
        <Image
          src="/assets/images/drop-startup.png"
          alt="drop startup"
          width={1440}
          height={500}
          className="h-[500px] w-full object-cover"
        />
      </div>

      <div className="relative max-w-[712px] mx-auto p-12 bg-[#FFFFFF] top-[244px] z-10">
        <h1 className="text-[#21272A] text-[42px] font-bold">Drop Startup</h1>
        <p className="text-[#21272A] text-lg font-normal">
          Your future team is excited to tap into your potential
        </p>

        <DropStartupForm />
      </div>
    </div>
  );
};

export default DropStartup;
