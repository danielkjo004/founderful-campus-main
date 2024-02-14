'use client'

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { animate } from "framer-motion";
import WhileInView from "./WhileInView";
import Image from "next/image";
import about_illustration from "../../../public/images/illustrations/about.svg"
import { useInView } from "react-intersection-observer";

interface CounterProps {
    from: number;
    to: number;
}

function Counter({ from, to }: CounterProps) {
    const nodeRef = useRef<HTMLParagraphElement | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(node);

        return () => {
            observer.unobserve(node);
        };
    }, []);

    useEffect(() => {
        if (!isInView) return;

        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(from, to, {
            duration: 1,
            onUpdate(value) {
                node.textContent = Math.round(value).toString();
            },
        });

        return () => controls.stop();
    }, [from, to, isInView]);

    return <span ref={nodeRef} />;
};


export default function About() {
    return (
        <section id="about" className="bg-[#FC912F] px-5 py-12 lg:flex lg:pb-32 pb-20 z-10">
            <div className="flex lg:w-[15vw] lg:mb-0 mb-5">
                <h2 className="sticky-title lg:sticky">About us</h2>
            </div>
            <div className="lg:w-[85vw] sm:flex">
                <div className="flex flex-col 2xl:w-[28vw] lg:w-[26rem] sm:w-[24rem] justify-between lg:mb-0 sm:mb-0 mb-14">
                    <div className="order-none sm:order-last sm:mb-0 mb-5 sm:mt-10">
                    <WhileInView animChild="initial-slide-y-minus-15 slide-y-0 delay-0.1">
                    <Image src={about_illustration} alt="Illustration" />
                    </WhileInView>
                    </div>
                    <WhileInView animChild="initial-slide-y-minus-15 slide-y-0 delay-0">
                    <p>Welcome to Founderful, make yourself at home. First up, some introductions. We&apos;re a venture fund based in Switzerland. We&apos;ve been founders ourselves, and our experiences shape the way we invest. We lead with an understanding of founders, offering companionship and support as the first institutional investor.</p>
                    </WhileInView>
                </div>
                <div className="flex flex-col lg:ml-[6vw] sm:ml-5 ml-0">
                    <WhileInView animChild="initial-slide-y-50 slide-y-0 delay-0.01">
                        <h1 className="numbers mb-5 xl:flex sm:block flex">
                            00<Counter from={0} to={57}></Counter>
                            <p>Startups</p>
                        </h1>
                    </WhileInView>
                    <WhileInView animChild="initial-slide-y-50 slide-y-0 delay-0.02">
                        <h1 className="numbers mb-5 xl:flex sm:block flex">
                            000<Counter from={0} to={9}></Counter>
                            <p>Partners</p>
                        </h1>
                    </WhileInView>
                    <WhileInView animChild="initial-slide-y-50 slide-y-0 delay-0.03">
                        <h1 className="numbers xl:flex sm:block flex">
                            0<Counter from={0} to={231}></Counter>
                            <p>Founders</p>
                        </h1>
                    </WhileInView>
                </div>
            </div>
        </section>
    );
}