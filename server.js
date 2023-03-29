// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const fs = require("fs");
const db = JSON.parse(fs.readFileSync(path.join(__dirname, "db.json")));
const router = jsonServer.router(db);

server.use(middlewares);
server.use("", router);
server.listen(process.env.PORT || 5000, () => {
  console.log("JSON Server is running");
});
