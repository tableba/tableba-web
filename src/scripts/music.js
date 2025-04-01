const SOUND_FILE_PATH = "https://tableba/src/music/sounds.json"

document.addEventListener("DOMContentLoaded", () => {
  readSoundFile(SOUND_FILE_PATH)

})

async function readSoundFile(filePath) {
  const result = await fetch(filePath)
  console.log(result)

}
