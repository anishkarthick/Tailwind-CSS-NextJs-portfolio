"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUP";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const personalProjects = [
  {
    name: "Movie booking api",
    description:
      "Movie booking api is a simple ticketing system that facilitates the booking of tickets",
    image: "/ticketbooking.png",
    github: "https://github.com/anishkarthick/movieBooking",
    link: "",
  },
  {
    name: "Chat box",
    description:
      "The ChatBox is constructed with socket.io, node, and express, allowing for two-way chat within the browser and the sharing of locations and photos.",
    image: "/chatbox.jpg",
    github: "https://github.com/anishkarthick/Mongo_Chat",
    link: "",
  },
  {
    name: "TODO List",
    description:
      "A TODO List is a tool used to keep track of tasks, assignments, or activities that need to be completed. It is a simple and effective way to stay organized and ensure that important items are not forgotten or overlooked.",
    image: "/TODO.jfif",
    github: "https://github.com/anishkarthick/mern-todo-ui",
    link: "",
  },
  {
    name: "Weather App",
    description:
      "A simple weather app is an application that provides basic weather information for a specific location.",
    image: "/chatcloud.jpg",
    github: "https://github.com/anishkarthick/node-weather",
    link: "",
  },
  {
    name: "Crud Application",
    description:
      "A CRUD (Create, Read, Update, Delete) application is a software application that allows users to perform basic database operations on data records. It is a type of database management system that enables users to create new records, read or retrieve existing records, update or modify records, and delete records from a database.",
    image: "/crud.png",
    github: "https://github.com/anishkarthick/task-manager-api",
    link: "",
  },
  {
    name: "Portfolio",
    description:
      "Portfolio is a collection of a professional's past projects, accomplishments, and technical skills that demonstrate their expertise in the field. It includes examples of software development, website design, database management, and other technical projects. ",
    image: "/online-resume.png",
    github: "https://github.com/anishkarthick/Tailwind-CSS-NextJs-portfolio",
    link: "",
  },
];

const clientProjects = [
  {
    name: "GMB Integration With Freshdesk",
    description:
      "Integrated Google OAuth for multi-account support. Implemented field mapping and location management with auto-updates. Displayed review and question counts on the user dashboard, allowing filtering by location. Create review and questions as tickets in desking portal. Technologies used include React, Node, MongoDB, Freshdesk API, and Google APIs.",
    image: "/gmb.png",
    github: "",
    link: "",
  },

  {
    name: "HubSpot CRM Integration With Freshdesk",
    description:
      "Connected HubSpot CRM with Freshdesk to sync contacts, companies, and tickets. Automated the creation and updates of contacts and companies, and synchronized ticket statuses between Freshdesk and HubSpot. Technologies used include React, Node, MongoDB, HubSpot API, and Freshdesk API.",
    image: "/hubspot.png",
    github: "",
    link: "",
  },

  {
    name: "Task Management App",
    description:
      "Features include adding, searching, editing, deleting, and cloning tasks. Users can export tasks to CSV and manage task settings. Created and managed ticket templates, and linked or unlinked tasks to/from tickets in Zendesk. Admin functionality includes managing user roles and permissions with Zendesk OAuth. Middleware handles CRUD operations for user, ticket, and task data. Technologies used include React, Typescript, Node, MongoDB, REST APIs, and Zendesk API.",
    image: "/TODO.jfif",
    github: "",
    link: "",
  },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const projects = activeTab === "personal" ? personalProjects : clientProjects;

  return (
    <section id='projects'>
      <h1 className='my-10 text-center font-bold text-4xl'>
        Projects
        <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
      </h1>

      <div className='flex justify-center space-x-4 mb-8'>
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "personal" ? "bg-teal-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("personal")}
        >
          Personal
        </button>
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "client" ? "bg-teal-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("client")}
        >
          Client
        </button>
      </div>

      <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset='-300px 0px -300px 0px'>
                <div className='flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                  <div className=' md:w-1/2'>
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=''
                        width={1000}
                        height={1000}
                        className='rounded-xl shadow-xl hover:opacity-70'
                      />
                    </Link>
                  </div>
                  <div className='mt-8 md:w-1/2'>
                    <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                    <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                      {project.description}
                    </p>
                    <div className='flex flex-row align-bottom space-x-4'>
                      {project.github !== "" && (
                        <Link href={project.github} target='_blank'>
                          <BsGithub
                            size={30}
                            className='hover:-translate-y-1 transition-transform cursor-pointer'
                          />
                        </Link>
                      )}
                      {project.link !== "" && (
                        <Link href={project.link} target='_blank'>
                          <BsArrowUpRightSquare
                            size={30}
                            className='hover:-translate-y-1 transition-transform cursor-pointer'
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
