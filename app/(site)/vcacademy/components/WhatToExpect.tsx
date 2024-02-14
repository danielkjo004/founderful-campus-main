import 'swiper/css/navigation';
import { useRef, useState, useEffect } from 'react';
import data from '@/public/images/icons/Data.svg';
import handshake from '@/public/images/icons/Handshake.svg';
import group from '@/public/images/icons/Group.svg';
import laptop from '@/public/images/icons/Laptop.svg';
import coffee from '@/public/images/coffee.svg';
import separator from '@/public/images/vectors/orange-separator.svg'
import vc_1 from '@/public/images/illustrations/vc-1.jpg';
import vc_2 from '@/public/images/illustrations/vc-2.jpg';
import vc_1_mobile from '@/public/images/illustrations/vc-1-mobile.jpg';
import vc_2_mobile from '@/public/images/illustrations/vc-2-mobile.jpg';
import { getVCs } from '@/sanity/utils';
import { VC } from "@/types/VC";
import WhileInView from '../../components/WhileInView';
import Link from 'next/link';
import Image from 'next/image';


export default function Offer() {
    const [vcs, setVCs] = useState<VC[]>([]);

    useEffect(() => {
        async function fetchedVCS() {
            const fetchedVCS = await getVCs();

            setVCs(fetchedVCS);
        }

        fetchedVCS();
    }, []);
    return (
        <div className="flex">
            <div className="bg-[#FC912F] flex lg:flex-row flex-col text-[#000] h-fit w-screen lg:flex lg:pt-40 pt-10 lg:pb-10 pb-20 z-10 relative">
                <div className="flex lg:w-[15vw] bg-[#FC912F] xl:pl-5 xl:ml-0 xl:mb-0 z-20 lg:mb-0 mb-16 pl-5 lg:pl-5">
                    <h3 className="sticky-title lg:sticky text-[#000]">What to expect</h3>
                </div>
                <div className="flex flex-col w-full px-5">
                    <div className='pl-6'>
                        <div>
                            <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.5" className="">
                                <h3 className="sm:text-5xl lg:mb-10 mb-8 !leading-8">Get more as a <br /><span className="handwritten text-xl align-[-4px]">STUDENT </span>investor.</h3>
                            </WhileInView>
                        </div>
                        <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.5" className="">
                            <p className="lg:mb-8 xl:max-w-[21em] sm:max-w-[20em]">Learn what it takes to help startups succeed, from those who have done so themselves.</p>
                        </WhileInView>
                        <div className='sm:grid sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-1 lg:gap-10 sm:gap-10 gap-10 sm:mt-10 mb-28'>
                            <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0" className='sm:min-h-[16rem] md:min-h-[20rem] xl:min-h-[20rem] 2xl:min-h-fit flex flex-col justify-between'>
                                <div>
                                    <Image src={data} alt="data base" className='w-20 mb-5'></Image>
                                    <h5 className='mb-5'>Invest CHF 25,000<br />
                                        in student startups.</h5>
                                    <p className='mb-5 sm:max-w-[14em]'>Scout, select and qualify the most promising student startups, and learn what it&apos;s like to invest first-hand.</p>
                                </div>
                            </WhileInView>

                            <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className='sm:min-h-[16rem] md:min-h-[20rem] xl:min-h-[22rem] 2xl:min-h-fit flex flex-col justify-between'>
                                <div>
                                    <Image src={handshake} alt="data base" className='w-20 mb-5'></Image>
                                    <h5 className='mb-5'>Gain hands-on<br />
                                        investing support.</h5>
                                    <p className='mb-8 sm:max-w-[15.5em]'>Access regular VC workshops, 1:1 calls and visit the Founderful team at their office.</p>
                                </div>
                            </WhileInView>
                            <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.4" className='sm:min-h-[16rem] md:min-h-[20rem] xl:min-h-[22rem] 2xl:min-h-fit flex flex-col justify-between'>
                                <div>
                                    <Image src={group} alt="data base" className='w-20 mb-5'></Image>
                                    <h5 className='mb-5'>Join our founder and<br />
                                        investor community.</h5>
                                    <p className='mb-8 sm:max-w-[14em]'>Scout, select and qualify the most promising student startups, and learn what it&apos;s like to invest first-hand.</p>
                                </div>
                            </WhileInView>
                            <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.6" className='sm:min-h-[16rem] md:min-h-[20rem] xl:min-h-[22rem] 2xl:min-h-fit flex flex-col justify-between'>
                                <div>
                                    <Image src={laptop} alt="data base" className='w-20 mb-5'></Image>
                                    <h5 className='mb-5'>Invest CHF 25,000<br />
                                        in student startups.</h5>
                                    <p className='mb-8 sm:max-w-[14em]'>Scout, select and qualify the most promising student startups, and learn what it&apos;s like to invest first-hand.</p>
                                </div>
                            </WhileInView>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col lg:flex-row mb-32">
                            <div className="lg:min-w-max lg:max-h-[38em] flex flex-col pl-6">
                                <div className=''>
                                    <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className="">
                                        <h3 className="sm:text-5xl lg:mb-10 mb-8">Supporting <br />
                                            <span className="handwritten lg:text-xl text-lg align-[-4px] !leading-3">EQUAL OPPORTUNITIES</span><br />
                                            for Swiss investors. </h3>
                                    </WhileInView>
                                </div>
                                <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.5" className="">
                                    <p className="lg:mb-24 mb-8 xl:max-w-[27em] lg:max-w-[20em]">No matter who you are,
                                        the Founderful Campus programme is for you. By helping each student investor get
                                        their head start, we&apos;re paving the way for a more diverse future.</p>
                                </WhileInView>

                            </div>
                            <div className="lg:mb-5 mb-5 lg:w-full order-first lg:order-last">
                                <WhileInView animChild="initial-slide-y-8 slide-y-0 delay-0.4" className="flex justify-center">
                                    <Image src={coffee} alt={"ecosystem"} className="background-contain-image w-full md:max-w-[38em] 2xl:h-[26em] xl:h-[20em] lg:h-[22em] md:h-[32em] sm:h-[30em] h-72"></Image>
                                </WhileInView>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col lg:flex-row mb-32">
                            <div className="lg:min-w-max lg:max-h-[38em] flex flex-col pl-6">
                                <div className='flex flex-col lg:mb-10 mb-5'>
                                    <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.5" className="">
                                        <h3 className="sm:text-5xl lg:mb-10 mb-8 !leading-[.5em]">Unlock
                                            <span className="handwritten text-xl align-[-4px] "> SUCCESS</span><br />
                                            with the leading VCs.</h3>
                                    </WhileInView>
                                    <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.5" className="">
                                        <p className="xl:max-w-[35.5em] lg:max-w-[26em] sm:max-w-[28em]">
                                            Get 1:1 mentorship from the investment teams of the top European VCs, including Founderful.
                                            Get thinking like a VC and complete dedicated workshops with focused feedback.</p>
                                    </WhileInView>
                                </div>
                                <div className='flex flex-row lg:-mr-8 mr-0'>
                                    <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className="lg:block hidden">
                                        <Image src={vc_1} alt='vc-1' className='success-image mb-8 object-cover '></Image>
                                    </WhileInView>
                                    <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.5" className="lg:block hidden">
                                        <Image src={vc_2} alt='vc-2' className='success-image mb-8 object-cover'></Image>
                                    </WhileInView>
                                    <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className="block lg:hidden ">
                                        <Image src={vc_1_mobile} alt='vc-1' className='success-image mb-8 object-cover '></Image>
                                    </WhileInView>
                                    <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.5" className="block lg:hidden ">
                                        <Image src={vc_2_mobile} alt='vc-2' className='success-image mb-8 object-cover'></Image>
                                    </WhileInView>
                                </div>
                            </div>
                        </div>
                        {vcs.length > 3 &&
                            <div className='flex flex-col lg:mb-36 mb-14 '>
                                <div className='flex flex-col mb-5 pl-6'>
                                    <h4 className='sm:text-5xl lg:mb-10 mb-8'>Meet our <span className='handwritten text-xl align-[-4px]'>TEAM</span> of VCs.
                                    </h4>
                                </div>
                                <div className='sm:flex items-center justify-end lg:mr-[-14px] mb-5 sm:mb-0 flex-wrap'>
                                    {vcs.map((vc) => (
                                        <div key={vc._id} className='vc-border'>
                                            <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.5" className='vc-wrapper mix-blend-multiply'>
                                                <Image src={vc.image} alt={vc.title} width={600} height={90} className='vc-image mix-blend-multiply'></Image>
                                            </WhileInView>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }

                    </div>
                </div>
                <Image src={separator} alt={"separator"} className="separator absolute -bottom-[65px] left-0 h-[68.5px] !z-20"></Image>
            </div>
        </div >
    );
}