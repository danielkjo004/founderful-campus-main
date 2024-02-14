import 'swiper/css/navigation';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from '../../components/Icons';
import { getEpfls, getEths, getHqs, getHsgs } from '@/sanity/utils';
import { HQ } from '@/types/HQ';
import { Eth } from '@/types/Eth';
import { Epfl } from '@/types/Epfl';
import WhileInView from '../../components/WhileInView';
import Link from 'next/link';
import Image from 'next/image';
import arrowright from '@/public/images/icons/arrow-right.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules'
import vector from '@/public/images/vectors/yellow-separator.svg';
import 'swiper/css/navigation';
import { Hsg } from '@/types/Hsg';

SwiperCore.use([Navigation]);

export default function MeetTheTeam() {
    const [hqs, setHqs] = useState<HQ[]>([]);
    const [eths, setEths] = useState<Eth[]>([]);
    const [epfls, setEpfls] = useState<Epfl[]>([]);
    const [hsgs, setHsgs] = useState<Hsg[]>([]);

    useEffect(() => {
        async function fetchedHQS() {
            const fetchedHQS = await getHqs();
            setHqs(fetchedHQS);

        }

        async function fetchedEths() {
            const fetchedEths = await getEths();
            setEths(fetchedEths);
        }

        async function fetchedEpfl() {
            const fetchedEpfls = await getEpfls();
            setEpfls(fetchedEpfls);
        }

        async function fetchedHsg() {
            const fetchedEpfls = await getHsgs();
            setHsgs(fetchedEpfls);
        }

        fetchedHQS();
        fetchedEths();
        fetchedEpfl();
        fetchedHsg();
    }, []);

    const breakText = (text: string) => {
        const words = text.split(' ');
        const firstName = words[0];
        const remainingText = words.slice(1, words.length - 1).join(' ');
        const lastWord = words[words.length - 1];
        return (
            <>
                {firstName}
                <br />
                {remainingText} {lastWord}
            </>
        );
    };

    const swiperRef = useRef<any>(null);
    const renderSwiper = (data: any[], className: string) => {
        return (

            <Swiper
                className="m-0"
                ref={swiperRef}
                spaceBetween={10}
                loop={false}
                navigation={{ nextEl: `.next-button-swiper.${className}`, prevEl: `.prev-button-swiper.${className}` }}
                slidesPerView={2}
                breakpoints={{

                    425: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },

                }}

            >
                {
                    data.map((item, i) => {
                        const dynamicDelay = 0.2 + i * 0.1;
                        return (
                            <SwiperSlide key={item._id} className="align-middle">
                                <div className='student-wrapper'>
                                    <WhileInView animChild={`initial-slide-y-15 slide-y-0 delay-${dynamicDelay}`}>
                                        <h4 className='mb-5 student-name whitespace-pre-line'>{breakText(item.name)}</h4>
                                    </WhileInView>
                                    <WhileInView animChild={`initial-slide-y-15 slide-y-0 delay-${dynamicDelay}`} className=''>
                                        <Image src={item.image} alt="image" width={100} height={100} className='student-photo mb-7'></Image>
                                    </WhileInView>
                                    <WhileInView animChild={`initial-slide-y-15 slide-y-0 delay-${dynamicDelay}`}>
                                        <span className='text-sm'>
                                            <p>{item.enterprise}</p>
                                            <p>{item.role}</p>
                                        </span>
                                    </WhileInView>
                                    <WhileInView animChild={`initial-slide-x-minus-15 slide-x-0 delay-${dynamicDelay}`}>
                                        <Link href={item.linkedin} className='link lg:w-fit w-full mt-3'>
                                            <span className='text-sm'>LinkedIn</span>
                                            <Image src={arrowright} alt="arrowRight" width={27} height={24} className='arrow-right w-4'></Image>
                                        </Link>
                                    </WhileInView>
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper >
        );
    };

    const renderSwiperButtons = (className: string) => {
        return (
            <WhileInView animChild='initial-slide-x-minus-15 slide-x-0 delay-0.5' className="buttons alt absolute flex-row gap-1 z-10 top-0 right-0 lg:hidden md:flex sm:flex hidden">
                <div className={`prev-button-swiper ${className} transition-opacity duration-300 ease-in-out`}>
                    <ArrowLeft color="#fff" />
                </div>
                <div className={`next-button-swiper ${className} transition-opacity duration-300 ease-in-out`}>
                    <ArrowRight color="#fff" />
                </div>
            </WhileInView>
        );
    };

    return (
        <div className="flex">
            <div className="bg-[#fff] flex lg:flex-row flex-col text-[#000] h-fit w-screen lg:flex px-5 pt-32 lg:pb-10 pb-20">
                <div className="flex lg:w-[20vw] bg-[#fff] xl:ml-0 xl:mb-0 mb-20 z-20">
                    <h3 className="sticky-title lg:sticky text-[#000]">Meet the team</h3>
                </div>
                <div className="flex flex-col w-[90vw] lg:w-[80vw]">
                    <div className='lg:mb-10 mb-8 '>
                        <h4 className='sm:text-5xl sm:max-h-14 max-h-9'>Made for <span className='handwritten text-xl align-[-4px]'>STUDENTS.</span></h4>
                        <h4 className='sm:text-5xl'>Led by <span className='handwritten text-xl align-[-4px]'>STUDENTS.</span></h4>
                    </div>
                    <div>
                        <p className='xl:max-w-[29em] lg:max-w-[26em] sm:max-w-[28em] lg:mb-20 mb-10'>
                            The strongest asset of the programme is our student investor team. Each of them has a singular story and intends to make their mark on the space as a VC investor, founder, or operator. You&apos;ll build meaningful friendships and grow alongside them. Meet our team below and see what our alumni are up to here.
                        </p>
                    </div>
                    <div className='relative mb-16'>
                        <h4 className='sm:text-5xl mb-8'> Campus <span className='handwritten text-xl align-[-4px]'>HQ</span></h4>
                        {renderSwiper(hqs, 'hq')}
                        {renderSwiperButtons('hq')}
                    </div>

                    <div className='relative mb-16'>
                        <h4 className='sm:text-5xl mb-8'> Campus <span className='handwritten text-xl align-[-4px] '> ETH Zürich</span></h4>
                        {renderSwiper(eths, 'eth')}
                        {renderSwiperButtons('eth')}
                    </div>

                    <div className='relative mb-16'>
                        <h4 className='sm:text-5xl mb-8'> Campus <span className='handwritten text-xl align-[-4px] '> EPFL</span></h4>
                        {renderSwiper(epfls, 'epfl')}
                        {renderSwiperButtons('epfl')}
                    </div>

                    <div className='relative mb-16'>
                        <h4 className='sm:text-5xl mb-8'> Campus <span className='handwritten text-xl align-[-4px] '> HSG</span></h4>
                        {renderSwiper(hsgs, 'hsgs')}
                        {renderSwiperButtons('hsgs')}
                    </div>
                </div>
            </div>
        </div>
    );
}
