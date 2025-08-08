import React from 'react'

function Badge(props) {
    return (
        <span className={`inline-flex items-center rounded-md mr-1 border-1 bg-${props.color}-950 px-2 py-1 text-xs font-medium text-${props.color}-600 ring-1 ring-${props.color}-500/10 ring-inset`}>
            Offline
        </span>
    )
}

export default Badge