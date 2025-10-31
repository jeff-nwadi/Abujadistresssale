'use client'

import Link from 'next/link'
import { Button } from './ui/button';
import { motion } from "motion/react"
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Logo from "../public/Main.png"


const Header = () => {

  return (
        <main className="min-h-screen">
        {/* NAV */}
        <div className=' hero-section '>
            <div className="w-full flex justify-between items-center lg:px-33 lg:py-16 sm:px-12 py-6 z-10 px-8">
                <h2 className="uppercase text-white font-bold text-xl sm:text-3xl z-10">
                    <Image src = {Logo.src} alt='logo' height={30} width={100}></Image>
                </h2>

                <ul className="hidden sm:flex gap-6 text-white font-medium text-sm sm:text-lg z-10">
                <li><Link href="">About us</Link></li>
                <li><Link href="">Services</Link></li>
                <li><Link href="">Contact us</Link></li>
                </ul>

                {/* MOBILE MENU PLACEHOLDER */}
                <div className="md:hidden z-10">
                    <Menu className='text-white' />
                </div>
            </div>

            {/* HERO TEXT */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
                <h1 className="text-3xl sm:text-5xl lg:text-7xl text-white font-semibold max-w-3xl">
                Where Strategy Meets Storytelling.
                </h1>

                <p className="text-white font-light mt-3 text-sm sm:text-base max-w-xl">
              Sales, consultancy, and media crafted to elevate brands and spark real growth.
                </p>

                <Button className="mt-6 rounded-full hover:bg-[#A2EE2F]/80 bg-[#A2EE2F] text-[#243C00] font-semibold flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-base">
                <Link href="#">
                    <span className="uppercase tracking-wide">
                    View work
                    </span>
                </Link>
                <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
                </Button>
            </div>
            <div className='bg-[#00000080] h-full w-full absolute inset-0 '></div>
         </div>
        </main>
 
  )
}

export default Header
