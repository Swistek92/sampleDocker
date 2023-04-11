import express from "express";
import redis from "redis";

const app = express();
const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});
client.set("visits", 0);

app.get("/", (req, res) => {
  // process.exit(0);
  client.get("visits", (err, visits) => {
    try {
      res.send("Number of visits " + visits);
      client.set("visits", Number(visits) + 1);
    } catch (error) {
      console.log(error);
    }
  });
});

app.listen(8081, () => {
  console.log("listening on port 8081");
});
