import StartupCard from "@/components/shared/cards/StartupCard";
import { PaginationComponent } from "@/components/shared/Pagination";
import Image from "next/image";
import React from "react";

const StartupsPage = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-[300px] relative">
        <Image
          src="/assets/images/startup-hero_image.png"
          alt="startup image"
          width={1153}
          height={300}
          className="w-full h-full"
        />
        <p className="absolute order-10 text-5xl xl:text-[54px] font-bold text-black left-10 lg:left-[65px] top-[82px] max-w-[495px]">
          Discover the latest <span className="text-[#FFFFFF]">startups</span>
        </p>
      </div>

      <div className="w-full flex flex-col gap-8 lg:gap-4 mt-8">
        <StartupCard />
        <StartupCard />
        <StartupCard />
        <div className="mt-14">
          <PaginationComponent
            count={40}
            page={10}
            // setPage={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default StartupsPage;
