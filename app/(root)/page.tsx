import Footer from "@/components/shared/home/Footer";
import Hero from "@/components/shared/home/Hero";
import TeamSection from "@/components/shared/home/TeamSection";
import WhatWeOffer from "@/components/shared/home/WhatWeOffer";
import Header from "@/components/shared/layout/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      <section className="w-full bg-[#0F62FE] px-5 md:px-10 lg:px-20 py-20 flex flex-col gap-12 ">
        <div className="flex flex-col text-center">
          <strong className="text-[20px] font-bold text-white">
            YOU ARE IN GOOD COMPANY
          </strong>
          <h2 className="text-white text-[32px] lg:text-[42px] font-bold">
            INIT: Where friendship fuels innovation
          </h2>
        </div>
        <p className="text-white text-base lg:text-lg text-center">
          HATCH, powered by Init, is your launchpad for startup greatness.
          <br />
          Connect with skilled developers, designers, and DevOps to create
          something extraordinary.
        </p>
      </section>

      <WhatWeOffer />

      <TeamSection />

      <section className="w-full py-20 flex items-center justify-center px-10 sm:px-20 bg-primary">
        <div className="w-full flex flex-col items-center gap-8">
          <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-white text-center">
            Still Navigating? You Should Step Inside
          </h1>
          <p className="text-[18px] text-white sm:block hidden">
            Believe Us. From concept to commercialization, Hatch is your partner
          </p>
          <div className="flex gap-5">
            <Link href="/sign-up">
              <Button className="w-[117px] sm:w-[140px] h-[48px] sm:h-[56px] border-2 border-white text-[#001D6C] bg-white font-medium sm:font-bold rounded-none text-base sm:text-[20px]">
                Sign Up
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button className="w-[117px] sm:w-[140px] h-[48px] sm:h-[56px] border-2 border-white bg-transparent text-white font-medium sm:font-bold rounded-none text-base sm:text-[20px]">
                Log in
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
