'use client'

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo_icon from '@/public/images/logo-icon.svg';
import logo_text from '@/public/images/logo-text.svg';
import campus from '@/public/campus.svg'
import Animation from "../../components/Animation";
import { cubicBezier } from "framer-motion";
import { useIsScrolled } from "../../components/IsScrolled"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();
    const isScrolled = useIsScrolled();

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
                navbar?.classList.add('fixed');
                logo?.classList.add('hidden');
            } else {
                navbar?.classList.add('fixed');
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
        <motion.div id="navbar" className={`z-50 top-0 flex items-center fixed transition-all ease-in-out duration-700 w-screen
        lg:[--navbar-animate-height:5.2em] md:[--navbar-animate-height:3.6em] [--navbar-animate-height:3em] 
        ${isScrolled ? 'bg-[#fff] ' : 'bg-none fixed h-0'}
      `}
            style={{ height: "var(--navbar-animate-height)" }}>

            <div className={`logo fixed transition-all ease-in-out duration-700
                lg:[--logo-animate-width:22%] md:[--logo-animate-width:30%] [--logo-animate-width:22%]
                ${isScrolled && window.innerWidth > 1024 ? 'translate-x-5' : ''}`}
                style={{ zIndex: '30', width: "var(--logo-animate-width)" }}>
                <Link href="../" className="flex m-0">
                    <Image src={logo_icon} alt={"logo-icon"} height={30}></Image>
                    <Image src={path == "/" ? (isScrolled ? campus : logo_text) : campus} height={path == "/" ? (isScrolled ? 40 : 30) : 40} alt="Logo" className={`pl-0   ${isScrolled ? 'pt-1' : 'ml-2'} `} />
                </Link>
            </div>

            <motion.div className="nav ${}"
                style={{ right: 0, top: '0.55em', position: 'absolute' }}
                initial={{ translateY: 0 }}
                // animate={controls}
                transition={{ bounce: 0, delay: 1 }}>
                <div className={`flex  justify-end relative flex-row mt-[3%] mr-10 ${isScrolled ? '-translate-x-4' : ''} transition-all ease-in-out duration-700 `} >
                    <Animation animChild="initial-slide-y-minus-5 slide-y-0 delay-0.1">
                        <div className={`flex flex-col transition-all ease-in-out duration-700 mr-10 `}>
                            <Link href={"/tech"} className={path == "/tech" ? "nav-link mb-1 active" : "nav-link mb-1"} scroll={true}>Enter our tech ecosystem</Link>
                        </div>
                    </Animation>
                    <Animation animChild="initial-slide-y-minus-5 slide-y-0 delay-0.2 ">
                        <div className={`flex flex-col transition-all ease-in-out duration-700 mr-10 `}>
                            <Link href={"/vcacademy"} className={path == "/vcacademy" ? "nav-link mb-1 active" : "nav-link mb-1"} scroll={true}>Join our VC Academy</Link>
                        </div>
                    </Animation>
                    <Animation animChild="initial-slide-y-minus-5 slide-y-0 delay-0.3">
                        <div className={`flex flex-col transition-all ease-in-out duration-700`}>
                            <Link href={"/startups"} className={path == "/startups" || path == "/startups" ? "nav-link mb-1 active" : "nav-link mb-1"} scroll={true}>Launch your startup</Link>
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
                className="full-screen-menu bg-[#def74e] top-0 w-screen h-full fixed z-20 flex items-end"
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                variants={menuVariants}
                transition={{ ease: [0.33, 1, 0.68, 1] }}
            >
                <ul className="ml-5 w-full mr-5">
                    {/* <li><Link href={"/"} className="menu-link">Homepage</Link></li> */}
                    <li className="menu-link"><Link href={"/tech"} scroll={true}>Enter out tech ecosystem</Link></li>
                    <li className="menu-link"><Link href={"/vcacademy"} scroll={true}>Join our VC Academy</Link></li>
                    <li className="menu-link"><Link href={"/startups"} scroll={true}>Launch your startup</Link></li>
                </ul>
            </motion.div>

        </motion.div>
    )
}