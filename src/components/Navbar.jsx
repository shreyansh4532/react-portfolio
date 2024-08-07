import logo from '../assets/kevinRushLogo.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  function handleGithubClick() {
    window.open('https://github.com/shreyansh4532', '_blank');
  }

  function handleLeetcodeClick() {
    window.open('https://leetcode.com/u/shreyanshmishracr7/', '_blank'); 
  }

  function handleLinkedInClick() {
    window.open('https://www.linkedin.com/in/shreyansh-mishra-rmfc/', '_blank'); 
  }

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='w-10 mx-2' src={logo} alt="logo image" />
        </div>
        <div className='flex gap-4 m-8 items-center justify-center text-2xl'>
            <FaLinkedinIn onClick={handleLinkedInClick} className='cursor-pointer'/>
            <FaGithubAlt onClick={handleGithubClick} className='cursor-pointer'/>
            <SiLeetcode onClick={handleLeetcodeClick} className='cursor-pointer'/>
            <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar