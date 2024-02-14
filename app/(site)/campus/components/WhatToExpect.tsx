import Image from "next/image";
import WhileInView from '../../components/WhileInView';
import techhead from "public/images/icons/techhead.svg";
import graduation_hat from "public/images/icons/graduation-hat.svg";
import rocketship from "public/images/icons/rocketship.svg";
import Link from "next/link";
import ArrowRight from "public/images/icons/arrow-right.svg";


export default function WhatToExpect() {
    return (

        <div className="px-5 pt-24 lg:flex lg:pb-10 pb-20 z-10">
            <div className="flex lg:w-[15vw] lg:mb-0 mb-20">
                <h3 className="sticky-title lg:sticky text-[#000]">What we do</h3>
            </div>

            <div className="lg:w-[85vw] sm:flex flex-col lg:pb-20">
                <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className="flex flex-row w-auto h-fit">
                    <h4 className="sm:text-5xl lg:mb-20 mb-10 lg:ml-8">Here&apos;s what to <span className="handwritten text-xl align-[-4px]">EXPECT</span></h4>
                </WhileInView>


                <div className="sm:grid grid-rows-1 grid-cols-3 xl:gap-16 sm:gap-4 gap-8 lg:mb-0 md:mb-0 mb-14 xl:mr-20 lg:ml-4">
                    <WhileInView animChild="initial-slide-y-115 slide-y-0 delay-0.2" className="card bg-[#F7F14E] mb-5 sm:min-h-[38rem] xl:min-h-[32rem] 2xl:min-h-fit flex flex-col justify-between">
                        <div>
                            <Image src={techhead} alt={"Techhead"} width={120} height={121} className="w-20 mb-5"></Image>
                            <h4 className="mb-5">Enter our tech<br /> ecosystem.</h4>
                            <p className="mb-8 lg:max-w-[15em]">Work with experienced founders and investors, and secure your first opportunities within the tech industry, while still at university.</p>
                        </div>
                        <Link href="/" className="link button-outline w-fit gap-4">
                            <span className="lg:text-lg text-md">Let&apos;s go</span>
                            <Image src={ArrowRight} alt={"Arrow Right"} width={23}></Image>
                        </Link>
                    </WhileInView>

                    <WhileInView animChild="initial-slide-y-115 slide-y-0 delay-0.4" className="card bg-[#FC912F] mb-5 sm:min-h-[38rem] xl:min-h-[32rem] 2xl:min-h-fit flex flex-col justify-between">
                        <div>
                            <Image src={graduation_hat} alt={"graduation_hat"} width={120} height={121} className="w-20 mb-5"></Image>
                            <h4 className="mb-5">Join our VC<br /> academy.</h4>
                            <p className="mb-8 lg:max-w-[15em]">Learn the ropes of venture capital by receiving CHF25K to invest in student startups, as well as two semesters of hands-on training.</p>
                        </div>
                        <Link href="/" className="link button-outline w-fit gap-4">
                            <span className="lg:text-lg text-md">Let&apos;s go</span>
                            <Image src={ArrowRight} alt={"Arrow Right"} width={23}></Image>
                        </Link>
                    </WhileInView>

                    <WhileInView animChild="initial-slide-y-115 slide-y-0 delay-0.6" className="card bg-[#4583F5] mb-5 sm:min-h-[38rem] xl:min-h-[32rem] 2xl:min-h-fit flex flex-col justify-between">
                        <div>
                            <Image src={rocketship} alt={"rocketship"} width={120} height={121} className="w-20 mb-5"></Image>
                            <h4 className="mb-5">Launch your<br /> startup.</h4>
                            <p className="mb-8 lg:max-w-[15em]">Receive expert support and CHF25k to help cover initial business costs and give your startup the best platform.</p>
                        </div>
                        <Link href="/" className="link button-outline w-fit gap-4">
                            <span className="lg:text-lg text-md">Let&apos;s go</span>
                            <Image src={ArrowRight} alt={"Arrow Right"} width={23}></Image>
                        </Link>
                    </WhileInView>
                </div>
            </div>
        </div>

    );
}