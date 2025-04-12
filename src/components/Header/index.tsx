"use client"
import { beaufort } from "@/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ContactIcon, HomeIcon, ResumeIcon, SamplesIcon } from "../Icons";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const pathname = usePathname()
    return <header className={`flex justify-between w-screen fixed z-100 bg-blue-6/[0.5] top-0 items-center text-gold-2 ${beaufort.className} border-t-3 border-gold-4`}>
        <section className="flex items-end text-2xl px-6">
            <Link href="/" className="flex self-center py-5">
                <div className={`self-center gold-circle`}><span className="text-8xl relative -top-7 hextech-gold-gradient text-shadow-lg">S</span></div>
                <div className={`relative -left-2 -z-1 text-xl text-white bg-gray-800 self-center border border-blue-4 py-1 px-2 outline outline-gold-6 outline-offset-3`}>OVESON</div>
            </Link>
            <section className="hidden md:flex flex-row">
                <HextechLink className="before:translate-x-2/3" title="League of Legends" isActive={pathname === "/league"} href="/league">LEAGUE</HextechLink>
                <HextechLink title="Teamfight Tactics" isActive={pathname === "/teamfight-tactics"} href="/teamfight-tactics">TFT</HextechLink>
            </section>
        </section>

        <nav className="flex lg:hidden">
            <div
                className="space-y-2 px-10"
                onClick={() => setIsNavOpen((prev) => !prev)}
            >
                <span className="block h-0.5 w-8 animate-pulse bg-gold-3"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gold-3"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gold-3"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav bg-linear-to-r from-blue-6 to-blue-7" : "hideMenuNav"}>
                <div
                    className="absolute top-0 right-0 px-8 py-8"
                    onClick={() => setIsNavOpen(false)}
                >
                    <svg
                        className="h-8 w-8 text-gold-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
                <ul className="flex flex-col items-center justify-between min-h-[250px]">
                    <li className="my-8 uppercase text-xl">
                        <Link className={pathname === "/" ? "border-b-2 border-gold-3" : ""} onClick={() => setIsNavOpen(false)} href="/">Home</Link>
                    </li>
                    <li className="my-8 uppercase text-xl">
                        <Link className={pathname === "/resume" ? "border-b-2 border-gold-3" : ""} onClick={() => setIsNavOpen(false)} href="/resume">Resume</Link>
                    </li>
                    {/* <li className="my-8 uppercase text-xl">
                        <Link className={pathname === "/samples" ? "border-b-2 border-gold-3" : ""} onClick={() => setIsNavOpen(false)} href="/services">Samples</Link>
                    </li> */}
                    <li className="my-8 uppercase text-xl">
                        <Link className={pathname === "/contact" ? "border-b-2 border-gold-3" : ""} onClick={() => setIsNavOpen(false)} href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <nav className="text-2xl hidden lg:flex justify-evenly pr-3">
            <HextechLink className="before:-translate-x-1.5" isActive={pathname === "/"} title="Home" href="/"><HomeIcon /></HextechLink>
            <HextechLink className="before:-translate-x-1.5" isActive={pathname === "/resume"} title="Resume" href="/resume"><ResumeIcon /></HextechLink>
            {/* <HextechLink className="before:-translate-x-1.5" isActive={pathname === "/samples"} title="Samples" href="/samples"><SamplesIcon /></HextechLink> */}
            <HextechLink className="before:-translate-x-1.5" isActive={pathname === "/contact"} title="Contact" href="/contact"><ContactIcon /></HextechLink>
        </nav>
        <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
        `}</style>
    </header>
};

function HextechLink({ href, isActive, className, title, children }: React.PropsWithChildren<{ href: string, isActive: boolean, title: string, className?: string }>) {
    return <Link href={href} title={title}
        className={`${isActive ? "before:content-[url('/hextech-arrow.svg')] before:absolute before:-top-1 " + className : ""}
                    hover:bg-linear-to-t from-gold-2/[0.1] via-gold-1/[0.01] to-gold-1/[0.01] hover:text-gold-1 hover:fill-gold-1
                    px-5 py-8 fill-gold-2`}>
        {children}
    </Link>
}