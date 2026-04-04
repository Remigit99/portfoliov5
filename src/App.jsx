import Header from "./components/Header";
import Me from "/me.jpg";

const App = () => {
  return (
    <main id="center" className="px-24 py-12">
      <Header />

      <section id="#about">
        <div>
          <h1>About Me</h1>

          <div className="flex justify-between items-center">
            <div>
              <img src={Me} alt="Profile_picture" />
            </div>

            <div>
              <p>
                I am a passionate and dedicated full stack developer with a
                strong foundation in both front-end and back-end technologies.
                With a keen eye for detail and a commitment to delivering
                high-quality solutions, I thrive in dynamic and collaborative
                environments. My expertise includes proficiency in JavaScript,
                React, Node.js, and various databases, allowing me to create
                seamless and efficient web applications. I am constantly seeking
                opportunities to learn and grow, staying up-to-date with the
                latest industry trends and best practices. With a
                problem-solving mindset and a drive for innovation, I am eager
                to contribute my skills and creativity to impactful projects
                that make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
