'use client'
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ArrowRight, ArrowLeft } from '../../components/Icons';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation';
import { Portfolio } from '@/types/Portfolio';
import { getPortfolio } from '@/sanity/utils';
import Image from 'next/image';
import Link from 'next/link';
import WhileInView from '../../components/WhileInView';
import arrowright from '@/public/images/icons/arrow-right.svg';

SwiperCore.use([Navigation]);
export default function Portfolio() {
    const [portfolio, setPortfolio] = useState<Portfolio[]>([]);

    useEffect(() => {
        async function fetchedPortfolio() {
            const fetchedPortfolio = await getPortfolio();

            setPortfolio(fetchedPortfolio);
        }

        fetchedPortfolio();
    }, []);


    const [viewMoreClicked, setViewMoreClicked] = useState(false);

    const renderItems = () => {
        const itemsToRender = viewMoreClicked ? portfolio : portfolio.slice(0, 8);

        return (
            <div className="md:grid md:grid-cols-4 grid-cols-1 w-[90vw] lg:w-[80vw] pl-3">
                {itemsToRender.map((portfolio, i) => {
                    let dynamicDelay = 0.2 + i * 0.2 % 0.8;
                    return (
                        <WhileInView key={portfolio._id} className='sm:flex justify-start mb-10 flex-wrap mix-blend-luminosity' animChild={`initial-slide-y-15 slide-y-0 delay-${dynamicDelay}`}>
                            <div className='startup sm:block flex delay-0.1'>
                                <Image src={portfolio.image} alt='image' width={100} height={100} className='startup-logo' />
                                <div>
                                    <h5 className="mb-5 startup-name lg:text-2xl text-lg">{portfolio.name}</h5>
                                    <p className='text-sm'>{portfolio.description}</p>
                                    <div className='link sm:w-fit w-full mt-3'>
                                        <Link href={portfolio.URL}>View Portfolio</Link>
                                        <Image src={arrowright} alt='arrowright' width={27} height={24} className='arrow-right w-4'></Image>
                                    </div>
                                </div>
                            </div>
                        </WhileInView>
                    );
                })}
            </div>
        );
    };


    return (
        <div className="bg-[#fff] flex lg:flex-row flex-col text-[#000] h-fit w-screen lg:flex pl-5 pt-32 lg:pb-10 pb-20">
            <div className="flex lg:w-[20vw] bg-[#fff] xl:pl-5 xl:ml-0 xl:mb-0 mb-20 z-20">
                <h3 className="sticky-title lg:sticky text-[#000]">Portfolio</h3>
            </div>
            <div className='flex flex-col'>
                <div className="grid grid-cols-4 w-[90vw] lg:w-[80vw]">
                    {renderItems()}
                </div>

                {portfolio.length > 8 && !viewMoreClicked && (
                    <button onClick={() => setViewMoreClicked(true)} className="button-outline md:w-fit !px-5 !py-4 w-[90vw]">
                        View More
                    </button>
                )}
            </div>
        </div>
    );
}
