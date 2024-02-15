import Image from "next/image";
import WhileInView from '../../components/WhileInView';
import borderPartner from "../../../../public/images/vectors/partners-border.svg";
import borderFriends from "../../../../public/images/vectors/friends-border.svg";
import borderFriendsx6 from "../../../../public/images/vectors/friends-border2.svg";
import borderMobile from "../../../../public/images/vectors/vc-border-1-mobile.svg";
import useIsMobile from "../../components/isMobile";
import { useEffect, useState } from "react";
import { Partner } from "@/types/Partner";
import { getPartners } from "@/sanity/utils";
import partner from '../../../../sanity/schemas/partner';


export default function CampusPartners() {

    const [partners, setPartners] = useState<Partner[]>([]);

    useEffect(() => {
        async function fetchedPartners() {
            const fetchedPartner = await getPartners();
            setPartners(fetchedPartner);
        }
        fetchedPartners();

    });
    const isMobile = useIsMobile();
    return (

        <div className="bg-[#fff] md:pl-0 flex lg:flex-row flex-col text-[#000] h-fit w-screen pt-36 lg:flex lg:pb-10 pb-20 z-10 ">
            <div className="flex lg:w-[15vw] lg:ml-0 lg:mb-0 mb-20 mr-10 ml-5">
                <h3 className="sticky-title lg:sticky text-[#000]">Our campus family</h3>
            </div>
            <div className="flex flex-col w-full">
                <div className="bg-[#fff] w-full md:pr-0 flex flex-col text-[#000] h-fit px-5 lg:px-0 lg:pl-8 lg:pb-10 pb-20 z-10 mb-10">
                    <div>
                        <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.5" className="flex flex-row">
                            <h4 className="sm:text-4xl lg:mb-6 mb-10">Campus <span className="handwritten text-xl align-[-4px]">PARTNERS</span></h4>
                        </WhileInView>
                        <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.5" className="">
                            <p className="mb-8 lg:max-w-[30.5em] sm:max-w-[28em]">We&apos;re committed to partnering with, and enabling, the student associations championing entrepreneurs. As their sponsors, we provide financial support and provide them with crucial VC know-how.</p>
                        </WhileInView>
                    </div>

                    <WhileInView animChild="initial-slide-x-minus-15 slide-x-0 delay-0" className="w-full left-0 relative md:right-0 md:h-full h-full">
                        {!isMobile &&
                            <>
                                {
                                    partners.filter(partner => partner.role === 'partner').length <= 3 &&
                                    <Image src={borderPartner} alt={"BorderPartner"} className="w-full h-full" />
                                }{
                                    partners.filter(partner => partner.role === 'partner').length > 3 &&
                                    <Image src={borderFriendsx6} alt={"BorderPartner"} className="w-full h-full" />
                                }

                                <div className="md:grid md:grid-cols-3 flex-col w-full h-full absolute top-0 left-0 right-0 bottom-0">
                                    {partners.map((partners, index) => (
                                        index < 6 && partners.role == "partner" &&
                                        <div key={index} className="md:w-full md:h-full h-1/3 relative">
                                            <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className="w-full h-full flex items-center justify-center">
                                                <Image src={partners.image} alt={partners.alt} width={300} height={100} className="partner-item"></Image>
                                            </WhileInView>
                                        </div>
                                    ))}
                                </div>
                            </>
                        }
                        {isMobile &&
                            <>
                                <Image src={borderMobile} alt={"BorderPartner"} className="h-[7px] -mb-[3px] w-full object-cover ml-auto justify-self-end" />

                                <div className="flex-col w-full h-full relative top-0 left-0 right-0 bottom-0">
                                    {partners.map((partners, index) => (
                                        index < 6 && partners.role == "partner" &&
                                        <div key={index} className="md:w-full md:h-full h-1/3 relative">
                                            <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0" className="w-full h-full flex items-center justify-center partner-wrapper">
                                                <Image src={partners.image} alt={partners.alt} width={300} height={100} className="partner-item-mobile"></Image>
                                            </WhileInView>
                                        </div>
                                    ))}
                                </div>
                            </>
                        }

                    </WhileInView>


                </div>


                <div className="bg-[#fff] w-full md:pr-0 flex flex-col text-[#000] h-fit px-5 lg:px-0 lg:pl-8 lg:pb-10 pb-20 z-10 mb-10">
                    <div>
                        <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.5" className="flex flex-row">
                            <h4 className="sm:text-4xl lg:mb-6 mb-10">Campus <span className="handwritten text-xl align-[-4px]">FRIENDS</span></h4>
                        </WhileInView>
                        <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.5" className="">
                            <p className="mb-8 lg:max-w-[30.5em] sm:max-w-[28em]">Beyond our direct Campus partners, we extend our support to other leading student programmes. Our aim is to help them develop the next big startups by providing valuable resources.</p>
                        </WhileInView>
                    </div>

                    <WhileInView animChild="initial-slide-x-minus-15 slide-x-0 delay-0" className="w-full left-0 relative md:right-0 md:h-full h-full">
                        {!isMobile &&
                            <>
                                {
                                    partners.filter(partner => partner.role === 'friend').length <= 3 &&
                                    <Image src={borderFriends} alt={"BorderPartner"} className="w-full h-full" />
                                }{
                                    partners.filter(partner => partner.role === 'friend').length > 3 &&
                                    <Image src={borderFriendsx6} alt={"BorderPartner"} className="w-full h-full" />
                                }

                                <div className="md:grid md:grid-cols-3 flex-col w-full h-full absolute top-0 left-0 right-0 bottom-0">
                                    {partners.map((partners, index) => (
                                        index < 6 && partners.role == "friend" &&
                                        <div key={index} className="md:w-full md:h-full h-1/3 relative">
                                            <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className="w-full h-full flex items-center justify-center">
                                                <Image src={partners.image} alt={partners.alt} width={300} height={100} className="partner-item"></Image>
                                            </WhileInView>
                                        </div>
                                    ))}
                                </div>
                            </>
                        }
                        {isMobile &&
                            <>
                                <Image src={borderMobile} alt={"BorderPartner"} className="h-[7px] -mb-[3px] w-full object-cover ml-auto justify-self-end" />

                                <div className="flex-col w-full h-full relative top-0 left-0 right-0 bottom-0">
                                    {partners.map((partners, index) => (
                                        index < 6 && partners.role == "friend" &&
                                        <div key={index} className="md:w-full md:h-full h-1/3 relative">
                                            <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className="w-full h-full flex items-center justify-center partner-wrapper">
                                                <Image src={partners.image} alt={partners.alt} width={300} height={100} className="partner-item-mobile"></Image>
                                            </WhileInView>
                                        </div>
                                    ))}
                                </div>
                            </>
                        }

                    </WhileInView>


                </div>

            </div>
        </div>


    );
}