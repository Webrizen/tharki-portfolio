"use client";
import Starfield from "@/components/Starfield";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="w-screen h-screen relative">
      <Starfield />
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-8 md:pl-40 pb-[500px] md:pb-20 flex flex-col gap-5 z-[10] md:max-w-[750px] w-full">
          <h1 className="md:text-[50px] text-5xl text-white font-semibold">
            Hi.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              I am Ammar Kheder
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block font-extrabold">
            CEO WABEL GROUP || Niort, Nouvelle-Aquitaine, France
          </p>
          <p className="text-gray-500 text-sm hidden md:block pb-9">
            I am an apprentice engineer in Big Data and Artificial Intelligence at EICNAM (engineering school of CNAM) in Niort.
            I am currently working as an apprentice engineer in AI at SGS SAFEGUARD.
          </p>

          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              About me
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Blog
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-16 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          About Me
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute md:top-[28%] top-[30%] right-[23%] z-[30]">
        <Image
          src="/user.jpeg"
          alt="user"
          height={280}
          width={280}
          className="relative md:right-[50%] right-[0%] md:top-[20%] top-[35%] rounded-full md:w-auto md:h-auto h-[200px] w-[200px]"
        />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}