import Image from "next/image";
import Link from "next/link";
import { LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-col justify-between items-center h-[30vh] w-full mb-10 lg:mb-0">
        <div className="flex bg-banner bg-cover w-full h-6 bg-top"/>
        <div className="flex flex-col items-center">
          <Image
            src='/title.png'
            height={250}
            width={250}
            className="flex h-10 animate-fadeslow"
          />
          <p className="text-[6px] animate-fadeslow uppercase mt-4 tracking-widest w-48 leading-tight text-center">
            Welcome to my creative portfolio &nbsp;|&nbsp; All rights reserved &nbsp;|&nbsp; Inspired by JastroProject
          </p>
          <div className="flex animate-entre flex-row gap-4 items-center mt-4">
            <Link href='/' className="hover:text-[#fc669b] ease-in-out duration-300"><LuGithub size={18} /></Link>
            <Link href='/' className="hover:text-[#fc669b] ease-in-out duration-300"><LuLinkedin size={18} /></Link>
            <Link href='/' className="hover:text-[#fc669b] ease-in-out duration-300"><LuInstagram size={18} /></Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-10 lg:px-24 xl:px-52 w-full h-[70vh] overflow-hidden">
        <div className="flex justify-center animate-fade">
          <Image
            src='/poster-1.png'
            height={100}
            width={350}
            className="object-contain flex md:grayscale-[30%] hover:grayscale-0 md:hover:translate-y-[-4px] transition duration-400 ease-in-out"
          />
        </div>
        <div className="flex justify-center animate-fade">
          <Image
            src='/poster-2.png'
            height={100}
            width={350}
            className="object-contain flex md:grayscale-[30%] hover:grayscale-0 md:hover:translate-y-[-4px] transition duration-500 ease-in-out"
          />
        </div>
        <div className="flex justify-center animate-fade">
          <Image
            src='/poster-1.png'
            height={100}
            width={350}
            className="object-contain flex md:grayscale-[30%] hover:grayscale-0 md:hover:translate-y-[-4px] transition duration-500 ease-in-out"
          />
        </div>
        
      </div>
    </div>
  );
}
