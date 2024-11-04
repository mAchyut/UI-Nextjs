'use client'

import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background"

function Instructors() {
    const instructors = [
        {
            id: 1,
            name: "Alice Johnson",
            designation: "Graphic Design Expert",
            image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=2070"
        },
        {
            id: 2,
            name: "Bob Smith",
            designation: "UX/UI Designer",
            image: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=1931"
        },
        {
            id: 3,
            name: "Catherine Lee",
            designation: "Photoshop Specialist",
            image: "https://images.pexels.com/photos/3748795/pexels-photo-3748795.jpeg?auto=compress&cs=tinysrgb&w=1887"
        },
        {
            id: 4,
            name: "David Kim",
            designation: "Branding Strategist",
            image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=2070"
        },
        {
            id: 5,
            name: "Ella Thompson",
            designation: "Illustration Artist",
            image: "https://images.pexels.com/photos/3774909/pexels-photo-3774909.jpeg?auto=compress&cs=tinysrgb&w=1887"
        },
        {
            id: 6,
            name: "Frank Martinez",
            designation: "Web Designer",
            image: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=1887"
        }
    ];
    
    return (
        <div className="relative h-[46rem] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                <h2 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
                <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your design journey!</p>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={instructors}/>
                </div>
            </WavyBackground>
        </div>
    )
}

export default Instructors;
