import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

import logo from '@/public/images/logo-full.svg'
import Link from "next/link";

export default function Navbar() {
    const [isFixed, setIsFixed] = useState(false);

    const handleAnimationComplete = () => {
        setIsFixed(true);
    };

    return (
        <motion.div className={`bg-white w-full justify-between top-0 left-0 h-fit flex ${isFixed ? 'sticky ' : ''}`}>
            <motion.div className={`items-start py-7 px-5 flex`} initial={{ width: '100%' }} animate={{ width: '25%' }} transition={{ delay: 0, duration: 1 }}
                onAnimationComplete={() => { handleAnimationComplete() }} >
                <Link href={'#'}><Image src={logo} alt="logo-test items-start" ></Image></Link>
            </motion.div>
            <div className="lg:grid grid-cols-3 gap-x-20 w-fit justify-end pr-10 py-5 absolute right-0 hidden">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0, duration: .5 }} className="flex flex-col w-fit gap-1">
                    <Link href={'#'}>lorem ipsum</Link>
                    <Link href={'#'}>lorem ipsumm</Link>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2, duration: .5 }} className="flex flex-col lg:gap-2 gap-1">
                    <Link href={'#'}>lorem ipsummm</Link>
                    <Link href={'#'}>lorem ipsum</Link>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4, duration: .5 }} className="flex flex-col gap-1">
                    <Link href={'#'}>lorem ipsummm</Link>
                    <Link href={'#'}>lorem ipsum</Link>
                </motion.div>
            </div>
            <div>

            </div>
        </motion.div >
    );
}