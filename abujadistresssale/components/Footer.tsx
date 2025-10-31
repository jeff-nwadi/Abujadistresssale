import React from 'react'
import FooterAnimated from './mvpblocks/footer-animated'
import Logo from "../components/images/Main.png"
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
        <div className='text-center text-5xl mb-12'>
           <div className='flex items-center justify-center mb-5'>
             <Image src={Logo.src} alt='logo' height={40} width={100}></Image>
        </div>
      <FooterAnimated />
    </div>
    </div>
  )
}

export default Footer
