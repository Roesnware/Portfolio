import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 py-20">
                My Projects
            </h1>
            <div className="h-full w-[80%] flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/koi-ss.jpg"
                    title="Koi Invoicing Platform"
                    description="Introducing our MERN stack invoicing platform tailored for small businesses and independent professionals. Streamline your billing process with our user-friendly interface, seamlessly integrating MongoDB, Express.js, React, and Node.js. From creating and managing invoices to tracking payments, our full-stack web application offers a robust solution for your invoicing needs. Simplify your financial workflow and focus on your work. Start invoicing with ease today!"
                    srcCode="https://github.com/jradmorrison/koi-invoicing?tab=readme-ov-file"
                    liveSite="https://koi-invoicing-6238f5ad379e.herokuapp.com/"
                />
                <ProjectCard
                    src="/smg-ss.jpg"
                    title="Share My Games"
                    description="Welcome to our game-centric app, your personalized hub for gaming experiences! Easily discover, track, and engage with your favorite games by favoriting them and leaving insightful reviews. Unleash your passion by sharing feedback, tips, and ratings, fostering a vibrant community of gamers. Seamlessly navigate through titles, curate your collection, and explore user-generated reviews to make informed gaming choices. Elevate your gaming journey with our app, where your voice shapes the gaming landscape!"
                    srcCode="https://github.com/cpicha20/SMG"
                    liveSite="https://share-my-game-566086c3c183.herokuapp.com/"
                />
                <ProjectCard
                    src="/tech-ss.jpg"
                    title="Tech Blog"
                    description="Introducing our cutting-edge tech blog application - your gateway to the latest in technology trends, innovations, and insights. Dive into a dynamic platform offering curated articles, expert opinions, and in-depth analysis across diverse tech spheres. Seamlessly navigate through a user-friendly interface, discover comprehensive reviews, stay updated on industry breakthroughs, and engage with a vibrant community of tech enthusiasts. Elevate your tech knowledge and stay ahead in the ever-evolving digital landscape with our immersive and informative tech blog application."
                    srcCode="https://github.com/Roesnware/tech_blog"
                    liveSite="https://blogpost-ucfbootcamp-133682c41872.herokuapp.com/"
                />
            </div>
        </div>
    );
};

export default Projects;