'use client'

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Animation from "./Animation";
import Image from "next/image";
import offering1_illustration from "../../../public/images/illustrations/offering1.svg"
import offering2_illustration from "../../../public/images/illustrations/offering2.svg"
import offering3_illustration from "../../../public/images/illustrations/offering3.svg"
import WhileInView from "./WhileInView";

export default function Offerings() {
    return (
        <section id="offerings" className="bg-[#FC912F] px-5 pb-12 lg:flex mt-[-1px]">
            <div className="flex lg:w-[15vw] lg:mb-0 mb-8">
                <h2 className="sticky-title lg:sticky">Offerings</h2>
            </div>
            <div className="lg:w-[85vw]">
                <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0">
                    <h3 className="sm:mb-20 mb-10">Investing to the fullest.</h3>
                </WhileInView>

                <div className="lg:flex flex-row justify-between lg:mr-[5vw]">
                    <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2">
                        <div className="flex lg:block">
                            <div className="flex-auto lg:max-w-[23vw] lg:min-w-[14rem] sm:max-w-[26rem]">
                                <div className="flex items-end justify-between">
                                    <h5 className="mb-8 lh-120">Leading your first <br />round.</h5>
                                    <Image src={offering1_illustration} alt="Illustration" className="offering-image sm:hidden" />
                                </div>
                                <p className="mb-8 text-md">We back founder teams as their lead investor at angel, pre-seed, seed stage and even follow-on rounds.</p>
                            </div>
                            <Image src={offering1_illustration} alt="Illustration" className="offering-image sm:block hidden" />
                        </div>
                    </WhileInView>
                    <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.4">
                        <div className="flex lg:block">
                            <div className="flex-auto lg:max-w-[23vw] lg:min-w-[14rem] sm:max-w-[26rem]">
                                <div className="flex items-end justify-between">
                                    <h5 className="mb-8 lh-120">Experience, empathy and expert support.</h5>
                                    <Image src={offering2_illustration} alt="Illustration" className="offering-image sm:hidden" />
                                </div>
                                <p className="mb-8 text-md">Take the next step with those who&apos;ve been in your shoes. From strategic to operational, we&apos;re there for all your questions.</p>
                            </div>
                            <Image src={offering2_illustration} alt="Illustration" className="offering-image sm:block hidden" />
                        </div>
                    </WhileInView>
                    <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.6">
                        <div className="flex lg:block">
                            <div className="flex-auto lg:max-w-[23vw] lg:min-w-[14rem] sm:max-w-[26rem]">
                                <div className="flex items-end justify-between">
                                    <h5 className="mb-8 lh-120">An entire network invested in your success.</h5>
                                    <Image src={offering3_illustration} alt="Illustration" className="offering-image sm:hidden sm:max-w-none sm:max-h-none max-w-[150px] max-h-[150px]" />
                                </div>
                                <p className="mb-8 text-md">Join our community of top entrepreneurs, committed to supporting the next generation of founders.</p>
                            </div>
                            <Image src={offering3_illustration} alt="Illustration" className="offering-image sm:block hidden sm:max-w-none sm:max-h-none max-w-[150px] max-h-[150px]" />
                        </div>
                    </WhileInView>
                </div>
            </div>
        </section>
    );
}