"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db_1 = require("./db");
var app = express_1.default();
var port = 3000;
app.get('/ping', pong);
db_1.connectToDb();
function pong(req, res) {
    res.send('pong');
}
// app.listen(port, () => {
//     console.log(`server Listening on Port ${port}`)
// })
