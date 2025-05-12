import React from 'react';
import '../styles/contact.css';

function Contact() {


  return (
    <div className="h-screen flex justify-center items-center font-[Noto]">
      <main className="text-center">
        <section className="m-4 p-4" id="email">
          <p>email:</p>
          <p>
            <i>
              business/personal - <a className="text-blue-700 underline hover:text-blue-800 visited:text-purple-800" href="mailto:gantoine.st@gmail.com">gantoine.st@gmail.com</a>
            </i>
          </p>
          <p>
            <i>
              secure - <a className="text-blue-700 underline hover:text-blue-800 visited:text-purple-800" href="mailto:antoinegeiger@proton.me">antoinegeiger@proton.me</a>
            </i>
          </p>
        </section>

        <section id="socials">
          <p>socials:</p>
          <p>
            <i>
              <a className="text-blue-700 underline hover:text-blue-800 visited:text-purple-800" href="https://www.instagram.com/antoine.geigr/">instagram</a>
            <br/>
              <a className="text-blue-700 underline hover:text-blue-800 visited:text-purple-800" href="https://www.github.com/tableba">github</a>
            </i>
          </p>
        </section>
      </main>
    </div>
  );
}

export default Contact;
