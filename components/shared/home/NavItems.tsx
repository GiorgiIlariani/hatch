"use client";

import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="flex items-start flex-col gap-4">
      {NavLinks.map(({ label, href, icon }) => {
        const isActive = href === pathname;

        return (
          <Link
            href={href}
            key={href}
            className={`${
              isActive && "bg-primary text-white"
            } text-xl font-normal flex items-center gap-2 p-3 w-full`}>
            {icon}
            {label}
          </Link>
        );
      })}
    </ul>
  );
};

export default NavItems;
