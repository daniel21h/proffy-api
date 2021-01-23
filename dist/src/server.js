"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const server = express_1.default();
server.use(cors_1.default());
server.use(express_1.default.json());
server.use(routes_1.default);
server.listen(process.env.PORT || 3333, () => {
    console.log('>> Server running on port 3333. <<');
});
