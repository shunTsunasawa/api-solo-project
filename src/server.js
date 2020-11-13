const express = require("express");

const setupExpressServer = () => {
  /* return configured express app */
  const app = express();
  //クライアントから送信されたデータを、req.body経由で会得、操作するための呪文。。。らしい
  app.use(express.json());

  app.get("/teapot", (req, res) => {
    res.status(418).send("I am not a server. I'm tea pot.").end();
  });

  
  // getリクエストのパラメータを拾うには:を使う
  app.get("/:a/plus/:b", (req, res) => {
    res.send({ result: Number(req.params.a) + Number(req.params.b) });
  });

  // Insomniaでpostリクエストボディを拾うにはURI下のフォームを使う(JSONに限らない)
  // {
  //   "sample": 3
  // }
  app.post("/echo", (req, res) => {
    res.json(req.body);
  });

  //useはhttpメソッドに関係なく呼び出される
  //nextを書いておくと下のappメソッドにも続く
  //expressメソッドは上から評価されるのでuseメソッドは基本上に書く。
  app.use("/secret", (req, res, next) => {
    if (Number(req.query.token) % 2 === 0) {
      return next();
    }
    res.status(401).end();
  });


  app.post("/secret/message", (req, res) => {
    if (req.body.shout === "marco") {
      res.send("polo").end();
    } else {
      res.status(403).end();
    }
  });

  return app;
};

module.exports = { setupExpressServer };
