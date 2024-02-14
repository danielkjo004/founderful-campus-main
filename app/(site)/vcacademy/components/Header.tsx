'use client'

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import campus_header_3 from "@/public/images/illustrations/vcacademy-header-3.jpg";
import campus_header_3_mobile from "@/public/images/illustrations/vcacademy-header-3-mobile.jpg";
import campus_header_2 from "@/public/images/illustrations/vcacademy-header-2.jpg";
import campus_header_1_mobile from "@/public/images/illustrations/vcacademy-header-1-mobile.jpg";
import campus_header_1 from "@/public/images/illustrations/vcacademy-header-1.jpg";
import Parallax from "../../components/Parallax";
import { ArrowRight } from "../../components/Icons";

export default function Header() {
    return (
        <motion.div
            className="lg:flex lg:flex-row px-5 bg-[#FC912F] flex-col justify-between xl:order-last order-first w-screen h-fit xl:h-fit relative z-20">
            <div className="flex-col lg:mt-0 lg:px-0 ml-0 w-full h-fit">
                <motion.div initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: .0, ease: [0, .5, .5, 1], duration: 1 }}
                    className="max-w-[40%] xl:left-[25%] xl:top-16 lg:top-[8rem] left-20 top-36 absolute lg:block hidden">
                    <Parallax offsetMultiplier={0.1} className="header-image">
                        <Image src={campus_header_1} alt="campus picture" width={260} className=""></Image>
                    </Parallax>
                </motion.div>

                <motion.div initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: .0, ease: [0, .5, .5, 1], duration: 1 }}
                    className="max-w-[60%] xl:left-10 xl:top-36 lg:top-[28rem] left-5 top-24 absolute block lg:hidden z-10">
                    <Parallax offsetMultiplier={0.1} className="max-w-[60%] md:max-w-[50%] sm:max-w-[40%]">
                        <Image src={campus_header_1_mobile} alt="campus picture" width={425} className=""></Image>
                    </Parallax>
                </motion.div>

                <motion.div initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: .3, ease: [0, .5, .5, 1], duration: 1 }}
                    className="max-w-[50%] xl:top-[39.5em] lg:top-[47rem] left-[48%] top-36 absolute lg:block hidden">
                    <Parallax offsetMultiplier={0.1} className="header-image">
                        <Image src={campus_header_2} alt="campus picture " width={220} className=""></Image>
                    </Parallax>
                </motion.div>

                <motion.div initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: .5, ease: [0, .5, .5, 1], duration: 1 }}
                    className="justify-end right-0 xl:top-80 lg:top-32 top-44 absolute flex lg:hidden">
                    <Parallax offsetMultiplier={0.1} className="max-w-[80%] md:max-w-[60%] sm:max-w-[65%]">
                        <Image src={campus_header_3_mobile} alt="campus picture" width={897} height={631} className=""></Image>
                    </Parallax>
                </motion.div>

                <motion.div initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: .5, ease: [0, .5, .5, 1], duration: 1 }}
                    className="justify-end right-7 xl:top-[20em] lg:top-60 top-20 absolute lg:flex hidden">
                    <Parallax offsetMultiplier={0.1} className="header-image">
                        <Image src={campus_header_3} alt="campus picture" width={420} height={701} className="h-full"></Image>
                    </Parallax>
                </motion.div>

                <Parallax offsetMultiplier={0.15}>
                    <motion.div initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: .7, ease: [0, .5, .5, 1], duration: 1 }}
                        className="flex flex-col">
                        <div className="flex w-full xl:h-[60vh] sm:h-[37em] h-[36em]">
                            <h1 className="lg:mb-10 mb-5 lg:text-9xl sm:text-6xl text-4xl w-full lg:mt-[-2.3em] flex items-end pb-0">Master the art<br /> of VC investing.</h1>
                        </div>
                        <div className="lg:max-w-[28em] sm:max-w-[22em] lg:ml-2">
                            <p className="lh-124 mb-10 xl:pr-28">Our VC Academy, supported by Founderful,
                                demystifies investing and cultivates future tech leaders from ETH Zürich, EPFL,
                                and the University of St. Gallen. In two semesters,
                                you&apos;ll gain in-depth VC knowledge while actively investing in university startups..</p>
                        </div>
                        <div>
                            <Link href="../campus" className="bg-black text-white link button-outline lg:w-fit w-full !px-5 !py-4 ml-2">
                                <span className="lg:text-lg text-md">Become a student investor</span>
                                <ArrowRight color={"#fff"} />
                            </Link>
                        </div>
                    </motion.div>
                </Parallax >

            </div >

        </motion.div >

    );
}