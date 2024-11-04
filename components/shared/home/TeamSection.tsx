import { aboutUsConstants } from "@/constants";
import Image from "next/image";
import { Button } from "../../ui/button";

const TeamSection = () => {
  return (
    <section className="w-full bg-white px-5 md:px-10 lg:px-20 py-20">
      <div className="flex flex-col gap-2 text-center">
        <span className="text-[#001D6C] text-[20px] font-bold">The Team</span>
        <h3 className="font-bold text-2xl sm:text-3xl lg:text-[42px]">
          We&#39;re INIT - A passionate group of creatives, collaborators, and
          innovators. Join us on our journey to success
        </h3>
      </div>

      <div className="w-full grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 mt-16">
        {aboutUsConstants.map((person) => (
          <div className="w-full flex flex-col gap-4" key={person.name}>
            <div className="w-full flex justify-center">
              <Image
                src={person.profileImg}
                alt={person.name}
                width={416}
                height={303}
              />
            </div>

            <div className="w-full flex flex-col items-center gap-2 md:gap-4">
              <div className="text-center">
                <h3 className="text-[#21272A] text-lg">{person.name}</h3>
                <span className="text-[#5d6063] text-lg">
                  {person.profession}
                </span>
              </div>
              <div className="flex items-center gap-4"></div>
              <Button className="border-2 border-[#0F62FE] text-[#0F62FE] bg-transparent py-4 px-3 text-base font-medium">
                {person.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
