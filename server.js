const express = require("express");
const app = express();
// let bodyParser = require("body-parser");

// "http-server _site/ -c-1 -p $PORT"

app.set('view engine', "jekyll")

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.static("_site"))

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/_site/index.html");
});

let withings = require("./_includes/js/withings.js")
app.get("/refresh", withings.refresh)
app.get("/daily", withings.daily)

let rescue = require("./_includes/js/rescueTime.js")
app.get("/rescueDaily", rescue.daily)


const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});




//CLIENT SIDE DOESNT WORK
// fetch(urlRefresh, {
//     method: "OPTIONS",
//     origin: "https://shequalifies.glitch.me",
//     "Content-Type": "application/json",
//     "Access-Control-Request-Method": "POST",
//     "Access-Control-Request-Headers": "Authorization, Content-Type"
// }).then(res => {
//   console.log(res)
  

// fetch(urlRefresh)
// // fetch(urlRefresh, options)
// .then(r => {JSON.parse(r)})
// .then(r => {
//   console.log("new data " + r)

//   // fs.writeFile('./data/oauth.json', r, (err) => {
//   //   if (err) throw err;
//   //   console.log('access token refreshed, saved');
//   // });

//   return r
  
//   // makeRequest(urlRefresh, options, path, res) //customized
// }).catch(err => {console.log(err)})
  
// }).catch(err => {console.log(err)}) 