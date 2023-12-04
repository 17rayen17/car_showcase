"use client";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  const handelScroll = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="mt-24 flex flex-col text-black-100 border-t border-gray-100">
      <div className="max-md:flex-col flex justify-between flex-wrap gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col gap-5 justify-start items-start">
          <button onClick={handelScroll}>
            <Image
              src={"/carshowlogo.svg"}
              alt="logo"
              width={158}
              height={18}
              className="object-contain"
            />
          </button>
          <p className="text-base text-gray-700 select-none">
            Carhub 2023 <br />
            All Rights Reserved &copy;
            <br />
            <span className="font-bold">RAYEN ANDOLSI</span>
          </p>
          <div className="flex gap-4">
            <Link href={"https://www.linkedin.com/in/rayen-andolsi-3205832a2/"} title="linkedin" className="hover:scale-105">
              <Image
                src="/linkedin.svg"
                width={30}
                height={30}
                alt="linkedin"
                className="object-contain"
              />
            </Link>
            <Link href={"https://github.com/17rayen17"} title="github" className="hover:scale-105">
              <Image
                src="/github.svg"
                width={30}
                height={30}
                alt="github"
                className="object-contain"
              />
            </Link>
            <Link href={"https://discordapp.com/users/rayen#7215"} title="discord" className="hover:scale-105">
              <Image
                src="/discord.svg"
                width={30}
                height={30}
                alt="discord"
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="text-base font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-base text-gray-500 select-none"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer__copyrights select-none">
        <p>@2023 CarHub. All rights reserved</p>
        <div className="footer__copyrights-link">
          <Link href={"/"}>Privacy & Policy</Link>
          <Link href={"/"}>Terms & Condition</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
