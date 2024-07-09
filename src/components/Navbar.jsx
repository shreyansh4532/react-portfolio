import logo from '../assets/kevinRushLogo.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='w-10 mx-2' src={logo} alt="logo image" />
        </div>
        <div className='flex gap-4 m-8 items-center justify-center text-2xl'>
            <FaLinkedinIn />
            <FaGithubAlt />
            <FaInstagram />
            <FaXTwitter />
        </div>
    </nav>
  )
}

export default Navbar