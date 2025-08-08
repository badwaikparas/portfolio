import React from 'react'

function Header() {
    return (
        <header className='w-full flex justify-center items-center'>
            <nav className='flex justify-between items-center max-w-[80rem] flex-1'>
                <div className='font-bold p-4 text-lg'>
                    Paras Badwaik
                </div>
                <div className='flex items-center'>
                    <div className='p-4'>About</div>
                    <div className='p-4'>My work</div>
                    <div className='p-4'>Projects</div>
                    <div className='p-4'>Posts</div>
                    <div className='p-4'>Contact Me</div>
                </div>
                <div>
                    <button className='font-bold p-4 text-lg'>English</button>
                </div>
            </nav>
        </header>
    )
}

export default Header