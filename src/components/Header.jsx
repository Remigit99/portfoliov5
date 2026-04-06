import Me from "/me.jpg";
import XLogo from "/icons8_x.png";
import FbLogo8 from "/icons8_fb.png";
// import LinkedInLogo from "/linkedin_logo.png";
import GitHubLogo from "/icons8_github.png";
import InstagramLogo from "/icons8_instagram.png";

import { GoDownload } from "react-icons/go";
import { RxInstagramLogo } from "react-icons/rx";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { BsJavascript } from "react-icons/bs";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { BsTypescript } from "react-icons/bs";
import { BiLogoSass } from "react-icons/bi";
import { BiLogoRedux } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col justify-center items-center mb-12">
        <h3 className="text-3xl font-sec text-gray-400">Hi, I am</h3>
        <h1 className="text-5xl py-4 font-main">Aderemi Abiodun</h1>
        <h3 className="text-3xl font-sec text-gray-400">Full Stack Developer</h3>
      </div>

      <div>
        <a
          href="#contact"
          className="bg-transparent border-bgBtn px-4 py-2 border rounded-full outline-0 text-white"
        >
          Contact Me
        </a>
        <a
          href="/src/assets/resume_pre.pdf"
          download
          className="bg-bgBtn text-black px-4 py-2 rounded-full outline-0 ml-4"
        >
          <GoDownload className="inline-block mr-2" />
          Resume
        </a>
      </div>

      <div className="relative">
        <div className="absolute -left-96 top-12 flex flex-col gap-4">
          <div>
            <a href="http://x.com" target="_blank" rel="noopener noreferrer">
              <img src={XLogo} alt="x_logo" className="h-10 w-10" />
            </a>
          </div>
          <div>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FbLogo8} alt="Facebook" className="h-10 w-10" />
            </a>
          </div>
          {/* <div>
            <a
              href="http://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </div> */}
          <div>
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramLogo} alt="Instagram_logo" className="h-10 w-10" />
            </a>
          </div>
          <div>
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHubLogo} alt="github_logo" className="h-10 w-10" />
            </a>
          </div>
        </div>

        <div className="my-12 overflow-hidden rounded-t-4xl rounded-b-2xl bg-bgBtn">
          <img
            src={Me}
            alt="Profile_picture"
            className="w-64 h-64 object-cover border "
          />
        </div>

        <div className="absolute -right-96 top-12 flex gap-6">
          <div className="flex flex-col gap-4">
            <FaHtml5 className="w-6 h-6 text-white" />
            <FaCss3Alt className="w-6 h-6 text-white" />
            <BsJavascript className="w-6 h-6 text-white" />
            <FaReact className="w-6 h-6 text-white" />
            <RiNextjsFill className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col gap-4">
            <BsTypescript className="w-6 h-6 text-white" />
            <BiLogoSass className="w-6 h-6 text-white" />
            <BiLogoRedux className="w-6 h-6 text-white" />
            <BiLogoMongodb className="w-6 h-6 text-white" />
            <FaNodeJs className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
