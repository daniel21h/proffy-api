import express from 'express'
import cors from 'cors'
import routes from './routes'

const server = express()

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(process.env.PORT || 3333, () => {
  console.log('>> Server running on port 3333. <<')
})