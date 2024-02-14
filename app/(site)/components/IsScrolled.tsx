import { useEffect, useState } from "react";
import throttle from "lodash/throttle";

export const useIsScrolled = (): boolean => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const scrollThreshold = 20; // Adjust this threshold as needed

        const handleScroll = throttle(() => {
            const scrollY = window.scrollY;
            if (scrollY > scrollThreshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }, 0);

        const handleResize = throttle(() => {
            setWindowWidth(window.innerWidth);
        }, 0);

        // Attach scroll and resize event listeners
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        // Check the scroll position on page load
        handleScroll();
        handleResize();

        // Cleanup the event listeners on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Return isScrolled only when windowWidth > 1024
    return isScrolled;
};
