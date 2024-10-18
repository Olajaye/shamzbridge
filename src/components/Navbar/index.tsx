"use client"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";

type Props = {}

const Navbar  = (props: Props) => {
  const [openMenu, setOpenMeanu]=useState(false)
  return (
    <nav className="bg-secondary text-white p-4 fixed w-[100%] top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src={assets.LOGO} alt='Logo' className='w-[250px]'/>
        </Link>
        <div className='md:hidden' onClick={()=> setOpenMeanu(!openMenu)}><CiMenuFries  className='text-4xl text-primary'/></div>
        <div className='md:flex justify-between items-center hidden '>
          <Link href="#about">
            <p className="px-4 font-extrabold">About Us</p>
          </Link>
          <Link href="#services">
            <p className="px-4 font-extrabold">Services</p>
          </Link>
        </div>
        
        
        
      </div>
     {openMenu && <ul className="mt-4 space-y-2 text-black">
        
        <Link href="#about">
          <li className="px-4 font-extrabold">About Us</li>
        </Link>
          
        <Link href="#about">
            <li className="px-4 font-extrabold">Service</li>
        </Link>
          
      </ul>}
    </nav>
  )
}

export default Navbar