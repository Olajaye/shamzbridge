"use client"
import { assets } from '@/assets/assets'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


const Hero = () => {
  return (
    <section className="text-white md:h-screen mt-16">
      <motion.div
      initial={{ opacity: 0, scale: 0, x:-100 }}
      
      whileInView={{ opacity: 1,  
        scale: [0.9, 1, 1, 0.8, 1],
        x:0,
        borderRadius: ["20%", "50%", "50%", "50%", "20%"],
        
      }}
      transition={{ duration: 2, repeat: Infinity, 
        repeatType: 'reverse', }}
      >
       <Image src={assets.Hero} alt='Hero' className='w-[100%] md:h-screen'/>
      </motion.div>
    </section>
  )
}

export default Hero