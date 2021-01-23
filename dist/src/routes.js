"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ClassesController_1 = __importDefault(require("./controllers/ClassesController"));
const ConnectionsController_1 = __importDefault(require("./controllers/ConnectionsController"));
const routes = express_1.default.Router();
const classesControllers = new ClassesController_1.default();
const connectionsController = new ConnectionsController_1.default();
routes.get('/', (request, response) => {
    try {
        return response.json({ message: '🚀 Server running on Heroku.' });
    }
    catch (error) {
        return response.json({ message: 'Problem on server.', error });
    }
});
routes.get('/classes', classesControllers.show);
routes.get('/classes/all', classesControllers.index);
routes.post('/classes', classesControllers.create);
routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);
exports.default = routes;
