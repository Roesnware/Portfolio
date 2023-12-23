import Image from "next/image";
import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
    srcCode: string;
    liveSite: string;
}

const ProjectCard = ({ src, title, description, srcCode, liveSite }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="w-full object-contain"
            />
            <div className="flex flex-row justify-around items-center">
                <a href={srcCode} className="mt-2 text-gray-300 hover:underline" target="_blank">Source Code</a>
                <a className="mt-2 hover:underline text-gray-300" href={liveSite} target="_blank">Live Site</a>
            </div>

            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;