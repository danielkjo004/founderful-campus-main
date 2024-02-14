'use client'

import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, useScroll } from "framer-motion";
import { ReactNode } from "react";

interface AnimationProps {
    children: ReactNode;
    animChild: string;
    className?: string;
}

export default function WhileInView({ children, animChild, className }: AnimationProps) {
    const [initialSlideValue, slideValue, delayValue] = animChild.split(' ');

    const [ref, inView] = useInView({
        triggerOnce: true, // This ensures the animation only triggers once when entering the viewport
        threshold: 0.2, // Adjust the threshold as needed
    });

    const variants = {
        hidden: {
            opacity: 0,
            y: initialSlideValue.includes('slide-y') ?
                (initialSlideValue.includes('minus') ? -parseFloat(initialSlideValue.split('-')[4]) : parseFloat(initialSlideValue.split('-')[3]))
                : 0,
            x: initialSlideValue.includes('slide-x') ?
                (initialSlideValue.includes('minus') ? -parseFloat(initialSlideValue.split('-')[4]) : parseFloat(initialSlideValue.split('-')[3]))
                : 0,
        },
        visible: {
            opacity: 1,
            y: slideValue.includes('slide-y') ?
                (slideValue.includes('minus') ? -parseFloat(slideValue.split('-')[3]) : parseFloat(slideValue.split('-')[2]))
                : 0,
            x: slideValue.includes('slide-x') ?
                (slideValue.includes('minus') ? -parseFloat(slideValue.split('-')[3]) : parseFloat(slideValue.split('-')[2]))
                : 0,
            transition: {
                delay: parseFloat(delayValue.split('-')[1]),
                ease: [0, 0.55, 0.45, 1],
                bounce: 0,
                duration: 0.6,
            },
        },
    };

    return (
        <motion.div initial="hidden" whileInView={"visible"} variants={variants} viewport={{ once: true }} ref={ref} className={className}>
            {children}
        </motion.div>
    );
}