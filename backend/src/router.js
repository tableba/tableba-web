import express from 'express'

export const router = express.Router()

router.get('/api/music', (req, res,) => {
  res.json({
    message: 'music is here.'
  })
  
})
