import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { Dancing_Script } from "next/font/google";

const DancingScript = Dancing_Script({ subsets: ['latin'] })

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/logo-white.png"
            alt="logo"
            width={40}
            height={40}
            className="w-full md:h-20 h-10 object-contain rounded-full"
          />
        </div>
        {/* <h1 className={`${DancingScript.className} text-white md:text-5xl text-2xl font-bold`}>
          Ammar Kheder
        </h1> */}
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <a href={social.link} key={social.name}>
            <Image
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
