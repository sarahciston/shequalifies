const request = require("request-promise");
const fs = require("fs");

let oauth = fs.readFileSync('./oauth.json');
// let oauth = {"access_token":"a7e802f4ca407c1bacdc3ded2e01c7d180efdbdb","expires_in":10800,"token_type":"Bearer","scope":"user.info,user.metrics,user.activity,user.sleepevents","refresh_token":"879514520b3ed501e232b697d067010a0f8291f1","userid":7900826}
oauth = JSON.parse(oauth);

let ACCESS = oauth.access_token;
let header = { "Authorization": ("Bearer " + ACCESS)} 


function getUnixTime(){
  const timestamp = Date.now();
  const unixTime = Math.floor(timestamp/1000); //milliseconds
  return unixTime
}

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
      // res.send(r)
    
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
      r = r.replace(/\\/g, '') //this replaces all instances of backslash with nothing, g= global, extra backslash is to cancel out the character, forward slashes frame the characters instead of quote for global for some reason
      console.log(r)
      // res.send(r)
    
      fs.writeFile(path, r, (err) => {
        if (err) throw err;
        console.log('saved to ' + path);
      });
    
      // let fresh = "refresh"
      // terminal(fresh)
    }) 
    .catch(err => {console.log(err)})
}

exports.refresh = (req, res) => {
  
  let REFRESH = oauth.refresh_token;
  let urlRefresh = 'https://account.withings.com/oauth2/token'
  let bodyRefresh = {
        grant_type: "refresh_token",
        client_id: process.env.CLIENT_ID, 
        client_secret: process.env.CLIENT_SECRET, 
        refresh_token: REFRESH 
      }

  let options = { formData: bodyRefresh }
  console.log(options)

  request.post(urlRefresh, options)
      // .then(r => {JSON.parse(r)})
    .then(r => {
        r = r.replace('\\', '')
        console.log("new data " + r)
        // res.send(r)

        fs.writeFile('./oauth.json', r, (err) => {
          if (err) throw err;
          console.log('access token refreshed, saved');
        });

        let fresh = "refresh"
        terminal(fresh)

        return r
    }).catch(err => {console.log(err)})
}

// exports.oauth = (req, res) => {
//   let url1 = "https://account.withings.com/oauth2_user/authorize2"
//   let body1 = {
//     response_type: "code",
//     client_id: process.env.CLIENT_ID, 
//     client_secret: process.env.CLIENT_SECRET,
//     state: "aok",
//     scope: "user.info,user.metrics,user.activity,user.sleepevents",
//     redirect_uri: "https://shequalifies.glitch.me"
//   }
//   let options1 = { formData: body1 }

//   request.get(url1, options1)
//       // .then(r => {JSON.parse(r)})
//     .then(r => {
//         console.log("Access Response" + r)
//         fs.writeFile('./oauthAuthorize.json', r, (err) => {
//           if (err) throw err;
//           console.log('access token accquired, saved');
//         });
//         return r
//     }).then(r => {
//         let authCode = r;
//         let url2 = "https://wbsapi.withings.com/v2/oauth2";
//         let body2 = {
//           action: "requesttoken",
//           grant_type: "authorization_code",
//           client_id: process.env.CLIENT_ID, 
//           client_secret: process.env.CLIENT_SECRET,
//           code: authCode,
//           redirect_uri: "https://shequalifies.glitch.me" 
//           };
//         let options2 = { formData: body2 };
        
//         request.post(url2, options2)
//           .then(r => {
//             console.log("Access Response" + r)
//             fs.writeFile('./oauthAuthorize.json', r, (err) => {
//               if (err) throw err;
//               console.log('access token accquired, saved');
//             });
//           return r
//         }).catch(err => {console.log(err)})
    
//     }).catch(err => {console.log(err)})
// }

//DAILY
//curl -H 'Authorization: Bearer 2460b418ae78ef4fc6729f2c35fbe7749b409dfc' 'https://wbsapi.withings.net/v2/measure?action=getactivity&startdateymd=2020-08-07&enddateymd=2020-08-07&data_fields=steps,distance,hr_average,hr_min,hr_max&lastupdate'

// curl -H 'Authorization: Bearer 2460b418ae78ef4fc6729f2c35fbe7749b409dfc' 'https://wbsapi.withings.net/v2/measure?action=getactivity&lastupdateymd=2020-08-01&data_fields=steps,distance,hr_average,hr_min,hr_max&lastupdate'


// 1596265200 aug 1 00:00:00 unix time

exports.today = (req, res) => {
  
  let date = new Date()
  let dateISO = date.getFullYear()+'-0'+(date.getMonth()+1)+'-0'+(date.getDate()); //corrects month, adds a zero for months less than 10
  // console.log(dateISO)
  "https://wbsapi.withings.net/v2/measure"
  let urlToday = "https://wbsapi.withings.net/v2/measure?action=getactivity&data_fields=steps,distance,hr_average,hr_min,hr_max&lastupdate=1596355877" //added lastupdate 8-2 epoch time // &lastupdate=1596355877
  
  // let bodyToday = {
  //       // startdateymd: "2020-08-07", //dateISO 
  //       // enddateymd: "2020-08-07", //dateISO
  //       // lastupdate: 1596269477,
  //       // lastupdate: 1596355877,
  //       // offset: 400,
  //       data_fields: "steps,distance,hr_average,hr_min,hr_max"
  //     }
  //change body for diff request
  let options = { headers: header }//, formData: bodyToday } 
  
  console.log(options)
  
  let path = './_data/withingsToday.json'

  writeRequest(urlToday, options, path, res)
  
  //add to write to a json/data/db file for display later
  
}

// curl -H 'Authorization: Bearer 4404f876b2842d0c8908ba3da995f032cddea0da' 'https://wbsapi.withings.net/v2/sleep?action=getsummary&startdateymd=2020-07-28&enddateymd=2020-08-02&data_fields=sleep_score,deepsleepduration,lightsleepduration,remsleepduration,wakeupduration,wakeupcount,durationtosleep,durationtowakeup,hr_max,hr_min,hr_average'

exports.sleep = (req, res) => {
  
  let date = new Date()
  let dateISO = date.getFullYear()+'-0'+(date.getMonth()+1)+'-0'+(date.getDate()); //corrects month, adds a zero for months less than 10
  
  let urlSleep = 'https://wbsapi.withings.net/v2/sleep?action=getsummary&data_fields=sleep_score,deepsleepduration,lightsleepduration,remsleepduration,wakeupduration,wakeupcount,durationtosleep,durationtowakeup,hr_max,hr_min,hr_average&lastupdate=1596265201'
  
  // let vars = {
  //       // startdateymd: "2020-07-20", 
  //       // enddateymd: "2020-08-07",
  //       // // lastupdate: dateISO,
  //       offset: 200, 
  //       data_fields: "sleep_score,deepsleepduration,lightsleepduration,remsleepduration,wakeupduration,wakeupcount,durationtosleep,durationtowakeup,hr_max,hr_min,hr_average"
  //       // lastupdate: "2020-07-28"
  //     }
  
  
  let options = { headers: header } //, formData: vars }
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
  
  let urlWeight = 'https://wbsapi.withings.net/measure?action=getmeas&meastype=1&category=1&&lastupdate=1596265201'
  let weights = {
        startdate: dateISO, 
        enddate: dateISO,
        // lastupdate: "2020-07-31",
        // lastupdate: dateISO,
        // offset: 200
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

