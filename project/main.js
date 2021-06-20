require('dotenv').config();
const twitter_api = require("./twitter_module/twitter_api");
const health = require("./health_module/health");
const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT || "80";


const rout = router.get("/", (req, res) => res.send("Welcome to Tslil's app"));
app.use(rout);


// Routings
app.use("/health", health);

app.get("/tweets", async function (req, res) {
  const query = req.query.query;
  const tweets = await twitter_api.query(query);
  res.json(tweets);
})

app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

const server = app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});