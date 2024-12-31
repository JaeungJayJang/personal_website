'use client'

import { useEffect, useState } from 'react';
import { PiMouseScrollLight } from "react-icons/pi";
import Spline from '@splinetool/react-spline';

const HeroContainer = () => {
    const [showIcon, setShowIcon] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowIcon(false);
            } else {
                setShowIcon(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="h-[calc(100vh+1000px)]">
            <div className="sticky top-0">
                <div className="h-screen">
                    <Spline
                        scene="https://prod.spline.design/0CFsJKSH-WJ2TaVR/scene.splinecode"
                    />
                </div>
            </div>
            <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${showIcon ? 'opacity-100' : 'opacity-0'}`}>
                <PiMouseScrollLight className="animate-bounce text-5xl " />
            </div>
        </div>
    );
};

export default HeroContainer;