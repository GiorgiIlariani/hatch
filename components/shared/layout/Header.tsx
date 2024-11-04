"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import MobileNav from "../home/MobileNav";
import { useAppSelector } from "@/redux/hooks";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { NavLinks } from "@/constants";

const Header = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const { data: user, refetch } = useRetrieveUserQuery(undefined, {
    skip: !isAuthenticated,
  });

  useEffect(() => {
    if (isAuthenticated) {
      refetch();
    }
  }, [isAuthenticated, refetch]);

  return (
    <header className="w-full flex items-center justify-between bg-white px-4 py-5 border-b border-[#DDE1E6]">
      <Link href="/">
        <Image
          src="/assets/header-logo.png"
          alt="header-logo"
          width={125}
          height={48}
          className="w-[91px] h-[31px] md:w-[125px] md:h-[48px]"
        />
      </Link>

      {!isAuthenticated ? (
        <div className="hidden md:flex items-center gap-3">
          <Link href="/sign-in">
            <Button className="px-7 py-5 border-2 border-[#0000FF] text-[#0000FF] bg-transparent cursor-pointer hover:bg-transparent">
              Log In
            </Button>
          </Link>
          <Button className="px-7 py-5 border-[3px] border-[#0000FF] bg-[#0000FF] text-white font-bold hover:bg-[#0000FF]">
            Start Free Trial
          </Button>
        </div>
      ) : (
        <div className="hidden md:flex items-center gap-4">
          {NavLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="text-base font-medium text-[#21272A]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <MobileNav />
    </header>
  );
};

export default Header;
