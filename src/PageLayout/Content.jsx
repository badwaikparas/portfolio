import Card from "../Sections/components/Card"
import TechStack from "../Sections/TechStack"
import Experience from "../Sections/Experience"
import MyWork from "../Sections/MyWork"
import React from 'react'

function Content() {
    return (
        <div className="flex flex-col w-full max-w-[60rem] h-max mx-auto mt-16 mb-20 ">
            <div className="mx-[80px]">
                <Card />
                <TechStack />
                <Experience />
                <MyWork />
            </div>
        </div>
    )
}

export default Content