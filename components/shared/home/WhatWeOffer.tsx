import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const WhatWeOffer = () => {
  return (
    <section className="w-full bg-[#F2F4F8] px-5 md:px-10 xl:px-20 py-20">
      <div className="flex flex-col  gap-2 text-center">
        <span className="text-[#001D6C]  text-[20px] font-bold">
          What We Offer
        </span>
        <h3 className="font-bold text-[32px] md:text-[42px]">
          Your Success Is Our Mission
        </h3>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-center gap-8 mt-20">
        <div className="w-full flex justify-center">
          <Link
            href="/"
            className="flex-1 flex-col items-start max-w-[632px] justify-center">
            <Image
              src="/assets/images/startups.png"
              alt="startups"
              width={600}
              height={250}
            />
            <h2 className="mt-4 text-xl font-semibold">For Startups</h2>
            <p className="mt-2 text-gray-600 text-wrap">
              We create a collaborative ecosystem where you can discover top
              talent, build high-performing teams, and bring innovative products
              to market.
            </p>
          </Link>
        </div>
        <div className="w-full flex justify-center">
          <Link href="/" className="flex-1 flex-col items-start max-w-[632px]">
            <Image
              src="/assets/images/professionals.png"
              alt="professionals"
              width={600}
              height={250}
            />
            <h2 className="mt-4 text-xl font-semibold">For Professionals</h2>
            <p className="mt-2 text-gray-600 text-wrap">
              We provide a space for professionals to explore new challenges,
              expand their skillsets, and build fulfilling careers.
            </p>
          </Link>
        </div>
      </div>

      <Button className="text-white rounded-none mt-20 block mx-auto">
        Take An Opportunity
      </Button>
    </section>
  );
};

export default WhatWeOffer;
