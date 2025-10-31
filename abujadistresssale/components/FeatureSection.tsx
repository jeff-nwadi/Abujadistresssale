"use client"

import Image from 'next/image';
import lady from "./images/lady.jpg"
import artistic from "./images/artistic.jpg"
import woman from "./images/woman-64.jpg"
import { ArrowUpRight } from "lucide-react"
import Link from 'next/link';

export default function Feature1() {
  return (
    <section className="">
      <div className="px-2 lg:px-8">
        <div className=" mt-12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
           <div className="col-span-2 flex flex-col-reverse lg:flex-row-reverse gap-4"> 
                <div className="bg-[#A2EE2F] p-12 rounded-3xl flex-1">
                    <h2 className="py-5 text-5xl sm:text-5xl font-medium">About us</h2>
                    <p className="pt-4 text-lg">
                        The Abuja distress sales is a one stop shop for quick, fast and credible trade and transactions.
                         We priorities our customer’s preferences and submit trade secrets to ensure that the purpose and reason 
                         for the trade commodity is achieved and within the fastest time possible. Our focus is on verifiable items,
                         and we confirm that we do our due diligence on each product to the comfort of the seller and the would be buyer..
                    </p>
                    <Link href="" className='flex gap-3 items-center mt-28'>
                        <div className='bg-white rounded-full p-2'>
                              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5  text-2xl" />
                        </div>
                      
                        <p className='uppercase'>Read more</p>
                    </Link>
                </div> 
                    <div className="relative flex-1 h-[80vh]">
                        <Image
                            src={lady}
                            alt="lady"
                            fill
                            className="rounded-3xl object-cover [image-rendering:auto]"
                            quality={100}
                            priority
                        />
                    </div>
                </div>

                <div className="col-span-2 flex flex-col-reverse md:flex-row-reverse gap-4">  
                      <div className="relative flex-1 h-[80vh]">
                        <Image
                            src={artistic}
                            alt="lady"
                            fill
                            className="rounded-3xl object-cover [image-rendering:auto]"
                            quality={100}
                            priority
                        />
                    </div>   
                    <div className="bg-[#A2EE2F] p-12 rounded-3xl flex-1">
                        <h2 className="py-5 text-5xl sm:text-6xl font-medium">Our Services</h2>
                        <p className="pt-2 text-lg sm:text-xl font-light">Sales, Consultancy & Media</p>
                        <p className="pt-4 text-lg">
                            We deliver powerful sales and consultancy solutions backed
                             by strategic media execution. Our team helps brands grow by combining sharp
                              business insight with compelling visuals and storytelling. Whether through expertly planned
                               campaigns, stunning imagery, or engaging videos, we make your message impossible to ignore. 
                               From identifying new market opportunities to positioning your brand for success, 
                               we turn ideas into measurable results and lasting connections.
                        </p>

                            <Link href="" className='flex gap-3 items-center mt-30'>
                        <div className='bg-white rounded-full p-2'>
                              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5  text-2xl" />
                        </div>
                      
                        <p className='uppercase'>Our services</p>
                    </Link>
                        <div>

                        </div>
                    </div> 
                </div>

            <div className="col-span-2 flex flex-col-reverse md:flex-col lg:flex-row-reverse gap-4"> 
                    <div className="bg-[#A2EE2F] p-12 rounded-3xl flex-1">
                        <h2 className="py-5 text-5xl sm:text-6xl font-medium">Contact us</h2>
                        <p className="pt-4 text-lg ">
                            Address: No 2, kokoma close, wuse II, Abuja <br />
                        Contact Phone Numbers: +2347010050028 <br />

                        </p>

                        {/* <Link href="" className='flex gap-3 items-center mt-30'>
                        <div className='bg-white rounded-full p-2'>
                              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5  text-2xl" />
                        </div>
                      
                        {/* <p className='uppercase'>Our services</p> */}
                    {/* </Link>  */}
                    </div>  
                    <div className="relative flex-1 h-[80vh]">
                        <Image
                            src={woman}
                            alt="lady"
                            fill
                            className="rounded-3xl object-cover [image-rendering:auto]"
                            quality={100}
                            priority
                        />
                    </div>
                </div>
            </ul>
            </div>
        </div>
    </section>
  );
}
