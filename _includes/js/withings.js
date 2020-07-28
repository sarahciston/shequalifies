const request = require("request-promise");
const fs = require("fs");

let oauth = fs.readFileSync('./_includes/data/oauth.json');
// let oauth = {"access_token":"a7e802f4ca407c1bacdc3ded2e01c7d180efdbdb","expires_in":10800,"token_type":"Bearer","scope":"user.info,user.metrics,user.activity,user.sleepevents","refresh_token":"879514520b3ed501e232b697d067010a0f8291f1","userid":7900826}
oauth = JSON.parse(oauth);

let ACCESS = oauth.access_token
let REFRESH = oauth.refresh_token
let header = { "Authorization": ("Bearer " + ACCESS)} 
let urlRefresh = 'https://account.withings.com/oauth2/token'
let bodyRefresh = {
        grant_type: "refresh_token",
        client_id: process.env.CLIENT_ID, 
        client_secret: process.env.CLIENT_SECRET, 
        refresh_token: REFRESH 
      }

let options = { formData: bodyRefresh }
// console.log(options)


//TERMINAL Processes
const { exec } = require("child_process");
function terminal(cmd) {
  exec(cmd, (err, stdout, stderr) => {
    if (err) {console.log(err);}
  });
}

function makeRequest(url, opt, path, res){
  request.post(url, opt, path)
    .then(r => {
      console.log(r)
      res.send(r)
    
      fs.appendFile(path, r, (err) => {
        if (err) throw err;
        console.log('saved to ' + path);
      });
    }) 
    .catch(err => {console.log(err)})
}


exports.refresh = (req, res) => {

  request.post(urlRefresh, options)
      // .then(r => {JSON.parse(r)})
    .then(r => {
        console.log("new data " + r)

        res.send(r)

        fs.writeFile('./_includes/data/oauth.json', r, (err) => {
          if (err) throw err;
          console.log('access token refreshed, saved');
        });

        // let fresh = "refresh"
        // terminal(fresh)

        return r
    }).catch(err => {console.log(err)})
}


//DAILY
//curl -H 'Authorization: Bearer 7c850ddd63715e4e34ad1952a4f2aabddf2f2a26' 'https://wbsapi.withings.net/v2/measure?action=getactivity&startdateymd=2020-07-20&enddateymd=2020-07-20&data_fields=steps,distance,hr_average,hr_min,hr_max&lastupdate'

exports.daily = (req, res) => {
  
  let date = new Date()
  let dateISO = date.getFullYear()+'-0'+(date.getMonth()+1)+'-'+(date.getDate()); //corrects month, adds a zero for months less than 10
  // console.log(dateISO)
  
  let urlToday = "https://wbsapi.withings.net/v2/measure?action=getactivity"
  let bodyToday = {
        startdateymd: dateISO, 
        enddateymd: dateISO,
        data_fields: "steps,distance,hr_average,hr_min,hr_max"
      }
  //change body for diff request
  let options = { headers: header, formData: bodyToday } 
  
  console.log(options)
  
  let path = './_includes/data/daily.json'

  makeRequest(urlToday, options, path, res)
  
  //add to write to a json/data/db file for display later
  
}