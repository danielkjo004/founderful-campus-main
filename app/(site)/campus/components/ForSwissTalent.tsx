import Image from "next/image";
import WhileInView from '../../components/WhileInView';
import logo_full from "@/public/images/logo-full.svg"
import family from "@/public/images/family.svg"
import { ArrowRight } from "../../components/Icons"
import Link from "next/link";
import vector from "../../../../public/images/vectors/grey-separator.svg";


export default function WhatToExpect() {
    return (

        <div className="bg-[#F1F1F1] lg:pl-5 pl-0 flex lg:flex-row flex-col text-[#000] h-fit w-screen px-5 pt-36 lg:flex lg:pb-10 pb-20 z-10 relative ">

            <div className="flex lg:w-[15vw] lg:ml-0 lg:mb-0 mb-0 mr-0 ml-5">

                <h3 className="sticky-title lg:sticky text-[#000]">For Swiss talent</h3>
            </div>
            <div className="bg-[#F1F1F1] lg:w-[85vw] lg:pl-8 flex lg:flex-row flex-col text-[#000] h-fit w-screen px-5 lg:flex lg:pb-10 pb-20 z-10  ">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="lg:min-w-max lg:max-h-[38em] flex flex-col justify-between">
                        <div>
                            <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className="mb-5 max-w-[25em]">
                                <Image src={logo_full} alt={"logo"} width={100} className=""></Image>
                            </WhileInView>
                            <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className="">
                                <h4 className="sm:text-5xl lg:mb-20 mb-10">Full student <span className="handwritten text-xl align-[-4px]">SUPPORT</span><br />
                                    from Founderful.</h4>
                            </WhileInView>
                        </div>
                        <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className="">
                            <p className="mb-8 lg:max-w-[20em]">We&apos;re a non-profit organisation set up by Founderful, the leading pre-seed VC fund in Switzerland. With their team of experienced entrepreneurs behind us, we&apos;re inspiring the next generation of Swiss university students.</p>
                            <Link href="../campus" className="link button-outline w-full lg:w-fit gap-1 text-white bg-black">
                                <span className="lg:text-lg text-md">Go to Founderful</span>
                                <ArrowRight color={"#fff"} />
                            </Link>
                        </WhileInView>

                    </div>
                    <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className="h-fit w-fit lg:order-last order-first z-30 overflow-hidden lg:justify-end">
                        <Image src={family} alt={"family"} className="object-cover w-screen"></Image>
                    </WhileInView>


                </div>

            </div>
            <Image src={vector} alt={"vector"} className="separator absolute -bottom-[30px] left-0  h-[70.5px] mt-24 z-10"></Image>
        </div>

    );
}