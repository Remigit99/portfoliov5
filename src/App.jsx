import Header from "./components/Header";
import Me from "/me.jpg";

const App = () => {
  return (
    <main className="w-full h-full bg-bgImgMain bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-48 py-16 h-full">
        <Header />

        {/* ABOUT ME */}
        <section id="#about">
          <div className="mt-16">
            <h1 className="flex justify-center font-main items-center text-4xl mb-12">About Me</h1>

            <div className="grid grid-cols-[1fr_2fr] gap-12 ">
              <div className="bg-bgBtn rounded-4xl overflow-hidden ">
                <img src={Me} alt="Profile_picture" className="w-full h-full object-cover -rotate-2 hover:rotate-0 transition-transform duration-300" />
              </div>

              <div>
                <p className="text-gray-400 leading-6">
                  I am a passionate and dedicated full stack developer with a
                  strong foundation in both front-end and back-end technologies.
                  With a keen eye for detail and a commitment to delivering
                  high-quality solutions, I thrive in dynamic and collaborative
                  environments. My expertise includes proficiency in JavaScript,
                  React, Node.js, and various databases, allowing me to create
                  seamless and efficient web applications. I am constantly
                  seeking opportunities to learn and grow, staying up-to-date
                  with the latest industry trends and best practices. With a
                  problem-solving mindset and a drive for innovation, I am eager
                  to contribute my skills and creativity to impactful projects
                  that make a difference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="#projects">
          <div className="mt-16">
            <h1 className="flex justify-center font-main items-center text-4xl mb-12">Projects</h1>

<div>
  <article>

  </article>
</div>
            </div>
        </section>

      </div>
    </main>
  );
};

export default App;
