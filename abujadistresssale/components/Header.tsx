'use client'

import Link from 'next/link'
import { Button } from './ui/button';
import { motion } from "motion/react"
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Logo from "../public/Main.png"
import Comp from "../components/comp-86"


const Header = () => {

  return (
        <main className="min-h-screen">
        {/* NAV */}
        <div className=' hero-section '>
            <div className="w-full flex justify-between items-center lg:px-33 lg:py-16 sm:px-12 py-6 z-10 px-8">
                <motion.h2 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                className="uppercase text-white font-bold text-xl sm:text-3xl z-10">
                    <Image src = {Logo.src} alt='logo' height={30} width={75}></Image>
                </motion.h2>

                <motion.ul 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                className="hidden md:flex gap-6 text-white font-medium text-sm sm:text-lg z-10">
                    <li><Link href="">About us</Link></li>
                    <li><Link href="">Services</Link></li>
                    <li><Link href="">Contact us</Link></li>
                </motion.ul>

                {/* MOBILE MENU PLACEHOLDER */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                className="md:hidden z-10">
                    <Menu className='text-white' />
                </motion.div>
            </div>

            {/* HERO TEXT */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
                <motion.h1 
                    initial={{ opacity: 0, y: -50}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl sm:text-5xl lg:text-7xl text-white font-semibold max-w-3xl">
                    <motion.span
                    initial={{ opacity: 0, y: -20}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >Where Strategy Meets
                    </motion.span>
                    <motion.span
                    initial={{ opacity: 0, y: -20}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                    Storytelling.  
                    </motion.span> 
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: -20}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-white font-light mt-3 text-md sm:text-xl md:max-w-xl max-w-3xl w-sm md:w-2xl">
                    Sales, consultancy, and media crafted to elevate brands and spark real growth.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className='mt-6'>
                    <Comp />
                </motion.div>    
            </div>
            <div className="absolute inset-0 w-full h-screen bg-black/50 sm:bg-black/40 md:bg-black/30 lg:bg-black/20"></div>
         </div>
        </main>
  )
}

export default Header
