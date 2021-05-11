import express from 'express'
import config from './config'
import router from './router'

const app = express()
// config
config(app)
// Router
router(app)

app.listen(3000, () =>
  console.log('El servidor ha sido inicializado: http://localhost:3000')
)
