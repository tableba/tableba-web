import express from 'express'
import { router } from './router.js'
import logger from 'morgan'

export const app = express()

// parse the body
app.use(express.json())
app.use('/', router)
app.use(logger('dev'))

// Not found
app.use((req, res, next) => {
  const err = new Error("Not Found")
  err.status = 404
  next(err)
})
// Global error handler
app.use((err, req, res, next) => {
  const status = err.status || 500
  console.error(err)
  res.status(status).json({
    status,
    message: err.message
  })
})
