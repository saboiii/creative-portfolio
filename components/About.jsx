import Link from "next/link";
import Image from "next/image";
import ScrollBar from "./ScrollBar";
import { useScroll, useTransform, motion } from 'framer-motion';
import { FiExternalLink } from "react-icons/fi";
import { AiFillCode } from "react-icons/ai";
import { PiSmileyFill } from "react-icons/pi";

export default function About() {
    const { scrollYProgress } = useScroll();
    const tag = "flex m-1 bg-[#eeeeee]/5 tracking-widest text-center text-[9px] uppercase font-righteous rounded-full px-3 py-1 bg-[linear-gradient(45deg,transparent_25%,rgba(255,105,145,0.2)_50%,transparent_75%,transparent_100%)] overflow-hidden bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0]  shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[2000ms]";
    return (
        <div className="flex flex-col w-screen h-screen bg-[#111111] items-center justify-center">
            <ScrollBar />
            <div className="flex flex-col lg:flex-row items-center justify-center w-screen my-12 md:my-20">
                <div className="flex flex-col md:flex-row items-center animate-fadeslow">
                    <div className="flex flex-col w-[450px] px-20 lg:px-0 lg:w-[25vw]">
                        <p className="text-[7px] uppercase mt-4 tracking-widest text-center lg:text-left leading-tight">
                            Hello! My name is Saba.
                        </p>
                        <h1 className="text-center lg:text-left">ABOUT ME</h1>
                        <p className="text-xs mt-6 tracking-tight text-center lg:text-left">
                            I am a creative developer and designer who works with
                            Adobe tools and various other web technologies to create meaningful user
                            experiences and innovative products. With years of experience
                            in the field of graphic design, I have taken up lead positions in high school
                            clubs and worked as a brand designer and social media manager from 2022-2024 for the
                            <Link href='https://www.instagram.com/giistechclub/' to="route" target="_blank" rel="noopener noreferrer" className="inline text-[#ff4f8a] hover:text-[#fe95ba] ease-in-out duration-300">&nbsp;GIIS Tech Club <FiExternalLink size={12} className="inline translate-y-[-1.5px]" />&nbsp;</Link>
                            and the <Link href='https://www.instagram.com/giisartclub/' to="route" target="_blank" rel="noopener noreferrer" className="inline text-[#ff4f8a] hover:text-[#fe95ba] ease-in-out duration-300">&nbsp;GIIS Art Club <FiExternalLink size={12} className="inline translate-y-[-1.5px]" /></Link>.
                        </p>
                        <p className="text-xs mt-6 tracking-tight text-center lg:text-left">
                            I am currently honing my skills in the field of AI and machine learning by working
                            on designing my own deep learning frameworks using biological data.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-col items-center md:items-start h-full mt-6 lg:mt-0">
                    <div className="flex flex-col mr-0 md:mr-4 lg:mr-0">
                        <div className="flex flex-row justify-center lg:justify-start uppercase font-righteous text-[14px] w-full lg:ml-20 mt-6 lg:w-64"><AiFillCode size={20} className="inline mr-2" /> use regularly</div>
                        <div className="flex flex-wrap lg:justify-start justify-center items-start lg:ml-20 mt-4 w-[300px] lg:w-[400px]">
                            <div className={tag}>
                                React Native
                            </div>
                            <div className={tag}>
                                NextJS
                            </div>
                            <div className={tag}>
                                C#
                            </div>
                            <div className={tag}>
                                Adobe Creative Suite
                            </div>
                            <div className={tag}>
                                Javascript
                            </div>
                            <div className={tag}>
                                Typescript
                            </div>
                            <div className={tag}>
                                Figma
                            </div>
                            <div className={tag}>
                                Python
                            </div>
                            <div className={tag}>
                                AWS
                            </div>
                            <div className={tag}>
                                MongoDB
                            </div>
                            <div className={tag}>
                                HTML & CSS
                            </div>
                            <div className={tag}>
                                Git
                            </div>
                            <div className={tag}>
                                Flask
                            </div>
                            <div className={tag}>
                                Django
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-6 md:mt-0 ml-0 md:ml-4 lg:ml-0">
                        <div className="flex flex-row justify-center lg:justify-start uppercase font-righteous text-[14px] w-full lg:ml-20 mt-6 lg:w-64"><PiSmileyFill size={20} className="inline mr-2 " /> currently learning</div>
                        <div className="flex flex-wrap lg:justify-start justify-center items-start lg:ml-20 mt-4 w-[300px] lg:w-[400px]">
                            <div className={tag}>
                                C++/C
                            </div>
                            <div className={tag}>
                                Computer Vision
                            </div>
                            <div className={tag}>
                                Tensorflow
                            </div>
                            <div className={tag}>
                                Pytorch
                            </div>
                            <div className={tag}>
                                PostgreSQL
                            </div>
                            <div className={tag}>
                                AI/ML Frameworks
                            </div>
                            <div className={tag}>
                                Langchain
                            </div>
                            <div className={tag}>
                                NLP
                            </div>
                            <div className={tag}>
                                Android Development
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Image
                    src='/polaroid.png'
                    alt='A picture of Saba Azad'
                    height={200}
                    width={200}
                    className="flex md:w-[230px] animate-slam object-contain rotate-[10deg] mt-20 md:mt-0"
                /> */}
            </div>
            <ScrollBar />
        </div>
    )
}