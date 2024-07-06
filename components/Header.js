"use client"
import { CirclePlus, LogIn, LogOut } from 'lucide-react'
import { useSession, signIn, signOut} from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    const USER_IMAGE='https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg'
    const {data:session} = useSession()
    console.log("Session", session)
  return (
    <div className='flex justify-between p-5 border-b-[2px] border-[#FF3366]'>
        <img 
            src = "/images/logo.png" 
            alt = "logo"
            width = {150}
        />
        <div className='flex gap-4 items-center'>
            <button className='bg-black p-2 px-3 text-white rounded-full  flex items-center gap-1'>
                <span className='hidden sm:block'>CREATE POST</span><CirclePlus size = {25} className=''/>
            </button>
            {!session ? (<button 
                className='bg-white p-2 px-3 text-black border-[1px] rounded-full flex items-center gap-1'
                onClick = {()=>signIn()}
            >
                <span className='hidden sm:block'>SIGN IN</span><LogIn size = {25} className=''/>
            </button>)
            :(<button 
            className='bg-white p-2 px-3 text-black border-[1px] rounded-full flex items-center gap-1'
            onClick = {()=>signOut()}
            >
            <span className='hidden sm:block'>SIGN OUT</span><LogOut size = {25} className=''/>
            </button>)
            
            }
            <Image 
                src = {session?.user?.image || USER_IMAGE}
                alt = "user image"
                width = {40}
                height = {40}
                className='rounded-full'
            />
        </div>
    </div>
  )
}

export default Header
