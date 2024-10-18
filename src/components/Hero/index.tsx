import React, { Fragment } from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    
    <section className="bg-primary text-white h-screen flex items-center justify-center"  style={{ backgroundImage: "url('/src/assets/hero.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-5xl font-bold">Empowering Your Workforce</h1>
    </section>
    
   
  )
}

export default Hero