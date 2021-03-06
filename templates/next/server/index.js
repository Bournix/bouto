const next = require("next");
const express = require("express");
const compression = require("compression");
const spdy = require("spdy");
const path = require("path");
const fs = require("fs");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

// create your own certificate with openssl for development
const options = {
  key: fs.readFileSync(path.join(__dirname, "/server.key")),
  cert: fs.readFileSync(path.join(__dirname, "/server.crt")),
};

const shouldCompress = (req, res) => {
  // don't compress responses asking explicitly not
  if (req.headers["x-no-compression"]) {
    return false;
  }

  // use compression filter function
  return compression.filter(req, res);
};

app.prepare().then(() => {
  // create the express app
  const expressApp = express();

  // set up compression in express
  expressApp.use(compression({ filter: shouldCompress }));

  // fallback all request to next request handler
  expressApp.all("*", (req, res) => {
    return handle(req, res);
  });

  // start the HTTP/2 server with express
  spdy.createServer(options, expressApp).listen(port, (error) => {
    if (error) {
      console.error(error);
      return process.exit(1);
    } else {
      console.log(`HTTP/2 server listening: https://localhost:3000`);
    }
  });
});
