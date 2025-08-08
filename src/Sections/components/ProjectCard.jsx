import React from 'react'
import reactLogo from '../../assets/languages/react.svg'
import rightArrow from '../../assets/icons/arrow.svg'
import ProjectBadge from './ProjectBadge'

function ProjectCard(props) {
    return (
        <div className="group w-full h-[468px] relative rounded-2xl overflow-hidden border border-gray-500">
            {/* Image */}
            <img
                src={props.image}
                alt=""
                className="w-full h-full object-cover object-bottom opacity-70 group-hover:opacity-100 group-hover:scale-110 transition duration-300 ease-in-out"
            />

            {/* Content */}
            <div className="absolute -bottom-12 p-4 transition-all duration-300 ease-in-out group-hover:-translate-y-12">
                <div className="text-xl mb-1">InfinityQuest Game</div>

                {/* Tech stack */}
                <div className="flex justify-start items-center gap-2">
                    <ProjectBadge image={reactLogo} text={"React"} />
                    <ProjectBadge image={reactLogo} text={"React"} />
                    <ProjectBadge image={reactLogo} text={"React"} />
                </div>

                {/* Description */}
                <div>A JavaScript Game</div>

                {/* Learn more (fade in) */}
                <a href="">
                    <div className="mt-5 transition duration-300 ease-in-out">
                        <div className=" flex items-center gap-1 w-fit text-sm px-2 py-1 rounded-lg bg-white text-black text-center font-extralight">
                            Learn more
                            <img src={rightArrow} alt="" className='pt-0.5' />
                        </div>
                    </div>
                </a>
            </div>
        </div>

    )
}

export default ProjectCard