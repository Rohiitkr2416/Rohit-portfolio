import React from "react";
import vpn from '../assets/vpn.png';
import copeople from '../assets/copeople.png';
import khana from '../assets/khana.jpg';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </a>
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className="m-2 sm:m-4 lg:m-6 flex justify-between">
                <div className="flex flex-wrap gap-2 pl-2">
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className="text-[14px] text-blue-500"
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a
                    href={git}
                    className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <div className="flex-grow flex flex-wrap gap-7 justify-center items-center p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const project = [
    {
        title: 'Co People',
        description: 'Co People is a dynamic web application I crafted using React, Node.js, and MongoDB. This project is a modern and engaging social platform that allows users to connect, share content, and interact seamlessly.',
        image: copeople,
        git: 'https://github.com/nithingooud/CoPeople',
        technologies: ['MongoDB', 'ReactJS', 'NodeJS']
    },
    {
        title: 'Snap Shot',
        description: 'SnapShot is a stunning portfolio that I exclusively designed using React JS and Tailwind CSS. This project serves as a representation of a photographer’s work, highlighting their portfolio and services.',
        image: vpn,
        git: "https://github.com/nithingooud/vpn_studios",
        technologies: ['React JS', 'Tailwind CSS','HTML', 'MongoDB']
    },
    {
        title: 'Khana Khao',
        description: 'Khana Khao is a food delivery web application I created using React.js, JavaScript, HTML, and CSS. This project allows users to place food orders and manage their accounts with full CRUD functionality. ',
        image: khana,
        git: "https://github.com/Rohiit2416/khana-khao",
        technologies: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'MongoDB']
    }
];

export default Projects;