const request = require("request-promise");
const fs = require("fs");

let KEY = "B63wBhc83u_6AKC06cC7zeMtzyhD4wthprJgzUQ5"
let baseUrl = 'https://www.rescuetime.com/anapi/'

//TERMINAL Processes
const { exec } = require("child_process");
function terminal(cmd) {
  exec(cmd, (err, stdout, stderr) => {
    if (err) {console.log(err);}
  });
}

function appendRequest(url, path, res){
  request(url, path)
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

function writeRequest(url, path, res){
  request(url, path)
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



exports.daily = (req, res) => {
  
  let url = baseUrl + 'daily_summary_feed?key=' + KEY
  console.log(url)
  
  let path = './_data/rescueDaily.json'
  
  writeRequest(url, path, res)
    
}

  // let date = new Date()
  // let dateISO = date.getFullYear()+'-0'+(date.getMonth()+1)+'-'+(date.getDate()); //corrects month, adds a zero for months less than 10
  // console.log(dateISO)  
  // let bodyToday = {
  //       startdateymd: dateISO, 
  //       enddateymd: dateISO,
  //       data_fields: "steps,distance,hr_average,hr_min,hr_max"
  //     }