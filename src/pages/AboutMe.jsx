import React from 'react';

function About() {
  return (
    <div className="p-4 m-4 space-y-3 text-[18px] font-serif leading-tight">
      <p>Hi, I'm Antoine Geiger, a Software Development student based in Sweden.</p>
      <p>
        I specialize mostly in web development, fullstack, and general problem solving using programming languages.
      </p>
      <p>
        I am comfortable with Python, JavaScript, and Java. I use the following frameworks: Express, NodeJS, and React.
        I also have a passion for photo editing using Photoshop and am interested in Linux-driven operating systems.
      </p>
      <p>
        When I am not working, you will often find me doing sports like swimming or climbing, music production, playing
        instruments, or learning languages.
      </p>
      <p className="mt-15">This is me:</p>
      <img
        src="img/duck.jpg"
        alt="Image failed to load."
        className="w-1/5 max-w-3xs md:w-1/4 sm:w-1/2"
      />
    </div>
  );
}

export default About;
