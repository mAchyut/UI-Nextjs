"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const designEvents = [
    {
      title: "User Experience Design Bootcamp",
      description:
        "Join us for an intensive bootcamp focused on the principles of user experience design, featuring hands-on workshops and expert-led sessions.",
      slug: "user-experience-design-bootcamp",
      isFeatured: true,
    },
    {
      title: "Typography and Branding Workshop",
      description:
        "Learn the importance of typography in branding with this comprehensive workshop, covering design principles, font selection, and brand identity.",
      slug: "typography-branding-workshop",
      isFeatured: true,
    },
    {
      title: "Responsive Web Design Essentials",
      description:
        "Discover the best practices for creating responsive websites that adapt seamlessly to different devices and screen sizes.",
      slug: "responsive-web-design-essentials",
      isFeatured: false,
    },
    {
      title: "Color Theory for Designers",
      description:
        "Dive into color theory and learn how to effectively use color in your designs to evoke emotions and convey messages.",
      slug: "color-theory-for-designers",
      isFeatured: true,
    },
    {
      title: "Design Thinking Workshop",
      description:
        "Enhance your problem-solving skills with our interactive design thinking workshop, focusing on user-centered approaches and creative ideation.",
      slug: "design-thinking-workshop",
      isFeatured: false,
    },
    {
      title: "Creative Illustration Techniques",
      description:
        "Explore various illustration techniques in this hands-on session, designed for both beginners and experienced artists.",
      slug: "creative-illustration-techniques",
      isFeatured: true,
    },
    {
      title: "Sustainable Design Practices",
      description:
        "Learn about sustainable design principles and how to incorporate eco-friendly practices into your design projects.",
      slug: "sustainable-design-practices",
      isFeatured: false,
    },
    {
      title: "Motion Design Fundamentals",
      description:
        "An engaging introduction to motion design, exploring the tools and techniques for creating captivating animations.",
      slug: "motion-design-fundamentals",
      isFeatured: true,
    },
  ];
  const featuredCards = designEvents.filter((card) => card?.isFeatured);

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p>Enhance Your Design Skills</p>
        </div>
        <div className="mt-10">
          {
            <HoverEffect
              items={featuredCards?.map((card) => ({
                link: card.slug,
                ...card,
              }))}
            />
          }
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="inline-block bg-teal-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-500 transition duration-300"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
