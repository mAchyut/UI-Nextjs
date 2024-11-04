"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const designContent = [
    {
        title: "Minimalist Design",
        description: "Minimalist design emphasizes simplicity and functionality. It uses a limited color palette and clean lines to create visually appealing spaces that focus on the essentials."
    },
    {
        title: "User-Centered Design",
        description: "User-centered design is a framework that prioritizes the needs and preferences of users. It involves research and testing to create products that enhance user experience."
    },
    {
        title: "Responsive Design",
        description: "Responsive design ensures that websites function seamlessly across various devices and screen sizes. It adapts layouts and elements for optimal viewing on desktops, tablets, and smartphones."
    },
    {
        title: "Typography",
        description: "Typography is the art of arranging type to make written language legible, readable, and visually appealing. It plays a crucial role in establishing a design's tone and style."
    },
    {
        title: "Color Theory",
        description: "Color theory explores how colors interact, combine, and impact design. Understanding color harmony is essential for creating designs that evoke specific emotions and responses."
    },
    {
        title: "Branding",
        description: "Branding encompasses the visual identity of a company, including logos, color schemes, and typography. A strong brand creates recognition and trust among consumers."
    },
    {
        title: "UI/UX Design",
        description: "UI (User Interface) and UX (User Experience) design focus on creating intuitive and engaging digital products. They work together to ensure that users have a positive interaction with the interface."
    },
    {
        title: "Sustainable Design",
        description: "Sustainable design promotes environmentally friendly practices and materials. It aims to reduce waste and energy consumption, fostering a more sustainable future in design."
    },
    {
        title: "Visual Hierarchy",
        description: "Visual hierarchy refers to the arrangement of design elements to guide viewers’ attention. It involves using size, color, and layout to prioritize information effectively."
    },
    {
        title: "Motion Design",
        description: "Motion design incorporates animation into graphic design, adding a dynamic element that can enhance storytelling and engage audiences in a unique way."
    },
    {
        title: "Illustration",
        description: "Illustration adds a creative flair to design projects, allowing for unique storytelling and personalization. It can range from hand-drawn art to digital graphics."
    },
    {
        title: "Design Thinking",
        description: "Design thinking is a problem-solving approach that focuses on understanding users’ needs, prototyping solutions, and iterating based on feedback to create effective designs."
    },
    {
        title: "Accessibility",
        description: "Accessibility in design ensures that products are usable by people of all abilities and disabilities. It involves creating inclusive designs that consider diverse user needs."
    },
    {
        title: "Graphic Design",
        description: "Graphic design is the process of visual communication using typography, imagery, and color. It encompasses various forms, including print, digital, and advertising."
    },
    {
        title: "Design Trends",
        description: "Staying updated with design trends is vital for any designer. Trends evolve over time, influencing aesthetics and functionality in contemporary design."
    }
];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={designContent} />
    </div>
  );
}

export default WhyChooseUs;
