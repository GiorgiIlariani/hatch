import { Button } from "@/components/ui/button";
import { footerConstants, headerConstants } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* header */}
      <header className="w-full h-20 flex items-center justify-between bg-white px-20">
        <div>
          {/* <Image src="" alt="" width={} height={} /> */}
          Here will be Logo
        </div>

        <nav className="flex items-center gap-5">
          {headerConstants.map((item) => (
            <Link
              key={item.text}
              href={item.route}
              className="text-black font-semibold text-sm">
              {item.text}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button className="px-7 py-5 border-[3px] border-[#0000FF] text-[#0000FF] bg-transparent">
            Log In
          </Button>
          <Button className="px-7 py-5 border-[3px] border-[#0000FF] bg-[#0000FF] text-white font-bold">
            Start Free Trial
          </Button>
        </div>
      </header>

      {/* hero section */}
      <section className="bg-gray-100 w-full h-[500px] px-20 py-20">
        <div className="flex items-center gap-20">
          <div className="flex flex-col gap-10">
            <h1 className="font-bold text-4xl">
              Host Design Meetings <br /> From Anywhere
            </h1>
            <p className="text-sm">
              Unlock your design skills to create beautiful websites and apps
              with a <br /> poweful and easy-to-use tool.
            </p>
            <div className="flex gap-5">
              <Button className="px-5 py-3 border-2 border-[#0000FF] text-[#0000FF] bg-transparent">
                Primary Action
              </Button>
              <Button className="px-5 py-3 border-2 border-[#0000FF] bg-[#0000FF] text-white font-bold">
                Secondary action
              </Button>
            </div>
          </div>

          <div>
            <Image
              src="/assets/hero-section_image.webp"
              alt="hero image"
              width={600}
              height={405}
              className=""
            />
          </div>
        </div>
      </section>

      <section className="w-full h-[408px] flex items-center justify-center px-20">
        <div className="w-full flex flex-col items-center gap-8">
          <h1 className="text-3xl font-bold">
            Bibendum amet at molestie mattis.
          </h1>
          <p>
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum
            sit nunc in eros scelerisque sed. Commodo in viverra nunc,
            ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis,
            pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo
            eleifend ultricies purus iaculis.
          </p>
          <div className="flex gap-5">
            <Button className="px-5 py-3 border-2 border-[#0000FF] text-[#0000FF] bg-transparent">
              Primary Action
            </Button>
            <Button className="px-5 py-3 border-2 border-[#0000FF] bg-[#0000FF] text-white font-bold">
              Secondary action
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-500 w-full h-[252px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-7">
          <ul className="flex items-center gap-5">
            {footerConstants.map((item) => (
              <Link
                key={item.text}
                href={item.route}
                className="text-white font-semibold text-sm">
                {item.text}
              </Link>
            ))}
          </ul>

          <div className="flex items-center gap-3">ICONS</div>
          <p>CompanyName @ 202X. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
