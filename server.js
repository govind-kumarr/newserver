const jsonServer = require("json-server");
require("dotenv").config();

const server = jsonServer.create();

const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(process.env.port || 3000);
