import Me from "/me.jpg";
import XLogo from "/icons8_x.png";
import FbLogo8 from "/icons8_fb.png";
// import LinkedInLogo from "/linkedin_logo.png";
import GitHubLogo from "/icons8_github.png";
import InstagramLogo from "/icons8_instagram.png";
import  CiLinkedin  from "/icons8_linkedin.png";
import  FaHtml5  from "/icons8_html5.png";
import  FaCss3Alt  from "/icons8_css3.png";
import  BsJavascript  from "/icons8_js.png";
import  FaReact  from "/icons8_react.png";
import  FaNodeJs  from "/icons8_nodejs.png";
import  MongoDB  from "/icons8_mongodb.png";

import  {GoDownload}  from "react-icons/go";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col justify-center items-center mb-8 md:mb-12">
        <h3 className="text-[24px] md:text-3xl font-sec text-gray-400">Hi, I am</h3>
        <h1 className=" text-[32px] font-extrabold md:font-bold md:text-5xl py-4 font-main">Aderemi Abiodun</h1>
        <h3 className="text-[24px] md:text-3xl font-sec text-gray-400">Full Stack Developer</h3>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
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
        <div className="hidden md:absolute -left-96 top-12 md:flex flex-col gap-4">
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
            
            <img src={FaHtml5} alt="HTML5 Logo" className="w-10 h-10" />
            
              <img src={FaCss3Alt} alt="CSS3 Logo" className="w-10 h-10" />
            
            <img src={BsJavascript} alt="JavaScript Logo" className="w-10 h-10" />
            
            <img src={FaReact} alt="React Logo" className="w-10 h-10" />
            
            {/* <img src={RiNextjsFill} alt="Next.js Logo" className="w-10 h-10" /> */}
            <img src={FaNodeJs} alt="Node.js Logo" className="w-10 h-10" />
            <img src={MongoDB} alt="MongoDB Logo" className="w-10 h-10" />
          </div>
          {/* <div className="flex flex-col gap-4">
            <BsTypescript className="w-6 h-6 text-white" />
            <BiLogoSass className="w-6 h-6 text-white" />
            <BiLogoRedux className="w-6 h-6 text-white" />
            <BiLogoMongodb className="w-6 h-6 text-white" />
            <FaNodeJs className="w-6 h-6 text-white" />
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
