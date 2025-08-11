import { Github, Linkedin, LinkedinIcon, LocateFixed } from "lucide-react"
import Icons from "./Icons"
import { Mail } from "lucide-react"
import Location from '../../assets/icons/location.svg'

function Card() {
    return (
        <div className='rounded-lg p-[20px] mb-[20px] border-2 border-white'>
            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                    <h1 className='text-4xl font-bold'>Paras Badwaik</h1>
                    <div className="flex items-center gap-2">
                        <Icons>
                            <Mail className="text-white group-hover:text-black transition-colors duration-300" />
                        </Icons>
                        <Icons>
                            <Github className="text-white group-hover:text-black transition-colors duration-300" />
                        </Icons>
                        <Icons>
                            <LinkedinIcon className="text-white group-hover:text-black transition-colors duration-300" />
                        </Icons>
                    </div>
                </div>
                <div className="flex justify-start items-center text-xl gap-1" style={{ color: "#9CA3AF" }}>
                    <img src={Location} className="h-6 -m-1 invert-100" />
                    Nagpur, India
                </div>
                <div className="text-xl">
                    I'm 16-year-old Full-Stack Web Developer. I have been programming for more than 3 years.
                </div>
            </div>
        </div>
    )
}

export default Card