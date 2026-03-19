import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-lg text-gray-500 mb-2">Hi! I'm</h2>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Ashlin Renitta
          </h1>

          <h3 className="text-2xl text-gray-600 mt-3">
            Frontend Developer
          </h3>

          <p className="mt-5 text-gray-600 max-w-md">
            I build modern, responsive websites using React and Tailwind CSS.
            Passionate about creating clean UI and great user experiences.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
              Contact Me
            </button>

            <button className="border px-6 py-3 rounded-full hover:bg-gray-100">
              My Resume
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/400"
            alt="profile"
            className="w-72 md:w-96 rounded-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;