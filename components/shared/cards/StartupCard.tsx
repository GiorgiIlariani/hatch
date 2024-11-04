import { startupCardConstants } from "@/constants";
import Image from "next/image";
import { MdOutlinePersonOutline } from "react-icons/md";

const StartupCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center py-6 sm:py-4 lg:py-0 border border-[#DDE1E6]">
      <Image
        src="/assets/images/startup-card_image.png"
        alt="startup card img"
        width={263}
        height={263}
        className="w-[263px] h-[263px]"
      />
      <div className="flex flex-col gap-4 xl:gap-8 px-4 xl:px-9 py-3 xl:py-6 max-h-[263px]">
        <div className="flex flex-col gap-2">
          <h2 className="text-[#21272A] font-bold text-[32px] leading-[35.2px]">
            Hatch
          </h2>
          <p className="text-[21272A] font-normal text-base leading-[22.4px] max-h-[88px] overflow-hidden text-ellipsis whitespace-normal line-clamp-2">
            Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec.
            Proin eget semper orci suspendisse in ornare adipiscing phasellus
            mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui.
          </p>
        </div>
        <a href="#" className="text-[#0F62FE] font-bold text-base">
          www.hatch.com
        </a>
        <div className="w-full flex flex-col xl:flex-row items-start xl:items-center gap-4 xl:gap-0 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#DDE1E6] bg-[#F2F4F8] flex items-center justify-center">
              <MdOutlinePersonOutline />
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm lg:text-base font-medium">
                Shoto Sikharulidze
              </h4>
              <p className="font-normal text-sm lg:text-base text-[#697077]">
                Senior Designer
              </p>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-3 xl:gap-5">
            {startupCardConstants.map((item, index) => (
              <div className="flex items-center gap-2 sm:gap-3 xl:gap-5 text-[#697077]">
                <div className="flex items-center gap-1">
                  {item.icon} {item.text}
                </div>
                {index !== startupCardConstants.length - 1 && "·"}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupCard;
