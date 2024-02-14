import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import { TalkBalloon } from "../../icons/TalkBalloon";
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft } from '../../components/Icons';
import { SuccessStory } from '@/types/SuccessStory';
import { getSuccessStories } from '@/sanity/utils';




SwiperCore.use([Navigation]);
export default function SuccessStories() {

    const swiperRef = useRef<SwiperCore>();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (swiper: SwiperCore) => {
        setCurrentIndex(swiper.realIndex);
    };



    const [successStories, setSuccessStories] = useState<SuccessStory[]>([]);

    useEffect(() => {
        async function fetchedStories() {
            const fetchedStories = await getSuccessStories();

            setSuccessStories(fetchedStories);
        }

        fetchedStories();
    }, []);

    return (
        <div className="bg-[#fff] lg:pl-5 flex lg:flex-row flex-col text-[#000] h-fit w-screen px-0 pt-0 lg:flex lg:pb-10 pb-20 z-10 relative">
            <div className="flex lg:w-[15vw] lg:ml-0 lg:mb-0 mb-20 mr-10 ml-10 mt-10">
                <h3 className="sticky-title lg:sticky text-[#000]">Success stories</h3>
            </div>
            <div className="lg:w-[85vw]">
                <Swiper
                    spaceBetween={0}
                    navigation={{ nextEl: '.next-button-swiper', prevEl: '.prev-button-swiper' }}
                    loop={true}
                    onSlideChange={handleSlideChange}
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,

                        }
                    }}
                >
                    <div className='buttons flex flex-row gap-1 absolute z-10 bottom-[40%] right-[1em]'>
                        <div className="prev-button-swiper">
                            <ArrowLeft color='#000'></ArrowLeft>
                        </div>
                        <div className="next-button-swiper">
                            <ArrowRight color='#000' ></ArrowRight>
                        </div>
                    </div>
                    {successStories.map((successStory, index) => (
                        <SwiperSlide key={index} className="flex flex-col items-center justify-center lg:h-screen h-fit overflow-visible">
                            <div className='talkballoon'>
                                <p className={`quote flex items-start lg:text-2xl !leading-normal ${currentIndex === index ? 'text-white' : 'text-black'}`}>
                                    {successStory.quote}
                                </p>
                            </div>
                            <div className="flex flex-col items-start ml-10 mt-5">
                                <img src={successStory.image} alt={successStory.author} className="w-[68px] h-[68px] rounded-full mb-2" />
                                <p className="font-bold">{successStory.author}</p>
                                <p>{successStory.region}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
