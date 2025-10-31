"use client"

import React from 'react'
import TestimonialsCarousel from './mvpblocks/testimonials-carousel'
import { motion } from 'framer-motion'

const Carousel = () => {
  return (
    <div className='py-24'>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 flex justify-between items-center px-4 sm:px-12 "
            >
            <h1 className="from-foreground to-foreground/40 mb-4 bg-gradient-to-b bg-clip-text text-3xl font-bold text-transparent md:text-5xl lg:text-6xl ">
                Follow us
            </h1>

            <motion.div
                className=""
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
            > 
                <h2 className='text-muted-foreground text-2xl md:text-3xl'>

 @abjdistresssales
</h2>
            </motion.div>
            </motion.div>
      <TestimonialsCarousel />
    </div>
  )
}

export default Carousel
