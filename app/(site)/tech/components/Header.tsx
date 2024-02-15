'use client'

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import campus_header_3 from "@/public/images/illustrations/ecosystem-header-picture-3.jpg";
import campus_header_3_mobile from "@/public/images/illustrations/ecosystem-header-picture-3-mobile.jpg";
import campus_header_2 from "@/public/images/illustrations/ecosystem-header-picture-2.jpg";
import campus_header_1_mobile from "@/public/images/illustrations/ecosystem-header-picture-1-mobile.jpg";
import campus_header_1 from "@/public/images/illustrations/ecosystem-header-picture-1.jpg";
import Parallax from "../../components/Parallax";

export default function Header() {
    return (
        <motion.div
            className="lg:flex lg:flex-row px-5 bg-[#F7F14E] flex-col justify-between xl:order-last order-first w-screen h-fit xl:h-fit relative -mb-1">
            <div className="flex-col lg:mt-0 lg:px-0 ml-0 w-full h-fit pb-10 mr-14">
                <motion.div initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: .0, ease: [0, .5, .5, 1], duration: 1 }}
                    className="max-w-[40%] xl:left-8 xl:top-28 lg:top-[8rem] left-20 top-36 absolute lg:block hidden">
                    <Parallax offsetMultiplier={0.1} className="header-image">
                        <Image src={campus_header_1} alt="campus picture" width={246} className=""></Image>
                    </Parallax>
                </motion.div>

                <motion.div initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: .0, ease: [0, .5, .5, 1], duration: 1 }}
                    className="max-w-[60%] left-1/3 top-24 absolute block lg:hidden z-10">
                    <Parallax offsetMultiplier={0.1} className="max-w-[60%] md:max-w-[50%] sm:max-w-[40%]">
                        <Image src={campus_header_1_mobile} alt="campus picture" width={475} className=""></Image>
                    </Parallax>
                </motion.div>

                <motion.div initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: .3, ease: [0, .5, .5, 1], duration: 1 }}
                    className="max-w-[50%] xl:top-[28rem] lg:top-[22rem] left-[50%] top-36 absolute lg:block hidden">
                    <Parallax offsetMultiplier={0.1} className="header-image">
                        <Image src={campus_header_2} alt="campus picture " height={186} className=""></Image>
                    </Parallax>
                </motion.div>

                <motion.div initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: .5, ease: [0, .5, .5, 1], duration: 1 }}
                    className="justify-end right-0 xl:top-80 lg:top-32 top-44 absolute flex lg:hidden">
                    <Parallax offsetMultiplier={0.1} className="max-w-[80%] md:max-w-[60%] sm:max-w-[65%]">
                        <Image src={campus_header_3_mobile} alt="campus picture" width={897} height={631} className=""></Image>
                    </Parallax>
                </motion.div>

                <motion.div initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: .5, ease: [0, .5, .5, 1], duration: 1 }}
                    className="justify-end right-7 xl:top-[21em] lg:top-60 top-20 absolute lg:flex hidden">
                    <Parallax offsetMultiplier={0} className="header-image">
                        <Image src={campus_header_3} alt="campus picture" height={531} className="h-full"></Image>
                    </Parallax>
                </motion.div>

                <Parallax offsetMultiplier={0.05}>
                    <motion.div initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: .7, ease: [0, .5, .5, 1], duration: 1 }}
                        className="flex flex-col">
                        <div className="flex w-full xl:h-[87vh] lg:h-[42em] sm:h-[37em] h-[36em]">
                            <h1 className="lg:mb-28 mb-0 lg:text-9xl pt-10 text-3xl w-full lg:flex items-end hidden leading-3">Get your<br />tech start.</h1>
                            <h1 className="mb-5 text-4xl w-full items-end flex lg:hidden">Become a<br />tech leader.</h1>
                        </div>
                        <div className="lg:max-w-[28em] sm:max-w-[22em] lg:ml-2">
                            <p className="lh-124 mb-10 xl:pr-28">Join a like-minded, tech-savvy community of top Swiss students.
                                From day one to graduation,
                                you&apos;ll learn from the leading startups and VCs,
                                gaining a competitive skillset for your first experience in the tech industry.</p>
                        </div>
                    </motion.div>
                </Parallax >

            </div >

        </motion.div >

    );
}