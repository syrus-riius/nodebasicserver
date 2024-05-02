const express = require("express");

const app = express();
//Express 내부에 http 모듈이 내장되어 있음.

app.set("port", process.env.PORT || 3000);

app.use((req, res, next) => {
  console.log("모든 요청에 다 실행됩니다.");
  next();
});

app.get("/", (req, res) => {
  console.log("req", req);
  // console.log("res", res);
  res.send("Hello World!");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
