// import { motion } from 'framer-motion';




const About = () => {
  return (
    <section id="about" className="py-20 text-center bg-slate-100">
      {/* <motion.h2 
        className="text-primary text-3xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h2> */}
      <h2 
      className="text-primary text-3xl font-bold"
      >About Us</h2>
      <div className='md:flex justify-center items-center mt-4'>
        <div className='md:flex justify-between items-start md:w-[70%]'>
          <div className='text-center md:w-[40%]'>
            <h4>Vision</h4>
            <p className="mt-4 text-gray-500">To become a premier organization dedicated to enhancing both personal and professional capacities of individuals and businesses, fostering efficiency, heightened productivity, and innovation.</p>
          </div>
          <div className='text-center md:w-[40%] mt-4 md:mt:0'>
            <h4>Mission</h4>
            <p className="mt-4 text-gray-500">Our mission is to cultivate an empowering atmosphere for skill acquisition and capacity enhancement that heralds a holistic growth and developent for individuals and organizations.</p>
          </div>
        </div> 
      </div>
     
     
    
    </section>
  )
}

export default About