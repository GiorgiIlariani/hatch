"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import MobileNav from "../home/MobileNav";
import { useAppSelector } from "@/redux/hooks";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

const Header = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const {
    data: user,
    isLoading,
    isFetching,
    refetch,
  } = useRetrieveUserQuery(undefined, {
    skip: !isAuthenticated,
  });

  useEffect(() => {
    if (isAuthenticated) {
      refetch();
    }
  }, [isAuthenticated]);

  console.log(user);

  return (
    <header className="w-full flex items-center justify-between bg-white px-4 py-5">
      <Image
        src="/assets/header-logo.png"
        alt="header-logo"
        width={125}
        height={48}
        className="w-[91px] h-[31px] md:w-[125px] md:h-[48px]"
      />

      <div className="md:flex items-center gap-3 hidden">
        <Link href="/sign-in">
          <Button className="px-7 py-5 border-2 border-[#0000FF] text-[#0000FF] bg-transparent cursor-pointer">
            Log In
          </Button>
        </Link>
        <Button className="px-7 py-5 border-[3px] border-[#0000FF] bg-[#0000FF] text-white font-bold">
          Start Free Trial
        </Button>
      </div>

      <MobileNav />
    </header>
  );
};

export default Header;
