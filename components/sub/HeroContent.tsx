"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroContent = () => {
    return (
        <motion.div className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]
    ' animate='visible' initial='hidden'>
            <div id='about-me' className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <div className='flex gap-4'>
                    <motion.div className='Welcome-box py-[8px] px-[4px] border border-[#7024f88b] opacity-[0.9]' variants={slideInFromTop}>
                        <h1 className='Welcome-text text-[13px]'>Full Stack Developer</h1>
                    </motion.div>
                    <motion.div className='Welcome-box py-[8px] px-[4px] border border-[#7024f88b] opacity-[0.9]' variants={slideInFromTop}>
                        <h1 className='Welcome-text text-[13px]'>Anime Enthusiast</h1>
                    </motion.div>
                </div>
                <motion.div className='flex flex-col gap-6 mt-6 text-4xl font-bold text-white max-w-[600px] w-auto h-auto' variants={slideInFromLeft(0.5)}>
                    <span className='py-6'>
                    Hello, my name is,
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-500 text-7xl'> Trae </span>
                    </span>
                    <TypeAnimation
                        sequence={[
                            'I am a Software developer',
                            1000,
                            'I am a Full Stack Web developer',
                            1000,
                            'I am a Innovative Problem Solver',
                            1000,
                        ]}
                        wrapper="span"
                        speed={15}
                        repeat={Infinity}
                        style={{fontSize:25}}
                    />
                </motion.div>
                <motion.p className='text-lg text-gray-400 my-5 max-w-[600px]' variants={slideInFromLeft(0.8)}>
                    I&apos;m a Full Stack Web Developer with experience in building responsive/modern websites and Software Development. I am based in Orlando FL, pursuing a BS degree in CS/Math at UCF, I also recently graduated a full stack web development bootcamp hosted by EdX and UCF. I enjoy anime, gaming and coding of course! Check out my projects and skills below!
                </motion.p>
                <motion.a href="https://drive.google.com/file/d/1WsBGsJfH03T_CV_AjIn0ODNDny1GCN_R/view?usp=sharing" download="TraeRoy_Resume.pdf" target="_blank" className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]' variants={slideInFromLeft(1)}>
                    Download Resume
                </motion.a>
            </div>
            <motion.div className='w-full h-full justify-center items-center flex' variants={slideInFromRight(0.8)}>
                <Image src='/mainIconsdark.svg' alt='work icons' width={650} height={650} />
                <Image src='/rinnegan.avif' alt='sasuke rinnegan' width={650} height={650} className='opacity-[.03] absolute' />
            </motion.div>
        </motion.div>
    )
}

export default HeroContent