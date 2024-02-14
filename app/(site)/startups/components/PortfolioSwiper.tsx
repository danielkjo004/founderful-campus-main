'use client'
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ArrowRight, ArrowLeft } from '../../components/Icons';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation';
import { PortfolioSwiper } from '@/types/PortfolioSwiper';
import { getPortfolioSwiper } from '@/sanity/utils';
import Image from 'next/image';

SwiperCore.use([Navigation]);
export default function PortfolioSwiper() {
    const [swiper, setSwiper] = useState<PortfolioSwiper[]>([]);

    useEffect(() => {
        async function fetchedPortfolioSwipers() {
            const fetchedPics = await getPortfolioSwiper();

            setSwiper(fetchedPics);
        }

        fetchedPortfolioSwipers();
    }, []);

    return (
        <div className='bg-white w-full h-fit'>
            <div className="lg:px-0 px-5 flex flex-col lg:mb-0 mb-10 lg:w-[79.5vw] ml-auto pt-24 ">
                <div className=" flex flex-col">
                    <h4 className="sm:text-5xl lg:mb-10 mb-8">Our <span className="handwritten text-xl align-[-4px]">PORTFOLIO</span>  of startups.</h4>
                    <p className="xl:max-w-[30em] lg:max-w-[26em] sm:max-w-[28em]">They joined as startups, and left as founders. Meet our community of ventures that launched with the help of Founderful Campus.</p>
                </div>
            </div>
            <div className='buttons alt flex flex-row gap-3 relative justify-end mr-32 mb-7'>
                <div className="prev-button-swiper alt">
                    <ArrowLeft color='#fff'></ArrowLeft>
                </div>
                <div className="next-button-swiper alt">
                    <ArrowRight color='#fff' ></ArrowRight>
                </div>
            </div>
            <Swiper
                className="flex  w-full overflow-clip"
                spaceBetween={0}
                loop={true}
                navigation={{ nextEl: `.next-button-swiper.alt`, prevEl: `.prev-button-swiper` }}
                slidesPerView={1.7}
                centeredSlides={true}
                onSwiper={(swiper) => {
                    swiper.slideTo(3, 0, true);
                }}>
                <div>

                    {swiper.map((swiper, i) => (
                        <SwiperSlide key={i}>
                            <div>
                                <div>
                                    <Image src={swiper.image} alt='picture' width={1245} height={844} className='startup-photo lg:mb-0 mb-5'></Image>
                                    <span className='highlighted-startup-name text-sm'>{swiper.title}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </div>
            </Swiper>

        </div >
    );
}