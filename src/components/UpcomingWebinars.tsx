"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const musicalEvents = [
    {
      title: "Indian Classical Music Festival",
      description:
        "Join us for a vibrant celebration of Indian classical music featuring renowned artists performing ragas, thumris, and more.",
      slug: "indian-classical-music-festival",
      isFeatured: true,
    },
    {
      title: "Sitar Masterclass with Ravi Shankar",
      description:
        "An exclusive opportunity to learn from the legendary sitar maestro, Ravi Shankar. This masterclass will cover techniques, improvisation, and the rich history of the sitar in Indian music.",
      slug: "sitar-masterclass-ravi-shankar",
      isFeatured: true,
    },
    {
      title: "Tabla Recital by Zakir Hussain",
      description:
        "Experience an unforgettable evening with tabla virtuoso Zakir Hussain as he performs a solo recital, diving into the intricate rhythms and captivating stories conveyed through the tabla.",
      slug: "tabla-recital-zakir-hussain",
      isFeatured: false,
    },
    {
      title: "Annual Raga Fest",
      description:
        "Celebrate the diversity of Indian classical music at the Annual Raga Fest, featuring performances by various artists, workshops, and discussions about the significance of ragas.",
      slug: "annual-raga-fest",
      isFeatured: true,
    },
    {
      title: "Vocal Mastery Workshop",
      description:
        "Enhance your vocal skills with expert guidance in this interactive workshop led by esteemed vocalists, focusing on technique, expression, and performance.",
      slug: "vocal-mastery-workshop",
      isFeatured: false,
    },
    {
      title: "Bansuri Concert Under the Stars",
      description:
        "Enjoy a magical evening of bansuri music performed by acclaimed artist Hariprasad Chaurasia, creating a memorable experience under the stars.",
      slug: "bansuri-concert-under-the-stars",
      isFeatured: true,
    },
    {
      title: "Fusion Music Night",
      description:
        "Join us for a unique fusion of Indian classical music and contemporary genres, featuring collaborations between traditional artists and modern musicians.",
      slug: "fusion-music-night",
      isFeatured: false,
    },
    {
      title: "Veena Recital Series",
      description:
        "A series of intimate veena recitals featuring some of the finest veena players in the country, showcasing the rich tones and intricate melodies of this beautiful instrument.",
      slug: "veena-recital-series",
      isFeatured: true,
    },
  ];
  const featuredCards = musicalEvents.filter((card) => card?.isFeatured);

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p>Enchance Your Musical Journey</p>
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
