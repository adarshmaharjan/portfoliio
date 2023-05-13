import React from 'react';

const Banner: React.FC = () => {
  return (
    <>
      <section className="bg-base-200 min-h-[calc(100vh-64px)]">
        <div className="container mx-auto">
          <div className="hero min-h-[calc(100vh-64px)]">
            <div className="hero-content text-center ">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Adarsh Maharjan</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                  deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Hire Me</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
