import React from 'react'

function ProjectBadge(props) {
    return (
        <div className="flex items-center gap-1 px-2 py-1 rounded-sm border border-gray-500">
            <img src={props.image} alt="" className="w-5 h-5 border-none" />
            <span>{props.text}</span>
        </div>
    )
}

export default ProjectBadge