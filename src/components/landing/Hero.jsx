'use client'
import React from 'react'
import Navbar from '../layout/Navbar';
import Image from 'next/image'
import { Ticket } from 'lucide-react';
import Link from 'next/link'
import { motion } from "framer-motion";
import { Badge } from '../ui/badge'
import logo from '@/public/logo.svg'
import { Button } from '@/components/ui/button'
import { FaGoogle } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import { FaGithub } from "react-icons/fa";
import { signIn, useSession } from 'next-auth/react'
import cam from '@/public/cam.svg'
const Hero = () => {
    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };
  const session = useSession()
  const router = useRouter()
    const gitHubStars=1
  return (
    <section className="items-center md:mt-40 mt-28">
      {/* <Navbar/> */}
      <div className="container relative mx-auto px-4">
      
        
        <Image
          src={logo}
          alt=""
          className="absolute md:right-[20%] right-[10%] lg:right-[28%] rotate-12 md:top-[26%] top-[34%] lg:top-[34%] mt-8"
          width={40}
          height={40}
        />
        
        <div className="max-w-[600px] lg:max-w-[900px] mx-auto">
       <div className=' flex items-center justify-center mb-2 '>
      <div className='rounded-full bg-slate-200 mb-4'>
      {gitHubStars ? (
          <Link
            href={'https://github.com/agastya18'}
            target="_blank"
            rel="noreferrer"
            className="z-10"
          >
            <Badge
              variant="outline"
              aria-hidden="true"
              className="rounded-md px-3.5 py-1.5 text-sm transition-all duration-1000 ease-out hover:opacity-80 md:text-base md:hover:-translate-y-2"
            >
              {/* <Icons.gitHub className="mr-2 size-3.5" aria-hidden="true" /> */}
              <FaGithub className="mr-2 size-3.5" />
              {gitHubStars} Stars on GitHub
            </Badge>
            <span className="sr-only">GitHub</span>
          </Link>
        ) : null}
      </div>
       </div>
        
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-black/70 text-transparent bg-clip-text text-center">
           Wake up Your Sleepy  <span className="bg-gradient-to-r from-pink-800 to-purple-500 bg-clip-text font-extrabold text-transparent ">
           Servers! 
            </span> 
          </h1>

          <p className=" text-2xl tracking-tighter text-black/70 text-center mt-5">
          Automate Your Uptime, Effortlessly! <br className="hidden md:block" />  Because even server need a good poke now and then. We will keep your cold start hot <br className="hidden md:block" /> and your downtime down.
          </p>
        </div>
        <div className="flex   items-center justify-center mt-5 text-white">
          {/* {!session?.data?.user ? (
            <Button
              className="pl-2 py-6 text-sm md:text-base bg-black rounded-2xl hover:bg-black "
              onClick={async () => {
               await signIn('google')
              }}
            >
              <span className="flex items-center gap-2">
                <div className="px-3 py-2 rounded-full border bg-white text-black">
                  <FaGoogle />
                </div>
                Sign up with Google
              </span>
            </Button>
          ) : (
            <Button
              className="pl-3 py-6 text-sm bg-black md:text-base rounded-2xl hover:bg-black"
              onClick={() => {
                router.push('/event')
              }}
            >
              <span className="flex items-center gap-2 ">
                <div className="px-3 py-2 rounded-full bg-white text-black ">
                <Ticket className=' rounded-full' />
                </div>
                Go to events
              </span>
            </Button>
          )} */}
          <motion.button
          variants={item}
          className="group relative overflow-hidden overflow-x-hidden font-medium rounded-full text-xl py-5 px-6 bg-[#DAF872] text-black hover:border-black border border-[#DAF872]"
        >
          <span className="relative z-10">
            {session?.user ? (
              <Link href={"/dashboard"}>Go to Dashboard</Link>
            ) : (
              <Link href={"/dashboard"}>Get Started</Link>
            )}
          </span>
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
        </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Hero