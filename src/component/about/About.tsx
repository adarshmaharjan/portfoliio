import { FC } from "react";
import { profileImg } from "../../common/images";

const About: FC = () => {
  return (
    <section id="about" title="about">
      <div className="hero min-h-[calc(100vh-64px)] bg-base-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            alt="profile"
            src={profileImg}
            className="max-w-full sm:max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-header font-bold">About</h1>
            <p className="py-6 prose prose-slate">
              I am a Software engineer learning and experiencing the world of
              coding and programming. I am committed to utilizing my skills to
              further the company's mission and am proficient in various
              platforms, languages, and embedded systems.
            </p>
            <a
              href="https://docs.google.com/document/d/1VtHpqIehQ52vIxqj7-h0kYzW9jr1zUvPXpoAlznl9DE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-secondary">Resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
