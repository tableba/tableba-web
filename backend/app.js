import { app } from './src/express.js'

const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

server.on('error', (err) => {
  console.error(`Server error: ${err}`)
})

async function shutdown() {
  server.close()
}

process.on('SIGINIT', shutdown)
process.on('SIGTERM', shutdown)
