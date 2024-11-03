import { Meteors } from "@/components/ui/meteors"
import { Button } from "@/components/ui/moving-border"

function page() {
  return (
    <div
      className="min-h-screen bg-black py-12 pt-36 overflow-y-hidden"
      style={{
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE and Edge
      }}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center mb-1">
        Contact
      </h2>
      <p className="text-xs md:text-sm text-gray-400 text-center mb-4">
        For inquiries or suggestions reach us out anytime
      </p>
      <form className="w-full flex flex-col items-center justify-center h-full space-y-8 relative z-10 p-8">
        <input
          className="w-full max-w-2xl p-3 border border-gray-800 bg-transparent rounded-md outline-none"
          placeholder="Your email"
          type="email"
          required
        />
        <textarea
          className="w-full max-w-2xl p-3 border border-gray-800 bg-transparent rounded-md min-h-40 outline-none"
          placeholder="Your message"
          required
        />
        <Button className="bg-black" type="submit">
          Submit
        </Button>
      </form>
      <Meteors />
    </div>
  )
}

export default page
