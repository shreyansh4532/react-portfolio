import {HERO_CONTENT } from "../constants/index.js";
import image from "../assets/kevinRushProfile.png"

const Hero = () => {
  return (
    <div className="border-b pb-4 lg:mb-35 border-neutral-900">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="text-6xl font-thin tracking-tight pb-16 lg:mt-16">Shreyansh Mishra</h1>
                    <span className="text-4xl bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500 tracking-tight bg-clip-text text-transparent">Full Stack Developer</span>
                    <p className="tracking-tighter font-light my-2 py-6 max-w-xl">{HERO_CONTENT}</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img src={image} alt="Shreyansh Mishra" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero