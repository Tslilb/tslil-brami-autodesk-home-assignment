require('dotenv').config();
var http=require('http');
// var server=http.Server(app);
const twitter_api = require("./twitter_module/twitter_api");
const health = require("./health_module/health");
var express = require("express");
var app = express();
var router = express.Router();


var port = process.env.PORT || "80";

app.use(express.static('client'));

// server.listen(port,function(){
//   console.log(`server is listening on port ${port}`);
// });


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