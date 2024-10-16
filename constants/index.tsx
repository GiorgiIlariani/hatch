export const headerConstants = [
  {
    text: "Eleven",
    route: "/",
  },
  {
    text: "Twelve",
    route: "/",
  },
  {
    text: "Twenty",
    route: "/",
  },
  {
    text: "TwentyOne",
    route: "/",
  },
];

export const footerConstants = [
  {
    image: "/assets/icons/youtube.svg",
    alt: "youtube",
    route: "/",
  },
  {
    image: "/assets/icons/facebook.svg",
    alt: "facebook",
    route: "/",
  },
  {
    image: "/assets/icons/twitter.svg",
    alt: "twitter",
    route: "/",
  },
  {
    image: "/assets/icons/instagram.svg",
    alt: "instagram",
    route: "/",
  },
  {
    image: "/assets/icons/linkedin.svg",
    alt: "linkedIn",
    route: "/",
  },
];

export const aboutUsConstants = [
  {
    name: "Nikoloz Nozadze",
    profession: "UI Designer",
    buttonText: "Contact Nikoloz",
    profileImg: "/assets/images/profile-picture-1.png",
    links: {
      facebook: "",
      instagram: "",
      linkedIn: "",
    },
  },
  {
    name: "Nikoloz Mdinaradze",
    profession: "Back-end Developer",
    buttonText: "Contact Nikoloz",
    profileImg: "/assets/images/profile-picture-2.png",
    links: {
      facebook: "",
      instagram: "",
      linkedIn: "",
    },
  },
  {
    name: "Giorgi Ilariani",
    profession: "Front-end Developer",
    buttonText: "Contact Giorgi",
    profileImg: "/assets/images/profile-picture-3.png",
    links: {
      facebook: "",
      instagram: "",
      linkedIn: "",
    },
  },
];

import { FaHome } from "react-icons/fa";
import { CgArrowTopRightO } from "react-icons/cg";
import { AiFillExclamationCircle } from "react-icons/ai";

export const NavLinks = [
  {
    label: "Home",
    href: "/",
    icon: <FaHome />,
  },
  {
    label: "About Us",
    href: "/about-us",
    icon: <AiFillExclamationCircle />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <CgArrowTopRightO />,
  },
];
