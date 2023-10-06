import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-14 w-full px-2 py-8 bg-black text-white">
      <div className="padding-x max-w-[1440px] mx-auto">
        <div className="flex flex-wrap gap-20">
          {/* Col 1 */}
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-3 text-xl">
              <Image
                src="/footer-logo.svg"
                alt="logo"
                width={60}
                height={18}
                className="object-contain"
              />
              Auto-Market
            </Link>
            <div className="text-base">
              Your Trusted Partner in Car Excellence
            </div>
            <div className="mt-5 flex gap-5">
              {socialMedia.map((icon, index) => (
                <div
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                  key={index}
                >
                  {/* <img src={icon.src} alt={icon.alt} width={24} height={24} /> */}
                  <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              ))}
            </div>
          </div>

          {/* Col 2, 3 */}
          {footerLinks.map((section) => (
            <div className="flex-1" key={section.title}>
              <h4 className="text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 text-base leading-normal text-white-400 hover:text-slate-300"
                    key={link.name}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer">
            {/* <img
              src={copyrightSign}
              alt="copyright sign"
              width={20}
              height={20}
              className="rounded-full m-0"
            /> */}
            <Image
              src="/copyright.svg"
              alt="copyright sign"
              width={20}
              height={20}
              className="rounded-full m-0"
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="cursor-pointer">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
