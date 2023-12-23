import React from 'react'
import Image from "next/image"
import { Socials } from '@/constants'

const NavBar = () => {
    return (
        <div className='fixed w-full h-[65px] top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] ">
                <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
                    <Image src="/rinnegan-logo.png" alt="logo" width={40} height={40} className='cursor-pointer hover:animate-spin' />

                    <span className='font-bold ml-[10px] hidden md:block text-gray-300'>Roesnware</span>
                </a>
                <div className="flex-row h-full w-[500px] flex md:mr-20 justify-between items-center">
                    <div className="flex border justify-between items-center border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] rounded-full w-full h-auto py-[10px] text-gray-200">
                        <a href="#about-me" className='cursor-pointer hover:underline'>.aboutMe()</a>
                        <a href="#skills" className='cursor-pointer hover:underline'>.skills()</a>
                        <a href="#projects" className='cursor-pointer hover:underline'>.projects()</a>
                        <a href="#contact-me" className='cursor-pointer hover:underline'>.contactMe()</a>
                    </div>
                </div>

                <div className="flex flex-row gap-5">
                    {Socials.map((social) => (
                        <a href={social.external} target='_blank' key={social.name}>
                            <Image
                                src={social.src}
                                alt={social.name}
                                key={social.name}
                                width={24}
                                height={24}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NavBar