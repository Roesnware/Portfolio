import {
    Backend_skill,
    Frontend_skill,
    Other_skill,
} from "@/constants";

import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import { motion } from 'framer-motion'

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
            style={{ transform: "scale(0.9" }}
        >

            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                <div className="font-bold bg-clip-text bg-black text-purple-900 text-3xl">Front-End</div>
                {Frontend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                <div className="font-bold bg-clip-text bg-black text-purple-900 text-3xl">Back-End</div>
                {Backend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                <div className="font-bold bg-clip-text bg-black text-purple-900 text-3xl">Other</div>
                {Other_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>

            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/sasuke.mp4"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;