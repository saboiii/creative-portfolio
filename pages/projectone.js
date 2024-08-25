import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { RiLinkM } from "react-icons/ri";

export default function ProjectOne() {
    return (
        <div className="flex flex-col w-screen">
            <Head>
                <title>Saba Azad | Project One</title>
                <meta name="description" content="Project One." />
            </Head>
            <div className="flex bg-banner bg-cover w-full h-6 bg-top" />
            <div className="flex flex-col py-4 px-16 animate-fadeslow">
                <h1 className="mt-8">HACKCLUB PROJECT</h1>
                <div className="flex flex-row">
                    <p className="text-[9px] tracking-widest leading-tight uppercase mb-4">This is an overview of my design process for the HackClub Study. Watch how it came to life, or, &nbsp;</p>
                    <Link href='/' className="text-[9px] tracking-widest leading-tight uppercase mb-4 cursor-pointer text-[#fc669b]"> Click here to go back.</Link>
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4 w-full lg:h-[75vh]">
                    <div className="flex flex-col bg-gradient-to-br from-[#0e0e0e] to-black w-full h-full md:row-span-2 rounded-2xl p-8 overflow-hidden items-center justify-center">
                        <div className="flex font-righteous mb-2 w-full">
                            01 &nbsp; Planning & Sketching
                        </div>
                        <Image
                            src='/planning.png'
                            alt="Planning and sketching."
                            width={300}
                            height={300}
                            className="object-cover flex"
                        />
                    </div>
                    <div className="flex flex-col bg-gradient-to-br from-[#0e0e0e] to-black w-full h-full row-span-3 md:col-span-2 rounded-2xl p-8 overflow-hidden items-center justify-center">
                        <div className="flex font-righteous mb-2 w-full">
                            03 &nbsp; Wireframing/Prototyping
                        </div>
                        <p className="text-[9px] tracking-widest uppercase mb-4 w-full">
                            i use figma to lay out the basic design. For larger applications, it helps me explore different user flows and interactions.
                        </p>
                        <Image
                            src='/figma.png'
                            alt="Figma screenshot of prototyping."
                            width={400}
                            height={400}
                            className="object-cover flex"
                        />
                    </div>
                    <div className="bg-gradient-to-br from-[#0e0e0e] to-black w-full h-full rounded-2xl p-8 overflow-hidden">
                        <div className="font-righteous mb-2">
                            05 &nbsp; Development
                        </div>
                        <p className="text-[9px] tracking-widest uppercase mb-4 w-full">
                            I introduced custom animations (button glow, fade-in, etc) to make the user's interactions feel more natural and engaging.
                        </p>
                    </div>
                    <div className="flex-col flex bg-gradient-to-br from-[#0e0e0e] to-black w-full h-full md:row-span-2 rounded-2xl p-8 overflow-hidden items-center justify-center">
                        <div className="flex w-full font-righteous mb-2">
                            06 &nbsp; Designing
                        </div>
                        <p className="text-[9px] tracking-widest uppercase mb-4 w-full">
                            Original illustrations using Adobe Photoshop and Illustrator.
                        </p>
                        <Image
                            src='/painting.png'
                            alt="Illustrating with Photoshop."
                            width={200}
                            height={200}
                            className="object-cover flex"
                        />
                    </div>
                    <div className="flex-col flex bg-gradient-to-br from-[#0e0e0e] to-black w-full h-full md:row-span-2 rounded-2xl p-8 overflow-hidden items-center justify-center">
                        <div className="flex w-full font-righteous mb-2">
                            02 &nbsp; Typography and Swatching
                        </div>
                        <Image
                            src='/swatches.png'
                            alt="Swatches and typography."
                            width={200}
                            height={200}
                            className="object-cover flex"
                        />
                    </div>
                    <div className="bg-gradient-to-br from-[#0e0e0e] to-black w-full h-full md:col-span-2 rounded-2xl p-8 overflow-hidden">
                        <div className="font-righteous pb-2">
                            04 &nbsp; Stack Selection
                        </div>
                        <p className="text-[9px] tracking-widest uppercase w-full mb-2">
                            Landing page (frontend) : Next.js, React, HTML, CSS, JavaScript, Tailwind CSS
                        </p>
                        <p className="text-[9px] tracking-widest uppercase w-full">
                            Brand materials & designs : Adobe Photoshop, Adobe Illustrator, Figma
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#0e0e0e] to-black w-full h-full p-8 overflow-hidden">
                        <div className="font-righteous mb-2">
                            07 &nbsp; Link to Project
                        </div>
                        <Link href='https://hackclubstudy.netlify.app/' className="tracking-widest uppercase w-full text-[#fc669b] hover:text-white ease-in-out duration-300 font-normal text-xs">
                            HackClub Study
                            <RiLinkM className="inline ml-1 translate-y-[-1px]" size={14}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}