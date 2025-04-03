const SOUND_FILE_PATH = "https://tableba.com/src/music/sounds.json"

document.addEventListener("DOMContentLoaded", async () => {
  const result = await fetchData(SOUND_FILE_PATH)
  renderSounds(result)
})

function renderSounds(soundArr) {
  let soundDiv = document.getElementById("soundDiv")
  let frag = document.createDocumentFragment()
  for (let sound of soundArr) {
    console.log(sound)
    let audio = document.createElement("audio")
    audio.controls = true
    let source = document.createElement("source")
    const mime = getMimeType(sound)
    source.src = sound
    source.type = mime

    audio.appendChild(source)
    frag.appendChild(audio)
  }
  soundDiv.appendChild(frag)
}

function getMimeType(filePath) {
    const extension = filePath.split('.').pop().toLowerCase(); // Extract file extension
    const mimeTypes = {
        'mp3': 'audio/mpeg',
        'ogg': 'audio/ogg',
        'wav': 'audio/wav',
        'aac': 'audio/aac',
        'flac': 'audio/flac'
    };

    return mimeTypes[extension] || 'audio/mpeg'; // Default to mp3 if unknown
}

async function fetchData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}
