"use client"
import { motion } from 'framer-motion'
import React from 'react'


const Hero = () => {
  return (
    
    <section className="bg-primary text-white h-screen flex items-center justify-center">
      <motion.h1 
      className="text-5xl font-bold text-center"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      >
        Empowering Your Workforce
      </motion.h1>
    </section>
    
   
  )
}

export default Hero