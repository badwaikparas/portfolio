import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
    return (
        <div className='mt-20'>
            <h1 className='text-4xl font-bold mb-8'>Experience</h1>
            <ol class="relative">
                <li class="pb-10 ps-6 border-s border-gray-700">
                    <span class="absolute flex items-center justify-center m-2 mt-2 w-2 h-2 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        {/* <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg> */}
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Fullstack Developer Intern<span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">StarOrigin, August 2024 - March 2025</time>
                    <span class="inline-flex items-center rounded-md mr-1 border-1 bg-gray-950 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">Offline</span>
                    <span class="inline-flex items-center rounded-md mx-1 border-1 bg-red-950 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">WhatsApp Bot</span>
                    {/* <span class="inline-flex items-center rounded-md mx-1 border-1 bg-yellow-950 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">Web Dev</span> */}
                    {/* <span class="inline-flex items-center rounded-md mx-1 border-1 bg-green-950 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">Bot Development</span> */}
                    <span class="inline-flex items-center rounded-md mx-1 border-1 bg-blue-950 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">Automated Email</span>
                    {/* <span class="inline-flex items-center rounded-md mx-1 border-1 bg-indigo-950 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-700/10 ring-inset">Badge</span>
                    <span class="inline-flex items-center rounded-md mx-1 border-1 bg-purple-950 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-purple-700/10 ring-inset">Badge</span>
                    <span class="inline-flex items-center rounded-md mx-1 border-1 bg-pink-950 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-pink-700/10 ring-inset">Badge</span> */}
                    {/* <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p> */}
                    <div class="mt-2">
                        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                            <svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                            </svg>
                            Download ZIP
                        </a>
                    </div>
                </li>
                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center m-2 w-2 h-2 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        {/* <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg> */}
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Fullstack Summer Intern</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Rainbow Solutions, May 2023 - June 2023</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400"></p>
                    <span class="inline-flex items-center rounded-md mr-1 border-1 bg-gray-950 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">Offline</span>
                    <span class="inline-flex items-center rounded-md mx-1 border-1 bg-red-950 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">CRM</span>
                    {/* <span class="inline-flex items-center rounded-md mx-1 border-1 bg-yellow-950 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">Badge</span>
                    <span class="inline-flex items-center rounded-md mx-1 border-1 bg-green-950 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">Badge</span>
                    <span class="inline-flex items-center rounded-md mx-1 border-1 bg-blue-950 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">Badge</span>
                    <span class="inline-flex items-center rounded-md mx-1 border-1 bg-indigo-950 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-700/10 ring-inset">Badge</span>
                    <span class="inline-flex items-center rounded-md mx-1 border-1 bg-purple-950 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-purple-700/10 ring-inset">Badge</span> */}
                </li>
            </ol>
        </div>
    )
}

export default Experience