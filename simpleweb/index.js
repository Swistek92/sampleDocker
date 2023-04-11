import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("----____-------- how are you green");
});

app.listen(8080, () => {
  console.log("listening on 8080 port");
});
