"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicContent = [
    {
        title: "Hindustani Classical Music",
        description: "Originating from North India, Hindustani classical music is characterized by its improvisational nature and complex rhythms. It is traditionally performed using instruments like the sitar, tabla, and sarod, with vocal styles that emphasize raga and tala."
    },
    {
        title: "Carnatic Classical Music",
        description: "Emerging from South India, Carnatic classical music is known for its rich melodic framework and intricate compositions. It places a strong emphasis on vocal music, even when instrumental, with prominent instruments including the veena, mridangam, and flute."
    },
    {
        title: "Raga",
        description: "A raga is a melodic framework used in Indian classical music, consisting of specific notes and rules for their use. Each raga evokes a particular mood or emotion and is often associated with a time of day or season."
    },
    {
        title: "Tala",
        description: "Tala refers to the rhythmic aspect of Indian classical music. It involves specific cycles of beats, providing a structured time framework for performances. Common talas include Teentaal and Ektaal, each with its own unique pattern."
    },
    {
        title: "Dhrupad",
        description: "Dhrupad is one of the oldest forms of Hindustani classical music, characterized by its solemnity and depth. It often features a slow, meditative opening (alaap) followed by rhythmic sections that showcase intricate vocal and instrumental techniques."
    },
    {
        title: "Bhajan",
        description: "A bhajan is a devotional song in Indian classical music, often dedicated to a deity. These songs can be simple or complex and are performed in various styles, emphasizing spirituality and emotional expression."
    },
    {
        title: "Gharana",
        description: "A gharana is a musicological term that refers to a particular school or style of Indian classical music. Each gharana has its own unique techniques and interpretations, often passed down through generations of musicians."
    },
    {
        title: "Vocal Styles",
        description: "Indian classical music features various vocal styles, including Dhrupad, Khayal, Thumri, and Tappa. Each style has distinct characteristics, emotional expressions, and performance contexts."
    },
    {
        title: "Instruments",
        description: "Indian classical music utilizes a wide range of instruments, including string instruments like the sitar and sarangi, percussion instruments like the tabla and mridangam, and wind instruments like the bansuri and shehnai."
    },
    {
        title: "Fusion",
        description: "Fusion music blends Indian classical elements with various genres, such as jazz, rock, and electronic music. This genre highlights the adaptability of Indian classical music and introduces it to new audiences."
    },
    {
        title: "Composers",
        description: "Prominent composers in Indian classical music include Tansen, Miyan Tansen, and contemporary figures like Ravi Shankar and Zakir Hussain, who have significantly influenced the evolution and global appreciation of this art form."
    },
    {
        title: "Music Festivals",
        description: "India hosts numerous classical music festivals, such as the Dover Lane Music Conference and the Sawai Gandharva Bhimsen Mahotsav. These events celebrate and promote the rich heritage of Indian classical music."
    },
    {
        title: "Raga Malika",
        description: "Raga Malika is a composition that combines multiple ragas within a single performance. It showcases the versatility of the artist and offers listeners a rich auditory experience."
    },
    {
        title: "Khayal",
        description: "Khayal is a prominent form of Hindustani vocal music characterized by its improvisational nature. It allows for extensive exploration of ragas and is known for its expressive melodies and intricate rhythmic patterns."
    }
]


function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicContent}/>
    </div>
  )
}

export default WhyChooseUs