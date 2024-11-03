'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

function MovingCard() {
    const musicalQuotes = [
        {
            quote: "The sitar is not merely an instrument; it serves as a bridge between the mind and the heart. Each pluck of its strings resonates with emotions that words often fail to express, inviting listeners into a meditative space where time seems to stand still and the essence of music transcends all boundaries.",
            name: "Ravi Shankar",
            title: "Sitar Player and Composer"
        },
        {
            quote: "The tabla is often referred to as the heartbeat of Indian music, with its intricate rhythms acting as a pulse that guides the soul's journey. Each stroke is carefully crafted, weaving together tradition and innovation, creating a tapestry of sound that can evoke joy, sorrow, and everything in between.",
            name: "Zakir Hussain",
            title: "Tabla Maestro"
        },
        {
            quote: "Music is the universal language of the spirit, and the sarod speaks it fluently. Its deep, resonant notes have the power to convey the profound depths of human emotion, from the ecstatic highs of joy to the melancholic lows of longing, making it an essential voice in the landscape of Indian classical music.",
            name: "Amjad Ali Khan",
            title: "Sarod Player"
        },
        {
            quote: "Every raga is a unique journey, unfolding a narrative filled with rich textures and vibrant emotions. When performed, it transforms into an exploration of the artist's inner world, allowing listeners to embark on their own personal adventures, each performance a new chapter waiting to be discovered.",
            name: "Khayal Vocalist",
            title: "Vocal Artist"
        },
        {
            quote: "The bansuri is not just a flute; it is an extension of the soul itself. Its sound captures the very essence of nature, echoing the whispers of the wind and the rustle of leaves, allowing the player to express the deepest emotions in a language that transcends words, touching the hearts of all who listen.",
            name: "Hariprasad Chaurasia",
            title: "Bansuri Player"
        },
        {
            quote: "The veena embodies grace and elegance, producing a sound that enchants and captivates. It invites listeners into a realm of divine melody, where the intricate interplay of strings creates a lush soundscape, resonating with the beauty of life itself, making it a centerpiece of Indian classical music.",
            name: "Chitti Babu",
            title: "Veena Maestro"
        },
        {
            quote: "In the hands of a master, the mridangam transforms into a storyteller, its beats narrating tales that evoke the entire spectrum of human experience. The rhythms serve as a vehicle for expression, allowing the artist to communicate emotions that resonate deeply within the hearts of the audience.",
            name: "Umayalpuram K. Sivaraman",
            title: "Mridangam Virtuoso"
        },
        {
            quote: "Thumri is more than just a musical style; it is a profound emotion woven into melodies. It reflects the nuances of love and longing, encapsulating the complexities of human relationships, and inviting listeners to experience these sentiments on a deeply personal level, transcending the boundaries of language and culture.",
            name: "Begum Akhtar",
            title: "Thumri Singer"
        }
    ];
    
    
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.14] flex flex-col relative items-center justify-center overflow-hidden">
        <h2 className="mt-2 text-2xl leading-8 font-bold tracking-tight text-white sm:text-3xl text-center mb-10 z-10">Music of spirituality: Let your soul dance</h2>
 <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-6xl">
    <InfiniteMovingCards
      items={musicalQuotes}
      direction="right"
      speed="slow"
    />
    </div>
 </div>
  </div>
  )
}

export default MovingCard