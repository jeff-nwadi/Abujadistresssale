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
            <div className="bg-[#A2EE2F] p-8 md:p-12 rounded-3xl flex-1">
              <h2 className="py-5 text-4xl sm:text-5xl font-medium">
                Infusing creative alchemy into today's brands
              </h2>
              <p className="pt-4 text-base sm:text-lg">
                We increase brand visibility and awareness to attract new
                customers through thoughtful storytelling and distinct,
                adaptable communications strategies. With unmatched consumer
                understanding and true collaboration, we bring brands'
                authenticity and perspective to life.
              </p>
              <Link href="#" className="flex gap-3 items-center mt-10">
                <div className="bg-white rounded-full p-2">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-2xl" />
                </div>
                <p className="uppercase">Our services</p>
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
            <div className="bg-[#A2EE2F] p-8 md:p-12 rounded-3xl flex-1">
              <h2 className="py-5 text-4xl sm:text-5xl font-medium">
                Maximizing your orbit
              </h2>
              <p className="pt-4 text-base sm:text-lg">
                We boost brand awareness through innovative storytelling and
                adaptable strategies. Our deep consumer insight and collaborative
                approach help brands showcase their most authentic selves.
              </p>
              <Link href="#" className="flex gap-3 items-center mt-10">
                <div className="bg-white rounded-full p-2">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-2xl" />
                </div>
                <p className="uppercase">Our services</p>
              </Link>
            </div>
          </li>

          {/* Section 3 */}
          <li className="col-span-2 flex flex-col-reverse lg:flex-row-reverse gap-4">
            <div className="bg-[#A2EE2F] p-8 md:p-12 rounded-3xl flex-1">
              <h2 className="py-5 text-4xl sm:text-5xl font-medium">
                Designing stories that sell
              </h2>
              <p className="pt-4 text-base sm:text-lg">
                We connect brands to their audiences through strategy, creativity,
                and seamless execution — driving both engagement and results.
              </p>
              <Link href="#" className="flex gap-3 items-center mt-10">
                <div className="bg-white rounded-full p-2">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-2xl" />
                </div>
                <p className="uppercase">Our services</p>
              </Link>
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
