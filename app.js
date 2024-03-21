const httpServer = require("http-server");

httpServer
  .createServer({
    rootName: "public", // where HTML/CSS is located
  })
  .listen(3000);
