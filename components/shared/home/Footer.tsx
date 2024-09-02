import { footerConstants } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black-1 w-full py-12 flex items-center justify-center">
      <div className="flex flex-col items-center gap-12">
        <Image
          src="/assets/images/footer-logo.png"
          alt="footer logo"
          width={125}
          height={48}
        />
        <div className="flex items-center gap-4">
          {footerConstants.map((icon) => (
            <Link href={icon.route} key={icon.alt}>
              <Image src={icon.image} alt={icon.alt} width={24} height={24} />
            </Link>
          ))}
        </div>
        <p className="text-sm sm:text-base text-white">
          CompanyName @ 202X. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
