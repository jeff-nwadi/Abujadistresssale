import React from 'react'
import FooterAnimated from './mvpblocks/footer-animated'
import Logo from "../components/images/Main.png"
import Image from 'next/image'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        className='text-center text-5xl mb-12'>
           <div className='flex items-center justify-center mb-5'>
             <Image src={Logo.src} alt='logo' height={40} width={100}></Image>
        </div>
      <FooterAnimated />
    </motion.div>
    </div>
  )
}

export default Footer
