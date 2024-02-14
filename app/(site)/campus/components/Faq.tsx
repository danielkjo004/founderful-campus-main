import Image, { StaticImageData } from "next/image";
import WhileInView from '../../components/WhileInView';
import ArrowDown from "../../../../public/images/icons/ArrowDown.svg";
import Vector1 from "../../../../public/images/vectors/faq1-border.svg";
import Vector2 from "../../../../public/images/vectors/faq2-border.svg";
import Vector3 from "../../../../public/images/vectors/faq3-border.svg";
import Vector4 from "../../../../public/images/vectors/faq4-border.svg";

import Vector1_mobile from "../../../../public/images/vectors/faq1-border-mobile.svg";
import Vector2_mobile from "../../../../public/images/vectors/faq2-border-mobile.svg";
import Vector3_mobile from "../../../../public/images/vectors/faq3-border-mobile.svg";
import Vector4_mobile from "../../../../public/images/vectors/faq4-border-mobile.svg";
import Link from "next/link";
import { motion, cubicBezier } from 'framer-motion';
import { useEffect, useState } from "react";

interface FAQState {
    vectorImage: StaticImageData;
    vectorImageMobile: StaticImageData;
    question: string;
    answer: string;
    isParagraphVisible: boolean;
    isArrowRotated: boolean;
}

export default function Faq() {
    const bounceOutEasing = cubicBezier(0.175, 0.885, 0.32, 1.275);
    const initialFaqState: FAQState[] = [
        { vectorImage: Vector1, vectorImageMobile: Vector1_mobile, question: "What is Lorem Ipsum?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", isParagraphVisible: false, isArrowRotated: false },
        { vectorImage: Vector2, vectorImageMobile: Vector2_mobile, question: "How does it work?", answer: "It works by generating random text based on a set of rules...", isParagraphVisible: false, isArrowRotated: false },
        { vectorImage: Vector3, vectorImageMobile: Vector3_mobile, question: "Why use it?", answer: "Lorem Ipsum is widely used in the printing and typesetting industry...", isParagraphVisible: false, isArrowRotated: false },
        { vectorImage: Vector4, vectorImageMobile: Vector4_mobile, question: "Is it free?", answer: "Yes, Lorem Ipsum is free to use for any purpose...", isParagraphVisible: false, isArrowRotated: false },
    ];
    const [faqStates, setFaqStates] = useState(initialFaqState);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleTap = (index: any) => {
        setFaqStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = {
                ...newStates[index],
                isParagraphVisible: !prevStates[index].isParagraphVisible,
                isArrowRotated: !prevStates[index].isArrowRotated,
            };
            return newStates;
        });
    };

    return (
        <div className="bg-[#000] lg:pl-5 lg:flex-row flex-col text-[#fff] h-fit w-screen px-5 pt-36 lg:flex lg:pb-10 pb-20  relative ">
            <div className="flex lg:w-[15vw] lg:mb-0 mb-20 mr-10">
                <h3 className="sticky-title lg:sticky text-[#fff]">FAQ</h3>
            </div>
            <div className="grid w-[85vw]">
                {faqStates.map((faqState, index) => (
                    <div key={index} className="flex flex-col w-full">
                        <motion.div
                            onTap={() => handleTap(index)}
                            className="relative flex flex-row w-full justify-between items-center cursor-pointer py-10 lg:pr-10"
                        >
                            <h4 className="sm:text-4xl max-w-[80%] text-white">{faqState.question}</h4>
                            <div className="justify-end">
                                <motion.div
                                    animate={{ rotate: faqState.isArrowRotated ? 180 : 0 }}
                                    transition={{ duration: 0.3, bounceOutEasing }}
                                >
                                    <Image src={ArrowDown} alt={"ArrowDown"}></Image>
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: faqState.isParagraphVisible ? "auto" : 0, opacity: faqState.isParagraphVisible ? 1 : 0 }}
                            transition={{ duration: 0.3, delay: 0.1, bounceOutEasing }}
                            className="mb-10 lg:max-w-[35.5em] faq-content w-full"
                        >
                            {faqState.answer}
                        </motion.p>
                        <Image
                            src={faqState.vectorImageMobile}
                            alt={"vector"} className="w-full object-cover"
                        ></Image>
                    </div>
                ))}
            </div>
        </div>
    );
}