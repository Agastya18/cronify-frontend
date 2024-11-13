'use client'

import Link from 'next/link'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaGoogle } from 'react-icons/fa6'
import Logo from '@/public/logo.svg'
import UserImage from './UserImage'
import { FaWallet } from 'react-icons/fa6'
import { LogOut, Menu, UserRound } from 'lucide-react'
import ProfileDropDown from '../ProfileDrop'
import LoginWithGoogleButton from '../loginWithGoogle'
import { signIn } from 'next-auth/react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu'
  const dropDownData = [
    {
      name: 'Profile',
      icon: <UserRound size={15} />,
      href: '/profile',
    },
  ]
const Navbar = () => {
    const router = useRouter()
    const { data } = useSession()
    // console.log("'data",data)
  //  const [isMounted, setIsMounted] = useState(false)
 
  return (
    <header className="w-screen py-4 border-b md:border-none fixed top-0 left-0  right-0 bg-[#DAF872] md:bg-white/0 z-40 ">
   
    <div className="container  px-3    ">
    
      <div className="    flex justify-between items-center md:border md:p-2.5  rounded-full max-w-xl lg:max-w-xl mx-auto   lg:ml-[430px] md:bg-[#DAF872] md:backdrop:blur-xl ">
          
       
          <div className="border   h-10 w-10 rounded-lg inline-flex justify-center items-center">
          
            <Image src={Logo} alt='logo' className=' ' />
          </div>
    
        <div className="hidden md:block">
          <nav className="flex gap-8   font-semibold">
            <Link
              className="text-black/70 hover:text-black transition"
              href="#"
            >
              Products
            </Link>
            <Link
              className="text-black/70 hover:text-black transition"
              href="#"
            >
              Feature
            </Link>
            <Link href={'#faq'}
              className="text-black/70 hover:text-black transition"
              
            >
              FAQ
            </Link>
           
          </nav>
        </div>
        <div className="flex gap-4 items-center">
         
         
          {data && data?.user ? <ProfileDropDown/>: (
            <>
             
            <button onClick={async () => await signIn('google', { callbackUrl: '/' })} className=' cursor-pointer hover:scale-105 transition-all duration-500 bg-black text-white p-4  rounded-3xl'>
            <FaGoogle />
            </button>
            </>
          )}
         
         
        </div>
      </div>
    </div>
  </header>

  )
}

export default Navbar