'use client'

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Animation from "./Animation";
import Link from "next/link";
import { ArrowRight } from "./Icons";
import founder_1 from "../../../public/images/founders/founder-1.jpg";
import founder_2 from "../../../public/images/founders/founder-2.jpg";
import founder_3 from "../../../public/images/founders/founder-3.jpg";
import founder_4 from "../../../public/images/founders/founder-4.jpg";
import founder_5 from "../../../public/images/founders/founder-5.jpg";
import founder_6 from "../../../public/images/founders/founder-6.jpg";

export default function Header() {
    const controls = useAnimation();
    const controlsCard = useAnimation();

    const [ref, inView] = useInView({
        triggerOnce: true, // This ensures the animation only triggers once when entering the viewport
        threshold: 0.2, // Adjust the threshold as needed
    });

    // const [scrollY, setScrollY] = useState(0);
    // // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     // const handleScroll = () => {
    //     //     const scrollY = window.scrollY;
    //     //     const mobile = window.outerWidth < 768 ? true : false;

    //     //     // Define the scroll threshold at which you want to trigger the animation
    //     //     const scrollThreshold = 120;

    //     //     if (scrollY > 0) {
    //     //         // Trigger the animation when the scroll position crosses the threshold
    //     //         if (removeFixed && scrollY > scrollThreshold) {
    //     //             controls.start({
    //     //                 position: 'absolute'
    //     //             });
    //     //         } else {
    //     //             controls.start({
    //     //                 top: mobile ? '12vh' : '16vh',
    //     //             });

    //     //             removeFixed.current = true;
    //     //         }

    //     //         controlsCard.start({
    //     //             opacity: 1,
    //     //             bottom: 0
    //     //         });
    //     //     }
    //     //     else
    //     //     {
    //     //         // Reset the animation when scrolling back up
    //     //         controls.start({
    //     //             top: '50vh',
    //     //             position: 'sticky',
    //     //         });

    //     //         controlsCard.start({
    //     //             opacity: 0,
    //     //             bottom: '-50vh'
    //     //         });

    //     //         removeFixed.current = false;
    //     //     }

    //     //     // if (scrollY > scrollThreshold) {
    //     //     //     controls.start({
    //     //     //         translateY: -scrollY,
    //     //     //         position: 'absolute'
    //     //     //     });
    //     //     // } else {
    //     //     //     controls.start({
    //     //     //         translateY: 0,
    //     //     //         position: 'fixed'
    //     //     //     });
    //     //     // }
    //     // };

    //     const handleScroll = () => {
    //         setScrollY(window.scrollY);
    //     };

    //     // Attach the scroll event listener
    //     window.addEventListener("scroll", handleScroll);

    //     // Clean up the event listener on unmount
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, [controls, controlsCard]);

    return (
        <div className="header z-10"
            style={{ position: "relative", marginTop: "0" }}>
            <div className="flex">
                <Animation animChild="initial-slide-y-250 slide-y-0 delay-0.2">
                    <div className="landing-image" style={{ backgroundImage: `url(${founder_1.src})` }}></div>
                </Animation>
                <Animation animChild="initial-slide-y-250 slide-y-0 delay-0.3">
                    <div className="landing-image" style={{ backgroundImage: `url(${founder_2.src})` }}></div>
                </Animation>
                <Animation animChild="initial-slide-y-250 slide-y-0 delay-0.4">
                    <div className="landing-image" style={{ backgroundImage: `url(${founder_3.src})` }}></div>
                </Animation>
                <Animation animChild="initial-slide-y-250 slide-y-0 delay-0.5">
                    <div className="landing-image hidden sm:block" style={{ backgroundImage: `url(${founder_4.src})` }}></div>
                </Animation>
                <Animation animChild="initial-slide-y-250 slide-y-0 delay-0.6">
                    <div className="landing-image hidden sm:block" style={{ backgroundImage: `url(${founder_5.src})` }}></div>
                </Animation>
                <Animation animChild="initial-slide-y-250 slide-y-0 delay-0.7">
                    <div className="landing-image hidden xl:block" style={{ backgroundImage: `url(${founder_6.src})` }}></div>
                </Animation>
            </div>
            <motion.div className="card
            lg:[--card-initial-opacity:0] md:[--card-initial-opacity:1] [--card-initial-opacity:1]
            lg:[--card-animate-opacity:1] md:[--card-animate-opacity:1] [--card-animate-opacity:1]
            lg:[--card-initial-y:50vh] md:[--card-initial-y:0] [--card-initial-y:0]"
                style={{ y: 'var(--card-initial-y)'}}
                initial={{ opacity: "var(--card-initial-opacity)"}}
                animate={{
                    opacity: "var(--card-animate-opacity)",
                    y: 0,
                }}
                transition={{ bounce: 0, delay: 1.2, ease: [0, 0.55, 0.45, 1], duration: 0.6 }}>
                <div>
                    <h2 className="mb-5 md:lh-100 sm:text-6xl text-4xl">First. Fast. And <br /> founder-friendly.</h2>
                    <p className="lh-124 mb-5 md:pr-28 sm:pr-48">We&apos;re joining forces with Switzerland&apos;s finest founders, helping them start, scale and sell market-leading companies.</p>
                    <Link href="about" className="link">Who we are<ArrowRight color="#000000" /></Link>
                </div>
            </motion.div>
        </div>
    );
}