const express = require("express");

const setupExpressServer = () => {
  /* return configured express app */
  const app = express();
  //クライアントから送信されたデータを、req.body経由で会得、操作するための呪文。。。らしい
  app.use(express.json());

  app.get("/teapot", (req, res) => {
    res.status(418).send("I am not a server. I'm tea pot.").end();
  });
  


  return app;
};

module.exports = { setupExpressServer };
