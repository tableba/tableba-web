const SOUND_FILE_PATH = "https://tableba.com/src/music/sounds.json"

document.addEventListener("DOMContentLoaded", async () => {
  const result = await fetchData(SOUND_FILE_PATH)
  console.log(result)
})

async function readSoundFiles(soundArr) {
  try {
    for (let soundPath of soundArr) {
      console.log(soundPath)
    }

  } catch (err) {
    console.error(err)
  }
}

async function fetchData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}
