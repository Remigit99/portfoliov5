import Me from "/me.jpg"

const Header = () => {
  return (
    <header className="">

        <div className="">
        <h3>Hi, I am</h3>
        <h1>Aderemi Abiodun</h1>
        <h3>Full Stack Developer</h3>
        </div>

        <div>
        <a href="#contact">Contact Me</a>
        <a href="/src/assets/resume_pre.pdf" download>Download Resume</a>
        </div>

        <div>
            <div></div>
            <div>
                <img src={Me} alt="Profile_picture" className="w-36 h-36 object-cover border " />
            </div>
            <div></div>
        </div>
    </header>
  )
}

export default Header