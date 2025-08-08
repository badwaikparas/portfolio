import React from 'react'
import viteLogo from '../assets/languages/vite.svg'
import expressLogo from '../assets/languages/express.svg'
import gitLogo from '../assets/languages/git.svg'
import htmlLogo from '../assets/languages/html.svg'
import javaLogo from '../assets/languages/java.svg'
import javascriptLogo from '../assets/languages/javascript.svg'
import nodejsLogo from '../assets/languages/nodejs.svg'
// import postgreSQLLogo from '../assets/languages/postgreSQL.svg'
import reactLogo from '../assets/languages/react.svg'
import typescriptLogo from '../assets/languages/typescript.svg'
import cssLogo from '../assets/languages/css.svg'

function TechStack() {
    return (
        <div className='mt-20'>
            <h1 className='text-4xl'> </h1><h1 className='text-4xl font-bold mb-8'>Tech Stack</h1>
            <div className="overflow-hidden w-full marquee-wrapper">
                <div className="flex marquee-track w-max">
                    {/* First set */}
                    <div className="flex items-center w-max">
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={viteLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>Vite</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={expressLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>Express</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={gitLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>Git</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={htmlLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>HTML</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={cssLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>CSS</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={javaLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>Java</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={javascriptLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>JavaScript</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={nodejsLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>NodeJs</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={reactLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>React</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={typescriptLogo} alt="" />
                            <div className='mx-2 text-2xl font-bold'>TypeScript</div>
                        </div>
                    </div>

                    {/* Second set (duplicate for seamless loop) */}
                    <div className="flex items-center w-max">
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={viteLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>Vite</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={expressLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>Express</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={gitLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>Git</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={htmlLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>HTML</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={cssLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>CSS</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={javaLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>Java</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={javascriptLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>JavaScript</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={nodejsLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>NodeJs</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={reactLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>React</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={typescriptLogo} alt="" />
                            <div className='mx-2 text-2xl font-bold'>TypeScript</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden w-full marquee-wrapper">
                <div className="flex marquee-track w-max">
                    {/* First set */}
                    <div className="flex items-center w-max">
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={javaLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>Java</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={javascriptLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>JavaScript</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={nodejsLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>NodeJs</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={reactLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>React</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={typescriptLogo} alt="" />
                            <div className='mx-2 text-2xl font-bold'>TypeScript</div>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={viteLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>Vite</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={expressLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>Express</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={gitLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>Git</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={htmlLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>HTML</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={cssLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>CSS</span>
                        </div>
                    </div>

                    {/* Second set (duplicate for seamless loop) */}
                    <div className="flex items-center w-max">
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={javaLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>Java</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={javascriptLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>JavaScript</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={nodejsLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>NodeJs</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={reactLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>React</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={typescriptLogo} alt="" />
                            <div className='mx-2 text-2xl font-bold'>TypeScript</div>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={viteLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>Vite</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={expressLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>Express</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={gitLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>Git</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={htmlLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>HTML</span>
                        </div>
                        <div className='flex items-center mx-3 gap-1'>
                            <img className='w-10' src={cssLogo} alt="" />
                            <span className='mx-2 text-2xl font-bold'>CSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechStack