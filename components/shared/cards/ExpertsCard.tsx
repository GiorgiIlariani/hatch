import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const JobsCard = () => {
  return (
    <div className="py-3 lg:py-6 px-2 md:px-4 lg:px-12 border-b border-[#DDE1E6] flex items-center gap-2 sm:gap-3 md:gap-9">
      <Image
        src="/assets/images/profile-picture-2.png"
        alt="experts profile img"
        width={124}
        height={124}
        className="w-[100px] md:w-[124px] h-[100px] md:h-[124px] rounded-full object-cover"
      />
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm xs:text-base sm:text-xl md:text-2xl font-bold">
              Nikoloz Nozadze
            </h2>
            <h3 className="font-medium text-xs xs:text-sm sm:text-lg md:text-xl">
              UI/UX Designer
            </h3>
          </div>
          <p className="text-[#697077] text-xs xs:text-sm sm:text-base font-medium">
            Tbilisi, Georgia
          </p>
        </div>

        <div className="w-full flex items-center justify-between gap-2">
          <p className="text-[#697077] text-xs xs:text-sm sm:text-base font-medium">
            Experience: 2+ year
          </p>

          <Button className="flex items-center gap-4 bg-transparent border-2 border-[#0F62FE] text-[#0F62FE] py-2 sm:py-4 px-2 sm:px-3 text-xs sm:text-sm hover:bg-transparent">
            <p>Contact</p>
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
