import React from 'react';
import { Link } from 'react-router-dom';
import Projects from '../components/Projects.jsx';

function Home() {
  return (
    <>      
      <header className="flex relative h-screen">
        {/* Nav Bar */}
        <nav className="absolute top-4 right-4 flex flex-col gap-2 text-gray-800 dark:text-gray-100">
          <Link
            to="/contact"
            className="text-right transition-colors duration-200 hover:text-gray-500 active:text-gray-400"
          >
            Contact
          </Link>
          <Link
            to="/aboutme"
            className="text-right transition-colors duration-200 hover:text-gray-500 active:text-gray-400"
          >
            About
          </Link>
        </nav>

        {/* Main Content Centered */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
          {/* Title Section */}
          <section className="text-black dark:text-textPrimary">
            <h1 className="hidden md:block text-4xl font-bold m-0">
              Antoine Geiger
            </h1>
            <div className="md:hidden flex flex-col items-start">
              <h2 className="text-xl m-0">
                Hi, I’m
              </h2>
              <h1 className="text-4xl font-bold m-0">
                Antoine
              </h1>
            </div>
          </section>

          {/* Links Options */}
          <ul className="flex flex-col md:flex-row items-center md:gap-8 gap-6 text-lg md:text-base font-semibold list-none m-0">
            <li>
              <a
                href="#projects-page"
                className="block w-48 py-3.5 text-center border border-current rounded-full md:rounded-lg shadow-none md:shadow-[4px_4px_currentColor] transition-all duration-0 md:duration-200 hover:bg-blue-200 md:hover:bg-blue-200 md:hover:text-white md:hover:shadow-none active:bg-blue-300 active:scale-105"
              >
                PROJECTS
              </a>
            </li>
            <li>
              <Link
                to="/music"
                className="block w-48 py-3.5 text-center border border-current rounded-full md:rounded-lg shadow-none md:shadow-[4px_4px_currentColor] transition-all duration-0 md:duration-200 hover:bg-green-200 md:hover:shadow-none active:bg-green-300 active:scale-105"
              >
                MUSIC
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block w-48 py-3.5 text-center border border-current rounded-full md:rounded-lg shadow-none md:shadow-[4px_4px_currentColor] transition-all duration-0 md:duration-200 hover:bg-red-200 md:hover:text-white md:hover:shadow-none active:bg-red-300 active:scale-105"
              >
                BLOG
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <Projects />
    </>
  );
}

export default Home;
