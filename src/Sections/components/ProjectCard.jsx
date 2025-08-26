import React from 'react'
// import reactLogo from '../../assets/languages/react.svg'
import rightArrow from '../../assets/icons/arrow.svg'
import ProjectBadge from './ProjectBadge'

import viteLogo from '../../assets/languages/vite.svg'
import expressLogo from '../../assets/languages/express.svg'
import gitLogo from '../../assets/languages/git.svg'
import htmlLogo from '../../assets/languages/html.svg'
import javaLogo from '../../assets/languages/java.svg'
import javascriptLogo from '../../assets/languages/javascript.svg'
import nodejsLogo from '../../assets/languages/nodejs.svg'
import postgreSQLLogo from '../../assets/languages/postgreSQL.svg'
import reactLogo from '../../assets/languages/react.svg'
import typescriptLogo from '../../assets/languages/typescript.svg'
import cssLogo from '../../assets/languages/css.svg'

const logoMap = {
    Vite: viteLogo,
    Express: expressLogo,
    Git: gitLogo,
    HTML: htmlLogo,
    Java: javaLogo,
    JavaScript: javascriptLogo,
    NodeJS: nodejsLogo,
    PostgreSQL: postgreSQLLogo,
    React: reactLogo,
    TypeScript: typescriptLogo,
    CSS: cssLogo
};

function ProjectCard(props) {
    return (
        <div className="group w-full h-[468px] relative rounded-2xl overflow-hidden border border-gray-500">
            {/* Image */}
            <img
                src={props.image}
                alt=""
                className="w-full h-full object-cover object-bottom opacity-70 
               group-hover:opacity-100 
               group-hover:scale-110 
               transition duration-300 ease-in-out 
               slowZoom-wrapper
               mask-b-from-75%
               "
            />


            {/* Content */}
            <div className={`absolute ${props.link ? "-bottom-12 transition-all duration-300 ease-in-out group-hover:-translate-y-12" : 'bottom-0'} p-4 `}>
                <div className="text-xl mb-1">{props.text}</div>

                {/* Tech stack */}
                <div className="flex justify-start items-center gap-2 flex-wrap">
                    {/* {
                        props.list?.length > 0 ? (
                            props.list.map((element, index) => (
                                <ProjectBadge
                                    key={index}
                                    image={logoMap[element]}
                                    text={element}
                                />
                            ))
                        ) : (
                            // <p>No technologies listed</p>
                            null
                        )
                    } */}


                    {
                        [...new Set(props.list)]?.length > 0 ? (
                            [...new Set(props.list)].map((element, index) => (
                                <ProjectBadge
                                    key={index}
                                    image={logoMap[element]}
                                    text={element}
                                />
                            ))
                        )
                            :
                            null
                    }
                </div>

                {/* Description */}
                <div>{props.description}</div>

                {/* Learn more (fade in) */}
                <a href={props.link ? props.link : "#"} style={{ display: props.link ? 'block' : 'none' }}>
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