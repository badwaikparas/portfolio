import React from 'react'
import ProjectCard from './components/ProjectCard';
import projectImage1 from '../assets/Projects/project1.webp'

function MyWork() {
    return (
        <div className='mt-20'>
            <h1 className='text-4xl font-bold mb-8'>My Work</h1>
            <div className='flex flex-col gap-7'>
                <ProjectCard image={projectImage1} list={['React', 'Vite', 'JavaScript', 'CSS', 'HTML']} link={"sdfsdfsdf"} />
                <ProjectCard image={projectImage1} list={['React', 'Vite', 'JavaScript', 'CSS', 'HTML']} />
            </div>
        </div>
    )
}

export default MyWork;