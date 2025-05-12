import React from 'react';

function NavBar () {
  return (
    <nav className="m-0 p-0 absolute top-4 right-4 flex flex-col gap-1 text-right text-textPrimary underline ">
      <a
        href="/contact.html"
        className="text-black hover:text-gray-500 active:text-gray-400 transition-colors duration-200 active:duration-100"
      >
        contact
      </a>
      <a
        href="/aboutme.html"
        className="text-black hover:text-gray-500 active:text-gray-400 transition-colors duration-200 active:duration-100"
      >
        about
      </a>
    </nav>
  )
}

export default NavBar
