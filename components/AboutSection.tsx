import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Node" },
  { skill: "Express" },
  { skill: "AJAX" },
  { skill: "React" },
  { skill: "Redux" },
  { skill: "shadcn/ui" },
  { skill: "RTK Query" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "GitLab" },
  { skill: "MongoDB" },
  { skill: "AWS" },
];

const AboutSection = () => {
  return (
    <section id='about'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48'>
        <h1 className='text-center font-bold text-4xl'>
          About Me
          <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col space-y-10 items-stretch justify-center md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
          <div className='md:w-1/2'>
            <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
              Get to know me!
            </h1>
            <p>
              As a MERN Stack Developer <span className='font-bold'>🔧💻</span>,
              I have over 2.6 years of experience crafting scalable,
              user-centric web applications.{" "}
              <span className='font-bold'>😊</span>
            </p>
            <br />
            <p>
              At Spritle Software <span className='font-bold'>🏢</span>, I
              develop and optimize plugins for Freshworks, Zendesk, and Zoho
              Desk. <span className='font-bold'>🔧</span>
            </p>
            <br />
            <p>
              I hold a Bachelor&apos;s degree in Computer Science from Vins
              Christian College of Engineering.{" "}
              <span className='font-bold'>🎓</span>
            </p>
            <br />
            <p>
              Proficient in JavaScript, TypeScript, React, Node.js, and Next.js,
              I deliver robust web solutions and integrate complex systems.{" "}
              <span className='font-bold'>💡</span>
            </p>
            <br />
            <p>
              I am passionate about continuous learning and innovation, always
              striving to drive impactful projects.{" "}
              <span className='font-bold'>🌟</span>
            </p>
            <br />
            <p>
              My expertise includes RESTful APIs, third-party API integration,
              and MongoDB optimization. <span className='font-bold'>🔍</span>
            </p>
            <br />
            <p>
              Committed to transforming complex problems into intuitive
              solutions. <span className='font-bold'>🎯</span>
            </p>
          </div>
          <div className='text-center md:w-1/2 md:text-left'>
            <h1 className='text-2xl font-bold mb-6'>My Skills</h1>
            <div className='flex flex-wrap flex-row justify-center md:justify-start'>
              {skills.map((item, idx) => (
                <p
                  key={idx}
                  className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'
                >
                  {item.skill}
                </p>
              ))}
            </div>
            <Image
              src='/work_skill.png'
              alt='Skills'
              width={325}
              height={325}
              className='hidden md:block md:relative md:bottom-2 md:left-2 md:z-0'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
