import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const JobsCard = () => {
  return (
    <div className="py-3 lg:py-6 px-2 md:px-4 lg:px-12 border-b border-[#DDE1E6] flex items-center gap-3 md:gap-9">
      <Image
        src="/assets/images/jobs-card_image.png"
        alt="jobs card img"
        width={100}
        height={100}
      />

      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold">UI/UX Designer</h2>
            <h3 className="font-medium text-base sm:text-xl">10$ /hr/</h3>
          </div>
          <p className="text-[#697077] text-base font-medium">
            Tbilisi, Georgia
          </p>
        </div>

        <div className="w-full flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4">
            <p className="text-[#697077] text-sm sm:text-base font-medium">
              On-site
            </p>
            ·
            <p className="text-[#697077] text-sm sm:text-base font-medium">
              Full-Time
            </p>
          </div>

          <Button className="flex items-center gap-4 bg-transparent border-2 border-[#0F62FE] text-[#0F62FE] py-4 px-3 hover:bg-transparent">
            <p>Apply</p>
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
