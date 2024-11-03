'use client'
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

 interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
 }

function FeaturedCourses() {
   const featuredCourses = courseData.courses?.filter((course)=> course?.isFeatured)
  return (
    <div className="p-12 bg-gray-900">
    <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Courses</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn something good</p>
    </div>
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {featuredCourses.map((course:Course)=> 
         (
            <div className="flex justify-center" key={course.id}>
                <BackgroundGradient className=" flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                    <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                     <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                     <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                     <Link href={`/courses/${course.slug}`} className="py-1 px-2 rounded-lg mt-2 border border-neutral-700 hover:bg-neutral-800 text-sm">Learn more</Link>
                    </div>
                </BackgroundGradient>
            </div>
         )
        )}
      </div>
    </div>
    <div className="mt-20 text-center">
        <Link href={"/courses"}>
            <span className="inline-block bg-teal-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-500 transition duration-300">
                View all courses
            </span>
        </Link>
    </div>
</div>

  )
}

export default FeaturedCourses