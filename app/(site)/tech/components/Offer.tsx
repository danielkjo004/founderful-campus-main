import Image, { StaticImageData } from "next/image";
import WhileInView from '../../components/WhileInView';
import logo_full from "@/public/images/logo-full.svg"
import ecosystem from "@/public/images/ecosystem.svg"
import about2 from "@/public/images/illustrations/about2.svg"
import Link from "next/link";

{/*SWIPER*/ }
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import vector from '@/public/images/vectors/yellow-separator.svg'
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft } from '../../components/Icons';
import { Event } from "@/types/Event";
import { getEvents } from "@/sanity/utils";
import useIsMobile from "../../components/isMobile";

SwiperCore.use([Navigation]);

export default function Offer() {

    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        async function fetchedEvents() {
            const fetchedEvent = await getEvents();
            setEvents(fetchedEvent);
        }
        fetchedEvents();

    });

    const swiperRef = useRef<SwiperCore>();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (swiper: SwiperCore) => {
        setCurrentIndex(swiper.realIndex);
    };
    // Function to format date
    const formatDate = (datetime: string) => {
        const eventDate = new Date(datetime);
        return eventDate.toISOString().split('T')[0]; // YYYY-MM-DD
    };

    // Function to format time
    const formatTime = (datetime: string) => {
        const eventDate = new Date(datetime);
        return eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }); // HH:mm
    };

    const dateDifference = (start: string, end: string) => {
        const startDate = new Date(start);
        const endDate = new Date(end);

        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            // Invalid date, handle the error as needed
            return null; // or throw an error, or handle it differently
        }

        const durationInDays = Math.floor((endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));

        return durationInDays;
    };

    const eventDurations = events.map((event) => {
        const { Sdatetime, Edatetime } = event;
        const duration = dateDifference(Sdatetime, Edatetime);
        return duration;
    });

    const formatDifferenceDays = (start: string, end: string) => {
        const difference = dateDifference(start, end);
        if (difference != 0)
            return difference !== null ? `+${difference} day${difference !== 1 ? 's' : ''}` : 'Invalid Date';
    };

    const isMobile = useIsMobile();

    return (
        <div className="flex">
            <div className="bg-[#F7F14E] flex lg:flex-row flex-col text-[#000] h-fit w-screen lg:px-0 px-0 lg:flex lg:pb-10 pb-20 z-10 relative pt-14">
                <div className="flex lg:w-[15vw] bg-[#F7F14E] pl-5 xl:ml-0 xl:mb-0 mb-20 z-20">
                    <h3 className="sticky-title lg:sticky text-[#000]">What&apos;s on offer</h3>
                </div>
                <div>
                    <div className="bg-[#F7F14E] text-[#000] lg:w-[85vw] flex flex-col ">
                        <div className="flex flex-col lg:flex-row mb-32 px-5">
                            <div className="lg:min-w-max lg:max-h-[38em] flex flex-col">
                                <div>
                                    <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className="">
                                        <h3 className="sm:text-5xl lg:mb-10 mb-8 leading-3"><span className="handwritten text-xl align-[-4px]">JOIN </span>the Campus <br />channel.</h3>
                                    </WhileInView>
                                </div>
                                <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.5" className="">
                                    <p className="lg:mb-24 mb-8 xl:max-w-[27em] lg:max-w-[20em]">First up, you&apos;ll be invited to our Slack workspace. This is where a selection of students from ETH Zurich, EPFL and HSG can access job opportunities and exclusive events with leading VCs and founders. It&apos;s where you can chat to other students passionate about tech. And who knows? It may even be the place you meet your future co-founders.</p>
                                    <Link href="../campus" className="bg-black text-white link button-outline lg:w-fit w-full">
                                        <span className="lg:text-lg text-md">Get in touch for an invite</span>
                                        <ArrowRight color={"#fff"} />
                                    </Link>
                                </WhileInView>

                            </div>
                            <div className="lg:mb-5 mb-5 lg:w-full order-first lg:order-last">
                                <WhileInView animChild="initial-slide-y-8 slide-y-0 delay-0.4" className="flex justify-center">
                                    <Image src={ecosystem} alt={"ecosystem"} className="background-contain-image w-full md:max-w-[38em] 2xl:h-[26em] xl:h-[20em] lg:h-[22em] md:h-[32em] sm:h-[30em] h-72"></Image>
                                </WhileInView>
                            </div>
                        </div>




                        {/* SWIPER PART */}

                        <div className="flex flex-col lg:flex-row justify-between relative w-full mb-10 lg:ml-0">
                            <div className="lg:min-w-max mb-28 justify-between">
                                <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className="px-5">
                                    <h4 className="sm:text-5xl mb-2 !leading-3">Connect at our <span className="handwritten text-xl align-[-4px]">EVENTS.</span> </h4>
                                </WhileInView>
                                <div className="flex flex-row">
                                    <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className="px-5">
                                        <p className="mb-8 xl:max-w-[27em] lg:max-w-[20em] max-w-[20em]  ">Shake things up and get networking at our series of events, organised with the top founders and investors at each university.</p>
                                    </WhileInView>
                                    <div className='buttons alt flex absolute flex-row gap-1 z-10 lg:top-[5em] top-[90%] right-10'>
                                        <div className="prev-button-swiper">
                                            <ArrowLeft color='#fff'></ArrowLeft>
                                        </div>
                                        <div className="next-button-swiper">
                                            <ArrowRight color='#fff'></ArrowRight>
                                        </div>
                                    </div>
                                </div>


                                <WhileInView animChild="initial-slide-x-minus-155 slide-x-0 delay-0.2" className="lg:w-[calc(84vw+1.3rem)] w-full px-0">
                                    <Swiper
                                        className="!overflow-clip mb-10 md:!ml-5 !ml-0"
                                        spaceBetween={0}
                                        loop={false}
                                        navigation={{ nextEl: '.next-button-swiper', prevEl: '.prev-button-swiper' }}
                                        onSlideChange={handleSlideChange}
                                        slidesPerView={'auto'}
                                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                                    >
                                        {events.map((events, index) => (
                                            events.highlight == true && (
                                                <SwiperSlide key={index} className={`event-image !w-fit ${index === 0 && isMobile ? 'pl-5' : ''}`}>

                                                    <Image src={events.image} alt="event picture" width={1000} height={1000} className="event-image !object-cover mb-8 w-fit"></Image>
                                                    <div className="!max-w-[16em]">
                                                        <h4 className="mb-3 w-fit">
                                                            {events.title}
                                                        </h4>
                                                        <small className="block lh-140 w-fit">
                                                            {events.description}
                                                        </small>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        ))}
                                    </Swiper>
                                </WhileInView>


                            </div>
                        </div>



                        <div className="flex flex-col lg:mb-36 mb-14 mx-5">
                            <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className="flex w-fit">
                                <h4 className="sm:text-4xl lg:mb-10 mb-8">Our <span className="handwritten text-xl align-[-4px]">UPCOMING </span> events </h4>
                            </WhileInView>
                            <div className="flex flex-col w-full">
                                {events.map((events, index) => (
                                    <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" key={index} className="md:flex items-center justify-between border-b py-4 border-black w-full">
                                        <h4 className="my-4 md:my-0 text-2xl md:text-3xl">{events.title}</h4>
                                        <div className="sm:flex ml-auto items-center shrink-0 sm:text-center">
                                            <div className="sm:flex items-center sm:text-center mb-1 sm:mb-0 mr-5 xl:mr-10">
                                                <strong className="mr-5 xl:mr-10">{formatDate(events.Sdatetime)}</strong>
                                                <span>{formatTime(events.Sdatetime)} - {formatTime(events.Edatetime)} {formatDifferenceDays(events.Sdatetime, events.Edatetime)}</span>
                                            </div>
                                            <span className="mr-5 xl:mr-10">{events.location}</span>
                                            <div className="mt-4 sm:mt-0 w-48 flex justify-end ml-auto lg:ml-0">
                                                <Link href="#sign" className="bg-black text-white link max-h-16 button-outline lg:w-fit w-full !px-5">
                                                    <span className="text-base">Sign up</span>
                                                    <ArrowRight color={"#fff"} />
                                                </Link>
                                            </div>
                                        </div>
                                    </WhileInView>
                                ))}

                            </div>
                        </div>



                        <div className="flex flex-col lg:flex-row px-5">
                            <div className="lg:min-w-max lg:max-h-[38em] flex flex-col">
                                <div>
                                    <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.2" className="">
                                        <h4 className="sm:text-5xl lg:mb-10 mb-8">Secure a <span className="handwritten text-xl align-[-4px]">POSITION </span><br />in the tech industry.</h4>
                                    </WhileInView>
                                </div>
                                <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.5" className="">
                                    <p className="lg:mb-24 mb-8 xl:max-w-[27em] lg:max-w-[20em]">Hit the ground running with professional experience, throughout you studies. Join our network and get access to the 50+ startups in the Founderful portfolio. Be the first to hear about open internships, build your profile and get ready for great opportunities at graduation.</p>
                                    <Link href="../campus" className="bg-black text-white link button-outline lg:w-fit w-full">
                                        <span className="lg:text-lg text-md">Get in touch for an invite</span>
                                        <ArrowRight color={"#fff"} />
                                    </Link>
                                </WhileInView>

                            </div>
                            <div className="lg:mb-5 mb-5 lg:w-full order-first lg:order-last">
                                <WhileInView animChild="initial-slide-y-15 slide-y-0 delay-0.4" className="flex justify-center">
                                    <Image src={about2} alt={"about2"} className="background-contain-image w-full md:max-w-[38em] 2xl:h-[26em] xl:h-[20em] lg:h-[22em] md:h-[32em] sm:h-[30em] h-72"></Image>
                                </WhileInView>
                            </div>
                        </div>
                    </div>

                </div>
                <Image src={vector} alt={"vector"} className="separator absolute -bottom-[30px] left-0 w-[100%] cover h-[68.5px] mt-20 !z-20"></Image>
            </div>

        </div >
    );
}