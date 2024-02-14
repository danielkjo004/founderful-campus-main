'use client'

import { useRef, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/images/logo.svg';
import { delay, motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import Animation from "./Animation";

export default function Logo() {
    const removeFixed = useRef(false);
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
        const navbar = document.getElementById('logo-navbar');
        const logoAnimate = document.getElementById('logo-animate');
        const logo = document.getElementById('logo');

        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 0) {
                navbar?.classList.add('sticky');
                logoAnimate?.classList.add('hidden');
                logo?.classList.remove('hidden');
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

    // useEffect(() => {

    //     const handleScroll = () => {
    //         const scrollY = window.scrollY;

    //         if (scrollY > 0) {
    //             logo?.classList.add('hidden');
    //         }
    //     };

    //     // Attach the scroll event listener
    //     window.addEventListener("scroll", handleScroll);

    //     // Clean up the event listener on unmount
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <>
        <motion.div id="logo-navbar" className="z-30 top-0 bg-[#F1F1F1] flex items-center
            lg:[--navbar-animate-height:5.2em] md:[--navbar-animate-height:3.6em] [--navbar-animate-height:3em]"
            style={{ height: "var(--navbar-animate-height)" }}>

            <div id="logo" className="logo hidden
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
        <motion.div className="z-20 bg-[#F1F1F1] items-center flex
            2xl:[--navbar-initial-height:270px] lg:[--navbar-initial-height:240px] md:[--navbar-initial-height:0px] [--navbar-initial-height:0px]
            2xl:[--navbar-animate-height:0px] lg:[--navbar-animate-height:0px] md:[--navbar-animate-height:0px] [--navbar-animate-height:0px]"
            initial={{ height: "var(--navbar-initial-height)" }}
            animate={{ height: "var(--navbar-animate-height)" }}
            viewport={{ once: true }}
            transition={{ bounce: 0, delay: 1.2, ease: [0, 0.55, 0.45, 1], duration: 0.6 }}>

            <motion.div id="logo-animate" className="logo animate flex items-center
                    lg:[--logo-initial-top:100px] md:[--logo-initial-top:0px] [--logo-initial-top:0px]
                    lg:[--logo-animate-top:0px] md:[--logo-animate-top:0px] [--logo-animate-top:0px]
                    lg:[--logo-initial-width:98%] md:[--logo-initial-width:30%] [--logo-initial-width:22%]
                    lg:[--logo-animate-width:22%] md:[--logo-animate-width:30%] [--logo-animate-width:22%]
                    lg:[--logo-initial-height:12em] md:[--logo-initial-height:3.6em] [--logo-initial-height:3em]
                    lg:[--logo-animate-height:5.2em] md:[--logo-animate-height:3.6em] [--logo-animate-height:3em]"
                    style={{ zIndex: '30' }}
                    initial={{ top: "var(--logo-initial-top)", width: "var(--logo-initial-width)", height: "var(--logo-initial-height)" }}
                    animate={{ top: "var(--logo-animate-top)", width: "var(--logo-animate-width)", height: "var(--logo-animate-height)" }}
                    viewport={{ once: true }}
                    transition={{ bounce: 0, delay: 1.2, ease: [0, 0.55, 0.45, 1], duration: 0.6 }}>
                    <Image src={logo} alt="Logo" className="w-auto" />
            </motion.div>
        </motion.div>
        </>
    );
};