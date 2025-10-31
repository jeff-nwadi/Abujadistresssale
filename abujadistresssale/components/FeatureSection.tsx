"use client";

import Image from "next/image";
import lady from "./images/lady.jpg";
import artistic from "./images/artistic.jpg";
import woman from "./images/woman.jpg";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Feature1() {
  return (
    <section>
      <div className="px-2 lg:px-8 mt-12">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {/* Section 1 */}
          <li className="col-span-2 flex flex-col-reverse lg:flex-row-reverse gap-4">
            <div className="bg-[#064420] p-8 md:p-12 rounded-3xl flex-1">
              <h2 className="py-5 text-4xl sm:text-5xl font-medium text-[#FFD700]">
                About us
              </h2>
              <p className="pt-4 text-base sm:text-lg text-[#FFECB3]">
                The Abuja distress sales is a one stop shop for quick, fast and credible trade and transactions. 
                We priorities our customer’s preferences and submit trade secrets to ensure that the purpose and reason for the trade 
                commodity is achieved and within the fastest time possible. Our focus is on verifiable items, 
                and we confirm that we do our due diligence on each product to the comfort of the seller and the would be buyer.

              </p>
              <Link href="#" className="flex gap-3 items-center mt-33">
                <div className="bg-[#FFECB3] rounded-full p-2">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-2xl" />
                </div>
                <p className="uppercase text-[#FFECB3]">Read more</p>
              </Link>
            </div>
            <div className="relative flex-1 h-[50vh] sm:h-[70vh] lg:h-[80vh]">
              <Image
                src={lady.src}
                alt="lady"
                fill
                className="rounded-3xl object-cover"
                quality={100}
                priority
              />
            </div>
          </li>

          {/* Section 2 */}
          <li className="col-span-2 flex flex-col-reverse md:flex-row-reverse gap-4">
            <div className="relative flex-1 h-[50vh] sm:h-[70vh] lg:h-[80vh]">
              <Image
                src={artistic.src}
                alt="artistic"
                fill
                className="rounded-3xl object-cover"
                quality={100}
                priority
              />
            </div>
            <div className="bg-[#064420] p-8 md:p-12 rounded-3xl flex-1">
              <h2 className="py-5 text-4xl sm:text-5xl font-medium text-[#FFD700]">
                Services 
              </h2>
              <h2 className="text-[#fbe4a2]">Sales, Consultancy & Media</h2>
              <p className="pt-4 text-base sm:text-lg text-[#FFECB3]">
                We deliver powerful sales and consultancy solutions backed by strategic media execution. 
                Our team helps brands grow by combining sharp business insight
                 with compelling visuals and storytelling. 
                Whether through expertly planned campaigns, stunning imagery, 
                or engaging videos, we make your message impossible to ignore.
                 From identifying new market opportunities to positioning your brand for success, 
                 we turn ideas into measurable results and lasting connections.
              </p>
              <Link href="#" className="flex gap-3 items-center mt-10">
                <div className="bg-[#FFECB3] rounded-full p-2 ">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-2xl" />
                </div>
                <p className="uppercase text-[#FFECB3]">Our services</p>
              </Link>
            </div>
          </li>

          {/* Section 3 */}
          <li className="col-span-2 flex flex-col-reverse lg:flex-row-reverse gap-4">
            <div className="bg-[#064420] p-8 md:p-12 rounded-3xl flex-1">
              <h2 className="py-5 text-4xl sm:text-5xl font-medium text-[#FFD700]">
                Contact us
              </h2>
              <p className="pt-4 text-base sm:text-lg text-[#FFECB3]">
                Address: No 2, kokoma close, wuse II, Abuja
              </p>
               <p className="pt-4 text-base sm:text-lg text-[#FFECB3]">
                Contact Phone Numbers: +2347010050028
              </p>
               <p className="pt-4 text-base sm:text-lg text-[#FFECB3]">
                All social media handles: @abjdistresssales 
              </p>
            </div>
            <div className="relative flex-1 h-[50vh] sm:h-[70vh] lg:h-[80vh]">
              <Image
                src={woman.src}
                alt="woman"
                fill
                className="rounded-3xl object-cover"
                quality={100}
                priority
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
