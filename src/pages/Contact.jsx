import React from 'react';

function Contact() {
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const mainStyle = {
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <main style={mainStyle}>
        <section id="email">
          <p>email:</p>
          <p>
            <i>
              business/personal - <a href="mailto:gantoine.st@gmail.com">gantoine.st@gmail.com</a>
            </i>
          </p>
          <p>
            <i>
              secure - <a href="mailto:antoinegeiger@proton.me">antoinegeiger@proton.me</a>
            </i>
          </p>
        </section>

        <section id="socials">
          <p>socials:</p>
          <p>
            <i>
              <a href="https://www.instagram.com/antoine.geigr/">instagram</a>
            </i>
          </p>
        </section>
      </main>
    </div>
  );
}

export default Contact;
