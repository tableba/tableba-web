function MusicSection({ title, sounds }) {

  return (
    <>
      <h1 className="font-bold ml-2 mt-3 text-xl">{title}</h1>
      {sounds.map(soundUrl => (
        <div key={soundUrl} className="inline-block w-fit m-3 p-3 border border-text-primary">
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
    </> 
  )
}

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

export default MusicSection
