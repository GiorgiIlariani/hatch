"use client";

import { leftSidebarConstants } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full h-full py-10 px-2 lg:px-4 border-r border-[#DDE1E6]">
      <div className="w-full h-full flex flex-col">
        {leftSidebarConstants.map((item) => {
          const isActive = item.route === pathname;

          return (
            <Link
              href={item.route}
              key={item.route}
              className={`py-2 md:py-3 px-2  flex items-center gap-2 ${
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
    </aside>
  );
};

export default LeftSidebar;
