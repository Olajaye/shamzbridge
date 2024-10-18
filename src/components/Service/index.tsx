import React from 'react'
import { Services } from './constant'


const Service = () => {
  return (
    <section id="services" className="py-20 text-center bg-white px-5 md:px-10">
      <h2 className="text-primary text-3xl font-bold">Our Services</h2>
      <p className='text-grayText'>Explore our diverse offerings and experience unparalleled excellence from tailored solutions to personalized consultations.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4'>
        {
          Services.map((service, index)=> (<div key={index} className='rounded-md shadow-md hover:shadow-2xl  p-4'>
            <h4 className='text-xl font-semibold text-black'>{service.title}</h4>
            <p className='text-grayText mt-3'>{service.text}</p>
          </div>))
        }
        
       
      </div>
    </section>
  )
}

export default Service