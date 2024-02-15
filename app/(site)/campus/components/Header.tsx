'use client'

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

import campus from '@/public/campus.svg';
import campus_header_3 from "../../../../public/images/illustrations/campus-3.jpg";
import campus_header_2 from "../../../../public/images/illustrations/campus-2.jpg";
import campus_header_1 from "../../../../public/images/illustrations/campus-1.jpg";
import Animation from '../../components/Animation';
import WhileInView from '../../components/WhileInView';
import Parallax from "../../components/Parallax";
import eth from "../../../../public/images/campus/eth.svg";
import epfl from "../../../../public/images/campus/epfl.svg";
import unisg from "../../../../public/images/campus/unisg.svg";
import vector from "../../../../public/images/vectors/yellow-separator.svg";

export default function Header() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0, ease: [0, 0.55, 0.45, 1], duration: 1 }}
            className="lg:flex lg:flex-row
             lg:pb-14 lg:pt-46 pt-[12rem] px-5 
             bg-[#F7F14E] flex-col justify-between xl:order-last order-first w-screen h-fit xl:h-fit relative">
            <div className="flex-col lg:mt-0 lg:px-0 ml-0 w-full h-fit">
                <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.5" className="flex w-full relative z-30 mb-32 xl:h-[5em] xl:mb-10 2xl:h-[40vh] ">
                    <Parallax offsetMultiplier={0.1} className="w-full mx-auto justify-center relative flex xl:mt-10 mt-[4.1rem] h-full items-center z-10">
                        <Image src={campus} alt="Logo" width={1267} className="logo-image" />
                    </Parallax>
                </WhileInView>

                <motion.div initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: .5, ease: [0, .5, .5, 1], duration: 1 }}
                    className=" xl:top-64 lg:left-20 lg:top-[28rem] left-20 top-96 absolute">
                    <Parallax offsetMultiplier={0.1} className="md:header-image !max-w-[35%]">
                        <Image src={campus_header_1} alt="campus picture" width={570} className=""></Image>
                    </Parallax>
                </motion.div>

                <motion.div initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: .7, ease: [0, .5, .5, 1], duration: 1 }}
                    className="xl:left-[35%] xl:top-5 lg:top-40 left-3 top-32 absolute">
                    <Parallax offsetMultiplier={0.1} className="md:header-image !max-w-[40%]">
                        <Image src={campus_header_2} alt="campus picture " width={570} className=""></Image>
                    </Parallax>
                </motion.div>

                <motion.div initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: .3, ease: [0, .5, .5, 1], duration: 1 }}
                    className="flex justify-end right-0 xl:top-48 lg:top-32 top-16 absolute ">
                    <Parallax offsetMultiplier={0.1} className="md:header-image !max-w-[55%]">
                        <Image src={campus_header_3} alt="campus picture" width={732} ></Image>
                    </Parallax>
                </motion.div>

                <Parallax offsetMultiplier={0.2}>
                    <div className="lg:ml-auto lg:mr-auto gap-16 relative m-auto align-bottom h-fit pb-16">
                        <div>
                            <div className="lg:flex flex-row h-fit">
                                <h3 className="mb-5 md:lh-100 lg:text-6xl sm:text-5xl text-4xl w-full pl-0">Supporting future <br /> founders and investors.</h3>
                                <div className="lg:max-w-[28em] sm:max-w-[22em]">
                                    <p className="lh-124 mb-10 xl:pr-28"> Every year, we join forces with a diverse range of university-based startups and
                                        students interested in investing. We aim to achieve three key goals: welcoming students to a network of founders and investors, unlocking tech opportunities,
                                        and providing essential support and funding as they take their first steps within the industry.</p>
                                    <div className="flex items-center justify-between lg:w-[85%] h-[20px] max-w-[25em]">
                                        <Image src={eth} alt={"eth"} height={25} className="partner-logo lg:mr-12 mr-10"></Image>
                                        <Image src={epfl} alt={"epfl"} height={29} className="partner-logo lg:mr-12 mr-10"></Image>
                                        <Image src={unisg} alt={"unisg"} height={39} className="partner-logo"></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>
                <Image src={vector} alt={"vector"} className="separator absolute -bottom-[30px] left-0 w-[100%] cover h-[68.5px] mt-20 z-20"></Image>
            </div>

        </motion.div>

    );
}