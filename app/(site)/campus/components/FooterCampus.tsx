'use client'

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Animation from "../../components/Animation";
import Image from "next/image";
import founderfulCampus from '../../../../public/images/founderfulCampus.svg';
import favicon from "../../../../public/images/icons/favicon.svg"

export default function FooterCampus() {
    return (
        <footer className="bg-[#fff] w-screen px-5 py-9">

            <div className="grid grid-rows-1 grid-cols-2 lg:grid-cols-5 lg:gap-16 gap-3 lg:mb-32 mb-12">
                <div className="col-span-2 lg:mb-0 mb-5">
                    <p className="lg:text-lg text-xl lg:mb-0 mb-5 sm:max-w-none max-w-[12em]">
                        Founderful Campus Association
                        <br />Badenerstrasse 60, 8004 Zürich<br />
                    </p>
                    <small>Founderful Campus is a non-profit association established by Founderful.</small>
                </div>
                <div className="grid h-fit">
                    <Link href={"#1"} className="nav-link "> Become a tech leader</Link>
                    <Link href={"#2"} className="nav-link lg:hidden">Join our VC Academy</Link>
                    <Link href={"#3"} className="nav-link lg:hidden">Launch your startup</Link>
                </div>
                <div className="grid h-fit">
                    <Link href={"#4"} className="nav-link lg:mb-5 lg:block hidden">Join our VC Academy</Link>
                    <Link href={"#5"} className="nav-link">Privacy policy</Link>
                    <Link href={"#6"} className="nav-link lg:hidden">LinkedIn</Link>
                </div>
                <div className="lg:grid h-fit hidden">
                    <Link href={"#7"} className="nav-link lg:mb-5">Launch your startup</Link>
                    <Link href={"#8"} className="nav-link">LinkedIn</Link>
                </div>
            </div>

            <div className="flex flex-row h-fit">
                <Image src={founderfulCampus} alt="Founderful" className=" w-1/10" />
            </div>
        </footer >
    );
}