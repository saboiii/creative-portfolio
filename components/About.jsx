import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <div className="flex w-screen h-screen bg-[#111111] items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-center h-[75vh] w-screen">
                    <div className="flex flex-col md:flex-row items-center animate-fadeslow">
                        <div className="hidden md:flex w-[1px] h-56 mr-8 bg-white" />
                        <div className="flex flex-col w-[450px] px-16 md:pr-24">
                            <p className="text-[7px] uppercase mt-4 tracking-widest text-center md:text-left leading-tight">
                                Hello! My name is Saba.
                            </p>
                            <h1 className="text-center md:text-left">ABOUT ME</h1>
                            <p className="text-xs mt-6 tracking-tight text-center md:text-left">
                                I am a creative developer and designer who works with
                                Adobe tools and various other web technologies to create meaningful user
                                experiences and innovative products. With years of experience
                                in the field of graphic design, I have taken up lead positions in high school
                                clubs and worked as a brand designer and social media manager from 2022-2024 for the
                                <Link href='https://www.instagram.com/giistechclub/' className="inline text-[#fc669b]">&nbsp;GIIS Tech Club&nbsp;</Link>
                                and the <Link href='https://www.instagram.com/giisartclub/' className="inline text-[#fc669b]">&nbsp;GIIS Art Club</Link>.
                            </p>
                            <p className="text-xs mt-6 tracking-tight text-center md:text-left">
                                I am currently honing my skills in the field of AI and machine learning by working
                                on deep learning frameworks using biological data.
                            </p>
                        </div>
                    </div>
                    <Image
                        src='/polaroid.png'
                        alt='A picture of Saba Azad'
                        height={200}
                        width={200}
                        className="flex md:w-[230px] rotate-6 object-contain opacity-90 mt-12 md:mt-0"
                    />
                </div>
            
        </div>
    )
}