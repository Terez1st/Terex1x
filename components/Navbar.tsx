"use client"

import React, { useRef } from 'react'
import { Separator } from "@/components/ui/separator"
import {
  RiExchangeDollarFill as Icon,
  RiExchangeFundsFill as Icon2,
  RiExchangeCnyFill as Icon3
} from "react-icons/ri"
import { IconType } from "react-icons"
import { ModeToggle } from './mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from './ui/button'
import MarketMode from './MarketMode'
import { SeparatorVertical } from 'lucide-react'
import SvgComponent from "@/components/icons/pm"

const Navbar = () => {
  const random = Math.floor(Math.random() * 3) + 1
  const seed = useRef(random)

  const RandomIcon = ({seed}: {seed: number}) => {
    if (seed === 1) return <Icon className="w-6 h-6"/>
    else if (seed === 2) return <Icon2 className="w-6 h-6"/>
    else if (seed === 3) return <Icon3 className="w-6 h-6"/>
    else return <Icon className="w-6 h-6"/>

  }

  return (
    <nav className=''>
      <div className='container mx-auto px-4 h-16 flex items-center justify-center'>
        <RandomIcon seed={seed.current}/>

        <div className='ml-auto sm:ml-auto md:ml-0 flex items-center'>
        <a href='#' className='text-center text-lg ml-2 dark:text-gray-100 text-gray-900 font-bold'>
          Sarifle
        </a>
        </div>

        <div className='hidden sm:block'>
          <MarketMode />
        </div>

        <Separator className='hidden md:block h-12' orientation='vertical'/>

        <div className='ml-auto mr-1 flex items-center'>
          <ModeToggle />
        </div>

        <div className="">
        <Button variant="outline" size="icon" className={`border-none active:border-none`}>
          <Avatar className='w-7 h-7'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
        </div>

      </div>

      <Separator />
    </nav>
  )
}

export default Navbar