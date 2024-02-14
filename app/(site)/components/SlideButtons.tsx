import { useSwiper } from "swiper/react";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

interface ControlButtonsProps {
    onNext: () => void;
    onPrev: () => void;
    isMobile: boolean;
}

export default function SlideButtons({onNext, onPrev, isMobile}: ControlButtonsProps) {

    const swiper = useSwiper();

    return (
        <div>
            {/* <button type="button" className="button rounded mr-2" onClick={() => swiper.slidePrev()}><ArrowLeftIcon /></button>
            <button type="button" className="button rounded" onClick={() => swiper.slideNext()}><ArrowRightIcon /></button> */}
            <button type="button" className="button rounded mr-2" onClick={isMobile ? (() => swiper.slidePrev()) : onPrev}><ArrowLeftIcon /></button>
            <button type="button" className="button rounded" onClick={isMobile ? (() => swiper.slideNext()) : onNext}><ArrowRightIcon /></button>
        </div>
    )
}