import React from 'react'

function Icons({ children }) {
    return (
        <div className="group p-[10px] rounded-lg hover:bg-gray-300 transition-colors duration-300 border-1 border-gray-900">
            {children}
        </div>
    )
}

export default Icons