"use client"
import { Services } from './constant'
import { motion } from 'framer-motion'


const Service = () => {
  return (
    <section id="services" className="py-20 text-center bg-primary px-5 md:px-10">
      <motion.h2 
        className="text-secondary text-3xl font-bold"
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5}}
      >
        Our Services
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1}}
        className='text-grayText px-3'
      >
        Explore our diverse offerings and experience unparalleled excellence from tailored solutions to personalized consultations.
      </motion.p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4'>
        {
          Services.map((service, index)=> (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            key={index} className='rounded-md shadow-md hover:shadow-2xl  p-4'>
            <h4 className='t ext-xl font-semibold text-black'>{service.title}</h4>
            <p className='text-grayText mt-3'>{service.text}</p>
          </motion.div>))
        }
        
       
      </div>
    </section>
  )
}

export default Service