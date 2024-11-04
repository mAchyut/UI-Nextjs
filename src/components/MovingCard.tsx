'use client';
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function MovingCard() {
    const designQuotes = [
        {
            quote: "Design is not just what it looks like and feels like. Design is how it works. A great design seamlessly blends form and function, creating a user experience that is both intuitive and delightful.",
            name: "Steve Jobs",
            title: "Co-founder of Apple"
        },
        {
            quote: "Good design is obvious. Great design is transparent. It should disappear and become an integral part of the user’s experience, enhancing usability without drawing attention to itself.",
            name: "Joe Sparano",
            title: "Designer and Educator"
        },
        {
            quote: "Design is thinking made visual. It is a way to communicate ideas, solve problems, and create experiences that resonate with people on a deeper level.",
            name: "Saul Bass",
            title: "Graphic Designer and Filmmaker"
        },
        {
            quote: "Every design is a solution to a problem. The best designs not only solve the immediate issue but also consider the user’s context and emotions, making them feel understood and valued.",
            name: "Don Norman",
            title: "Cognitive Scientist and Author"
        },
        {
            quote: "The details are not the details. They make the design. Great design is achieved through a meticulous focus on the finer points that elevate the entire experience.",
            name: "Charles Eames",
            title: "Designer and Architect"
        },
        {
            quote: "Design should never say, ‘Look at me.’ It should always say, ‘Look at this.’ The focus should be on the content and the user, not on the design itself.",
            name: "David Carson",
            title: "Graphic Designer"
        },
        {
            quote: "Design is the intermediary between information and understanding. A well-designed piece transforms complex information into something accessible and engaging.",
            name: "Edward Tufte",
            title: "Statistician and Professor"
        },
        {
            quote: "A design isn’t finished until somebody is using it. The true measure of design is its impact on the user and how it enhances their experience.",
            name: "Jony Ive",
            title: "Former Chief Design Officer at Apple"
        }
    ];

    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.14] flex flex-col relative items-center justify-center overflow-hidden">
            <h2 className="mt-2 text-2xl leading-8 font-bold tracking-tight text-white sm:text-3xl text-center mb-10 z-10">Design Insights: Inspiring Your Creativity</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={designQuotes}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    );
}

export default MovingCard;
