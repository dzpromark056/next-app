'use client';
import styles from '../../app/page.module.css'
import { useState } from 'react';
import Project from './project';
import Modal from './modal';

const projects = [
  {
    title: "Text Summarization Tool",
    src: "project-5.jpg",
    color: "#000000",
    description:
      "A fully functional summarization tool that is available via Web Extension in Google.",
      technologies: ["HTML", "CSS", "Python", "Javascript", "Mysql"],

  },
  {
    title: "Task Management App",
    src: "project-2.jpg",
    color: "#8C8C8C",
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
      technologies: ["React-Native", "Mysql"],

  },
  {
    title: "Blogging Platform",
    src: "project-1.jpg",
    color: "#EFE8D3",
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
      technologies: ["HTML", "CSS", "Express", "mySQL"],

  },
  {
    title: "Portfolio Website",
    src: "project-4.jpg",
    color: "#706D63",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["HTML", "CSS", "React", "Tailwind", "Framer-Motion"],

  }
]

export default function Projects() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className={styles.main}>
  <h2 className='my-20 text-center text-4xl text-white'>Projects</h2>
     <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} setModal={setModal} description={project.description} technology={project.technologies} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
  </main>
  )
}