import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import founder1 from '@/public/images/test/founder1.jpg'

export default function Header() {
    return (
        <div className="flex w-screen">
            <Image src={founder1} alt="aa" className="test-image-header"></Image>
            <Image src={founder1} alt="aa" className="test-image-header"></Image>
            <Image src={founder1} alt="aa" className="test-image-header"></Image>
            <Image src={founder1} alt="aa" className="test-image-header md:flex hidden"></Image>
            <Image src={founder1} alt="aa" className="test-image-header md:flex hidden"></Image>
            <Image src={founder1} alt="aa" className="test-image-header xl:flex hidden"></Image>
        </div>
    );
}