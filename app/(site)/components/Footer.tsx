'use client'

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Animation from "./Animation";
import Image from "next/image";
import founderful from '../../../public/images/founderful.svg';
import favicon from "../../../public/images/icons/favicon.svg"

export default function Footer() {
    return (
        <footer className="bg-[#F1F1F1] px-5 py-9">
            <div className="lg:flex justify-between">
                <Image src={favicon} alt="Logo" className="h-fit md:w-auto w-1/4 lg:mb-0 md:mb-16 mb-10 lg:mr-10" />

                <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-4 gap-8 mb-32">
                    <div className="flex flex-col w-fit">
                        <Link href={"/founderful-family"} className="nav-link mb-1">Founderful Family</Link>
                        <Link href={"/about"} className="nav-link mb-1">Who we do</Link>
                        <Link href={"/team"} className="nav-link">Meet the team</Link>
                    </div>
                    <div className="flex flex-col w-fit">
                        <Link href={"/campus"} className="nav-link mb-1">Founderful Campus</Link>
                        <Link href={"/jobs#top"} className="nav-link mb-1">Join us</Link>
                        <Link href={"/blog"} className="nav-link">What&apos;s new</Link>
                    </div>
                    <div className="flex flex-col w-fit">
                        <Link href={""} className="nav-link mb-1">FAQs</Link>
                        <Link href={""} className="nav-link mb-1">Contact Us</Link>
                        <Link href={""} className="nav-link">Privacy Policy</Link>
                    </div>
                    <div className="flex flex-col w-fit">
                        <Link href={""} className="nav-link mb-1">LinkedIn</Link>
                        <Link href={""} className="nav-link mb-1">Crunchbase</Link>
                        <Link href={""} className="nav-link">Twitter</Link>
                    </div>
                    <div className="flex flex-col md:mt-0 mt-10">
                        <strong className="mb-3">Zurich</strong>
                        <small>Badenerstrasse 60</small>
                        <small>8004 Zurich</small>
                        <small>Switzerland</small>
                    </div>
                    <div className="flex flex-col md:mt-0 mt-10">
                        <strong className="mb-3">Lausanne</strong>
                        <small>La Forge</small>
                        <small>Fondation EPFL Innovation Park</small>
                        <small>1015 Lausanne</small>
                        <small>Switzerland</small>
                    </div>
                    <div className="flex flex-col">
                        <strong className="mb-3">Luxembourg</strong>
                        <small>5 Avenue Gaston Diderich</small>
                        <small>1420 Luxembourg</small>
                        <small>Luxembourg</small>
                    </div>
                </div>
            </div>
            <Image src={founderful} alt="Founderful" className="mb-10 w-auto" />
        </footer>
    );
}