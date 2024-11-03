'use client'

import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background"

function Instructors() {
    const instructors = [
        {
            id: 1,
            name: "Ravi Shankar",
            designation: "Sitar Maestro",
            image: "https://images.unsplash.com/photo-1646765495885-8a61595cb9cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            name: "Zakir Hussain",
            designation: "Tabla Virtuoso",
            image: "https://images.unsplash.com/photo-1633411988188-6e63354a9019?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            name: "Amjad Ali Khan",
            designation: "Sarod Player",
            image: "https://images.unsplash.com/photo-1605410651931-5b74bbcc2a03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 4,
            name: "Hariprasad Chaurasia",
            designation: "Bansuri Player",
            image: "https://images.unsplash.com/photo-1645772647876-76f184a402a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        
        {
            id: 7,
            name: "Begum Akhtar",
            designation: "Thumri Singer",
            image: "https://images.unsplash.com/photo-1531651008558-ed1740375b39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];
    
  return (
    <div className="relative h-[46rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talanted professionals who will guide your musical journey!</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
             <AnimatedTooltip items={instructors}/>
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors