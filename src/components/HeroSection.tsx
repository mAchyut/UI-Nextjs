import Link from 'next/link';
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';

function HeroSection() {
  return (
    <div className="h-auto min-h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
          className="absolute top-[-10rem] left-0 md:left-60 md:top-[-5rem] transition-all ease-in-out duration-500"
          fill="white"
        />
        <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Master the Art of Design
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto">
                Embark on a creative journey that unlocks your potential and helps you shape the visual world around you.
            </p>
            <div className="mt-6">
                <Link href="/courses" aria-label="Explore design courses">
                    <Button className="bg-black hover:bg-neutral-800 transition-all duration-300">
                        Explore More
                    </Button>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default HeroSection;
