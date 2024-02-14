import React, { useEffect, useState } from 'react';

interface ParallaxProps {
  offsetMultiplier?: number;
  className?: string;
  children: React.ReactNode;
}

const Parallax: React.FC<ParallaxProps> = ({ offsetMultiplier = 0.5, className, children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * offsetMultiplier;

  return (
    <div style={{ transform: `translateY(-${parallaxOffset}px)` }} className={`parallax-container ${className || ''}`}>
      {children}
    </div>
  );
};

export default Parallax;
