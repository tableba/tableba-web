const SOUND_FILE_PATH = "https://tableba.com/src/music/sounds.json"

document.addEventListener("DOMContentLoaded", async () => {
  const result = await fetchData(SOUND_FILE_PATH)
  for (let soundPath of result) {
    const soundFile = await fetch(soundPath)
    console.log(soundFile)

  }
  console.log(result)
})

async function fetchData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}
