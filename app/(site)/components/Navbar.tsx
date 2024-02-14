'use client'

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/images/logo.svg';
import Animation from "./Animation";
import { cubicBezier } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();

    const toggleMenu = () => {
        // if (!isOpen) {
        //     document.body.classList.add('no-scroll');
        // } else {
        //     document.body.classList.remove('no-scroll');
        // }
        setIsOpen(!isOpen);
    };

    const controls = useAnimation();

    // Animation variants for the hamburger lines
    const lineVariants = {
        closed: { rotate: 0, y: 0 },
        open: (custom: any) => ({ rotate: custom ? 45 : -45, y: custom ? -3 : 5 }),
    };

    // Handle click event to toggle the menu
    const handleClick = () => {
        toggleMenu();
        controls.start(isOpen ? 'closed' : 'open');
    };

    const menuVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: '100%' },
    };

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        const logo = document.getElementById('logo-animate');

        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 0) {
                navbar?.classList.add('sticky');
                logo?.classList.add('hidden');
            } else {
                navbar?.classList.add('sticky');
            }
        };

        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);
        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.div id="navbar" className="z-30 top-0 bg-[#F1F1F1] flex items-center
            lg:[--navbar-animate-height:5.2em] md:[--navbar-animate-height:3.6em] [--navbar-animate-height:3em]"
            style={{ height: "var(--navbar-animate-height)" }}>

            <div className="logo
                lg:[--logo-animate-width:22%] md:[--logo-animate-width:30%] [--logo-animate-width:22%]"
                style={{ zIndex: '30', width: "var(--logo-animate-width)"}}>
                <Link href="../"><Image src={logo} alt="Logo" /></Link>
            </div>

            <motion.div className="nav"
                style={{ right: 0, top: '0.55em', position: 'absolute' }}
                initial={{ translateY: 0 }}
                // animate={controls}
                transition={{ bounce: 0, delay: 1 }}>
                <div className="flex justify-end flex-row mr-20">
                    <Animation animChild="initial-slide-y-minus-5 slide-y-0 delay-0.1">
                        <div className="flex flex-col mr-20 transition-opacity">
                            <Link href={"/founderful-family"} className={path == "/founderful-family" ? "nav-link mb-1 active" : "nav-link mb-1"} scroll={true}>Founderful Family</Link>
                            <Link href={"/about"} className={path == "/about" ? "nav-link active" : "nav-link"} scroll={true}>What we do</Link>
                        </div>
                    </Animation>
                    <Animation animChild="initial-slide-y-minus-5 slide-y-0 delay-0.2">
                        <div className="flex flex-col  mr-20 transition-opacity">
                            <Link href={"/team"} className={path == "/team" ? "nav-link mb-1 active" : "nav-link mb-1"} scroll={true}>Meet the team</Link>
                            <Link href={"/campus"} className={path == "/campus" ? "nav-link active" : "nav-link"} scroll={true}>Founderful Campus</Link>
                        </div>
                    </Animation>
                    <Animation animChild="initial-slide-y-minus-5 slide-y-0 delay-0.3">
                        <div className="flex flex-col transition-opacity">
                            <Link href={"/jobs#top"} className={path == "/jobs" || path == "/companies" ? "nav-link mb-1 active" : "nav-link mb-1"} scroll={true}>Join us</Link>
                            <Link href={"/blog"} className={path == "/blog" ? "nav-link active" : "nav-link"} scroll={true}>What&apos;s new</Link>
                        </div>
                    </Animation>
                </div>
            </motion.div>
            <motion.button className="menu-button
            lg:[--menu-initial-opacity:0] md:[--menu-initial-opacity:1] [--menu-initial-opacity:1]
            lg:[--menu-animate-opacity:1] md:[--menu-animate-opacity:1] [--menu-animate-opacity:1]"
                onClick={handleClick}
                initial={{ opacity: 'var(--menu-initial-opacity)' }}
                animate={{ opacity: 'var(--menu-animate-opacity)' }}
                transition={{ delay: 2 }}>
                <motion.div
                    className="line"
                    variants={lineVariants}
                    animate={controls}
                    custom={0}
                />
                <motion.div
                    className="line"
                    variants={lineVariants}
                    animate={controls}
                    custom={1}
                />
            </motion.button>
            <motion.div
                className="full-screen-menu bg-[#F7F14E] top-0 w-screen h-full fixed z-20 flex items-end"
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                variants={menuVariants}
                transition={{ ease: [0.33, 1, 0.68, 1] }}
            >
                <ul className="ml-5">
                    {/* <li><Link href={"/"} className="menu-link">Homepage</Link></li> */}
                    <li><Link href={"/founderful-family"} className="menu-link" scroll={true}>Founderful Family</Link></li>
                    <li><Link href={"/about"} className="menu-link" scroll={true}>What we do</Link></li>
                    <li><Link href={"/team"} className="menu-link" scroll={true}>Meet the team</Link></li>
                    <li><Link href={"/campus"} className="menu-link" scroll={true}>Founderful Campus</Link></li>
                    <li><Link href={"/jobs#top"} className="menu-link" scroll={true}>Join us</Link></li>
                    <li><Link href={"/blog"} className="menu-link" scroll={true}>What&apos;s new</Link></li>
                </ul>
            </motion.div>

        </motion.div>
    )
}