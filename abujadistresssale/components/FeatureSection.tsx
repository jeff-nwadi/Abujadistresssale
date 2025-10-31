"use client"

import Image from 'next/image';
import lady from "./images/lady.jpg"
import artistic from "./images/artistic.jpg"
import Video from 'next-video';
import woman from "./images/woman-64.jpg"

export default function Feature1() {
  return (
    <section className="">
      <div className="px-2 lg:px-8">
        <div className=" mt-12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
           <div className="col-span-2 flex flex-col-reverse lg:flex-row-reverse gap-4"> 
                <div className="bg-[#A2EE2F] p-8 rounded-3xl flex-1">
                    <h2 className="py-5 text-5xl sm:text-6xl font-medium">Maximizing your orbit</h2>
                    <p className="pt-4 text-lg">
                        We increase brand visibility and awareness to attract new customers through
                        thoughtful storytelling and distinct and adaptable communications strategies.
                        With an unmatched consumer understanding and a true collaborative spirit,
                        we create magic for brands by bringing their authenticity and differentiated
                        perspective to the forefront.
                    </p>
                </div> 
                 <div className="flex-1">
                    <Image
                        src={lady}
                        alt=""
                        width={100}
                        height={100}
                        className="rounded-3xl h-[80vh] w-full object-cover"
                    /> </div>
            </div>

            <div className="col-span-2 flex flex-col-reverse md:flex-row-reverse gap-4">     
                <div className="bg-[#A2EE2F] p-8 rounded-3xl flex-1">
                    <h2 className="py-5 text-5xl sm:text-6xl font-medium">Maximizing your orbit</h2>
                    <p className="pt-4 text-lg">
                        We increase brand visibility and awareness to attract new customers through
                        thoughtful storytelling and distinct and adaptable communications strategies.
                        With an unmatched consumer understanding and a true collaborative spirit,
                        we create magic for brands by bringing their authenticity and differentiated
                        perspective to the forefront.
                    </p>
                </div> 
                <div className="flex-1">
                    <Image
                        src={artistic}
                        alt=""
                        width={100}
                        height={100}
                        className="rounded-3xl h-[80vh] w-full object-cover"
                    /> </div>
            </div>

           <div className="col-span-2 flex flex-col-reverse md:flex-col lg:flex-row-reverse gap-4"> 
                <div className="bg-[#A2EE2F] p-8 rounded-3xl flex-1">
                    <h2 className="py-5 text-5xl sm:text-6xl font-medium">Maximizing your orbit</h2>
                    <p className="pt-4 text-lg">
                        We increase brand visibility and awareness to attract new customers through
                        thoughtful storytelling and distinct and adaptable communications strategies.
                        With an unmatched consumer understanding and a true collaborative spirit,
                        we create magic for brands by bringing their authenticity and differentiated
                        perspective to the forefront.
                    </p>
                </div>  
                 <div className="flex-1">
                    <Image
                        src={woman}
                        alt=""
                        width={100}
                        height={100}
                        className="rounded-3xl h-[80vh] w-full object-cover"
                    /> </div>
            </div>
            </ul>

        </div>
      </div>
    </section>
  );
}
