import express from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'

const routes = express.Router()
const classesControllers = new ClassesController()
const connectionsController = new ConnectionsController()

routes.get('/', (request, response) => {
  try {
    return response.json({ message: '🚀 Server running on Heroku.' })
  } catch (error) {
    return response.json({ message: 'Problem on server.', error })
  }
})

routes.get('/classes', classesControllers.show)
routes.get('/classes/all', classesControllers.index)
routes.post('/classes', classesControllers.create)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes