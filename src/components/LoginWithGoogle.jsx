'use client'
import { FaGoogle } from 'react-icons/fa6'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'
import { cn } from '@/lib/utils'

const LoginWithGoogleButton = () => {
  return (
    <Button 
   
      onClick={async () => await signIn('google', { callbackUrl: '/' })}
    >
      <span className="flex items-center gap-2  ">
        Login
        <FaGoogle />
      </span>
    </Button>
  )
}

export default LoginWithGoogleButton