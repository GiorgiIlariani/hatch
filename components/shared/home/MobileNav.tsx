"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../../ui/separator";
import NavItems from "./NavItems";
import { useAppSelector } from "@/redux/hooks";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
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
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/mobile-hamburger.svg"
            alt="menu"
            width={52}
            height={48}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent
          className="flex flex-col gap-6 bg-white md:hidden"
          aria-describedby="nav items">
          <SheetTitle>
            <Image
              src="/assets/header-logo.png"
              alt="header-logo"
              width={91}
              height={31}
            />
          </SheetTitle>
          <Separator className="border border-gray-50" />
          <NavItems />
          {!user && (
            <div className="w-full flex items-center gap-2 mt-8">
              <Link href="/sign-in" className="flex-1">
                <Button className="px-7 py-5 border-2 border-[#0000FF] text-[#0000FF] bg-transparent cursor-pointer">
                  Log In
                </Button>
              </Link>
              <Button className="flex-1 px-7 py-5 border-[3px] border-[#0000FF] bg-[#0000FF] text-white font-bold">
                Start Free Trial
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
