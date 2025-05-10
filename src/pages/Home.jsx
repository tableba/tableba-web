import React from 'react';
import { Link } from 'react-router-dom';
import Projects from '../components/Projects.jsx';
import NavBar from '../components/NavBar.jsx'

function Home() {
  return (
    <div>      
      <header className="flex relative h-screen">
        <NavBar />

        <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
          <section className="text-text_primary">
            <h1 className="hidden md:block text-6xl font-bold m-0">
              Antoine Geiger
            </h1>
            <div className="md:hidden flex flex-col items-start">
              <h2 className="text-[20px] font-bold">
                Hi, I’m
              </h2>
              <h1 className="text-[90px] font-bold leading-none">
                Antoine
              </h1>
            </div>
          </section>

          {/* Links Options */}
          <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8 md:text-base font-bold md:font-semibold list-none mt-1">
            <li>
              <a
                href="#projects-page"
                className="link-opt hover:bg-blue-500 active:bg-blue-600 hover:text-background"
              >
                PROJECTS
              </a>
            </li>
            <li>
              <Link
                to="/music"
                className="link-opt hover:bg-accent_color active:bg-gray-200"
              >
                MUSIC
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="link-opt hover:bg-red-500 active:bg-red-600 hover:text-background"
              >
                BLOG
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <Projects />
    </div>
  );
}

export default Home;
