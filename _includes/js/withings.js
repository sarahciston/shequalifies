const request = require("request-promise");
const fs = require("fs");

let oauth = fs.readFileSync('./oauth.json');
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

// function makeRequest(url, opt, path, res){
//   request.post(url, opt, path)
//     .then(r => {
//       console.log(r)
//       res.send(r)
    
//       fs.writeFile(path, r, (err) => {
//         if (err) throw err;
//         console.log('saved to ' + path);
//       });
//     }) 
//     .catch(err => {console.log(err)})
// }

function appendRequest(url, opt, path, res){
  request(url, opt, path)
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

function writeRequest(url, opt, path, res){
  request(url, opt, path)
    .then(r => {
      console.log(r)
      res.send(r)
    
      fs.writeFile(path, r, (err) => {
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

        fs.writeFile('./oauth.json', r, (err) => {
          if (err) throw err;
          console.log('access token refreshed, saved');
        });

        // let fresh = "refresh"
        // terminal(fresh)

        return r
    }).catch(err => {console.log(err)})
}


//DAILY
//curl -H 'Authorization: Bearer 4404f876b2842d0c8908ba3da995f032cddea0da' 'https://wbsapi.withings.net/v2/measure?action=getactivity&startdateymd=2020-07-20&enddateymd=2020-07-20&data_fields=steps,distance,hr_average,hr_min,hr_max&lastupdate'

exports.today = (req, res) => {
  
  let date = new Date()
  let dateISO = date.getFullYear()+'-0'+(date.getMonth()+1)+'-0'+(date.getDate()); //corrects month, adds a zero for months less than 10
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
  
  let path = './_data/withingsToday.json'

  writeRequest(urlToday, options, path, res)
  
  //add to write to a json/data/db file for display later
  
}

// curl -H 'Authorization: Bearer 4404f876b2842d0c8908ba3da995f032cddea0da' 'https://wbsapi.withings.net/v2/sleep?action=getsummary&startdateymd=2020-07-28&enddateymd=2020-08-02&data_fields=sleep_score,deepsleepduration,lightsleepduration,remsleepduration,wakeupduration,wakeupcount,durationtosleep,durationtowakeup,hr_max,hr_min,hr_average'

exports.sleep = (req, res) => {
  
  let date = new Date()
  let dateISO = date.getFullYear()+'-0'+(date.getMonth()+1)+'-0'+(date.getDate()); //corrects month, adds a zero for months less than 10
  
  let urlSleep = 'https://wbsapi.withings.net/v2/sleep?action=getsummary'
  let vars = {
        startdateymd: "2020-07-28", 
        enddateymd: dateISO,
        data_fields: "sleep_score,deepsleepduration,lightsleepduration,remsleepduration,wakeupduration,wakeupcount,durationtosleep,durationtowakeup,hr_max,hr_min,hr_average"
        // lastupdate: "2020-07-28"
      }
  
  
  let options = { headers: header, formData: vars }
  console.log(options)
  
  let path = './_data/withingsSleep.json'

  writeRequest(urlSleep, options, path, res)
  
}




exports.weight = (req, res) => {
  
  // let weights = fs.readFileSync('./_data/withingsWeight2.json');
  // weights = JSON.parse(weights);
  // weights = weights.body.measuregrps
  // console.log(weights.length)
  
  let date = new Date()
  let dateISO = date.getFullYear()+'-0'+(date.getMonth()+1)+'-0'+(date.getDate()); //corrects month, adds a zero for months less than 10
  
  let urlWeight = 'https://wbsapi.withings.net/measure?action=getmeas&meastype=1&category=1&'
  let weights = {
        startdate: dateISO, 
        enddate: dateISO,
        // lastupdate: dateISO,
        offset: 0
      }
  let options = { headers: header, formData: weights }
  
  let path = './_data/withingsWeight.json'

  writeRequest(urlWeight, options, path, res)
  
  // weight data
  // convert time units, unix to js to LA time zone
  
//   let newWeight = fs.readFileSync('./_data/withingsWeight.json');
//   newWeight = JSON.parse(newWeight)
  
  
//   let unixTime = newWeight.body.measuregrps[0].date
//   let timestamp = new Date(unixTime * 1000)
//   timestamp = timestamp.toLocaleString("en-US")

//   // convert weight units, grams to pounds
//   let weight = newWeight.body.measuregrps[0].measures[0].value
//   weight = (weight * 0.0022046).toFixed(1)
  
//   let conversion = {
//     timestamp: timestamp,
//     weight: weight
//   }
//   conversion = JSON.stringify(conversion)
  
//   fs.writeFile("./_data/withingsWeight2.json", conversion, (err) => {
//         if (err) throw err;
//         console.log(conversion);
//       });

}

//'https://wbsapi.withings.net/measure?action=getmeas&meastype=1&category=1&lastupdate=2020-07-01'
