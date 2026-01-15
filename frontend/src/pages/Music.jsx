import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/default_html.module.css'

function Music() {

  const MUSICPATH = "/music/sounds.json"
  const [soundArray, setSoundArray] = useState([])

  function getMimeType(filePath) {
    const extension = filePath.split('.').pop().toLowerCase()
    const mimeTypes = {
      'mp3': 'audio/mpeg',
      'ogg': 'audio/ogg',
      'wav': 'audio/wav',
      'aac': 'audio/aac',
      'flac': 'audio/flac'
    };
    return mimeTypes[extension] || 'audio/mpeg'
  }

  // fetch sounds.json
  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const response = await fetch(MUSICPATH)
        const data = await response.json()
        setSoundArray(data)
      } catch (err) {
        console.error(`Fetch error: ${err}`)
      }
    }
    fetchMusic()
  }, [])

  return (
    <div className="m-3 font-[Noto]">

      <main>
        <p>
          This is a snippet of the music I make. If you like any of the sounds and want to work with me, feel free to <a className="anchor" href="/contact.html">contact me</a>
        </p>
        <div className="" id="sound-div">
          {
            soundArray.map(soundUrl => (
              <div className="inline-block w-fit m-3 p-3 border border-text-primary">
                <h4 className="italic mb-1 font-bold">{soundUrl.split("/")[2].split(".")[0]}</h4>
                <audio controls>
                  <source src={soundUrl} type={getMimeType(soundUrl)}/>
                </audio>
                  <a
    href={soundUrl}
    download
    className="anchor block mt-2"
  >
    Download
  </a>
              </div>
            ))
          }
        </div>
      </main>

      <footer>
        <hr className="text-darkgray mb-2 mt-2" />
        <p>
          All sounds and music on this site are created by Antoine Geiger.
          <br />
          You are free to use them in your own projects—even commercially—as long as you credit me.
          <br />
          <a className="anchor" href="https://creativecommons.org/licenses/by/4.0/">
            Licensed under Creative Commons Attribution 4.0 International (CC BY 4.0)
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Music;
