"use client";

import { leftSidebarConstants } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileTopBar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex flex-row">
      {leftSidebarConstants.map((item) => {
        const isActive = item.route === pathname;

        return (
          <Link
            href={item.route}
            key={item.route}
            className={`py-2 md:py-3 px-2  flex items-center justify-center flex-1 gap-2 ${
              isActive
                ? "bg-[#A3C3FF] text-[#051F4F] border-l-2 border-[#0F62FE]"
                : "text-[#0F62FE] border border-[#F2F4F8]"
            }`}
          >
            <Image src={item.image} alt={item.text} width={24} height={24} />

            <p>{item.text}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileTopBar;
