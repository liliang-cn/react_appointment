const express = require('express');
const cors = require('cors');

const server = express();
const PORT = 8080;

const APIs = express.Router();
APIs.get('/data', (req, res) => res.sendFile(__dirname + '/data.json'));

const ReactServer = express.Router();
ReactServer.get('*', (req, res) => res.sendFile(__dirname + '/build/index.html'))

server.use(cors())
  .use(express.static(__dirname + '/build'))
  .use("/api", APIs)
  .use("/", ReactServer)
  .listen(PORT, () => console.log(`server started on ${PORT}`));