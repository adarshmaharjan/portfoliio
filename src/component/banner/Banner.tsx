import React from 'react';
import SocialMediaIconList from '../socialMedia/SocialMediaIconList';
import { Link } from 'react-scroll';
const Banner: React.FC = () => {
  return (
    <>
      <section id="home" title="home" className="bg-base-200 mt-16 min-h-[calc(100vh-64px)]">
        <div className="container mx-auto">
          <div className="hero min-h-[calc(100vh-64px)]">
            <div className="hero-content text-center ">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-header font-bold">Adarsh Maharjan</h1>
                <p className="py-6 prose ">
                  I am a Software engineer learning and experiencing the world of coding and programming. I am committed
                  to utilizing my skills to further the company's mission and am proficient in various platforms,
                  languages, and embedded systems.
                </p>

                <Link to="footer" smooth={true} duration={400}>
                  <button className="btn btn-primary">Hire Me</button>
                </Link>

                <div className="max-w-sm mx-auto">
                  <SocialMediaIconList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
