import 'swiper/css/navigation';
import { useRef, useState, useEffect } from 'react';
import data from '@/public/images/icons/Data.svg';
import handshake from '@/public/images/icons/Handshake.svg';
import group from '@/public/images/icons/Group.svg';
import laptop from '@/public/images/icons/Laptop.svg';
import coffee from '@/public/images/coffee.svg';
import separator from '@/public/images/vectors/blue-separator.svg'
import { getVCs } from '@/sanity/utils';
import { VC } from "@/types/VC";
import WhileInView from '../../components/WhileInView';
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
            <div className="bg-[#4583F5] flex lg:flex-row flex-col text-[#000] h-fit w-screen lg:flex lg:pt-40 pt-10 lg:pb-10 pb-20 z-10 relative">
                <div className="flex lg:w-[20vw] bg-[#4583F5] xl:pl-5 xl:ml-0 xl:mb-0 z-20 lg:mb-0 mb-16 pl-0 md:pl-5">
                    <h3 className="sticky-title lg:sticky text-[#000]">What to expect</h3>
                </div>
                <div className="flex flex-col w-fit px-5 pl-16">
                    <div>
                        <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.5" className="">
                            <h3 className="sm:text-5xl lg:mb-10 mb-8 !leading-8">Secure your<br />startup&apos;s <span className="handwritten text-xl align-[-4px]">SUCCESS </span></h3>
                        </WhileInView>
                    </div>
                    <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.5" className="">
                        <p className="lg:mb-8 xl:max-w-[21em] sm:max-w-[20em]">Gain the skills and receive the resources to give your company the best start.</p>
                    </WhileInView>
                    <div className='sm:grid sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-1 lg:gap-10 sm:gap-10 gap-10 sm:mt-10 mb-28 justify-between'>

                        <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0" className='sm:min-h-[16rem] md:min-h-[20rem] xl:min-h-[22rem] 2xl:min-h-fit flex flex-col justify-between'>
                            <div>
                                <Image src={data} alt="data base" className='w-20 mb-5'></Image>
                                <h5 className='mb-5'>Get started with
                                    CHF 25,000.</h5>
                                <p className='mb-8 sm:max-w-[16em]'>Receive the money directly, helping you pay for your initial business expenses and the incorporation of your company.</p>
                            </div>
                        </WhileInView>

                        <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className='sm:min-h-[16rem] md:min-h-[20rem] xl:min-h-[22rem] 2xl:min-h-fit flex flex-col justify-between'>
                            <div>
                                <Image src={handshake} alt="data base" className='w-20 mb-5'></Image>
                                <h5 className='mb-5'>Connect with Founderful&apos;s
                                    investment team. </h5>
                                <p className='mb-8 sm:max-w-[15.5em]'>Right from the start you&apos;ll be in direct contact with the Founderful team, gaining valuable feedback and support throughout the programme.</p>
                            </div>
                        </WhileInView>
                        <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.4" className='sm:min-h-[16rem] md:min-h-[20rem] xl:min-h-[22rem] 2xl:min-h-fit flex flex-col justify-between'>
                            <div>
                                <Image src={group} alt="data base" className='w-20 mb-5'></Image>
                                <h5 className='mb-5'>Join our founder and
                                    investor community.</h5>
                                <p className='mb-8 sm:max-w-[14em]'>Meet like-minded founders and alumni through networking events, VC workshops, and our Slack channel.</p>
                            </div>
                        </WhileInView>
                        <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.6" className='sm:min-h-[16rem] md:min-h-[20rem] xl:min-h-[22rem] 2xl:min-h-fit flex flex-col justify-between'>
                            <div>
                                <Image src={laptop} alt="data base" className='w-20 mb-5'></Image>
                                <h5 className='mb-5'>Leverage the
                                    Founderful name.</h5>
                                <p className='mb-8 sm:max-w-[14em]'>Display our logo on your website and pitch deck, sharing your support from a tier-one VC fund at a super early stage.</p>
                            </div>
                        </WhileInView>
                    </div>

                </div>
                <Image src={separator} alt={"separator"} className="separator absolute -bottom-[65px] left-0 h-[68.5px] !z-20"></Image>
            </div>
        </div>
    );
}