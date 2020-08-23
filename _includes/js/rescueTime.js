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
      // res.send(r)
    
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
      r = r.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, ''); //fixes weird html in json issue
      console.log(r)
      // res.send(r)
    
      fs.writeFile(path, r, (err) => {
        if (err) throw err;
        console.log('saved to ' + path);
      });
    }) 
    .catch(err => {console.log(err)})
}



exports.daily = (req, res) => {
  
  let url = baseUrl + 'daily_summary_feed?key=' + KEY
  // console.log(url)
  
  let path = './_data/rescueDaily.json'
  
  writeRequest(url, path, res)

}

exports.today = (req, res) => {
  
  let date = new Date()
  let dateISO = date.getFullYear()+'-0'+(date.getMonth()+1)+'-'+(date.getDate()); //corrects month, adds a zero for months less than 10
  
  let url = baseUrl + 'data?key=' + KEY
  // console.log(url)
  
  let params = {
      perspective: "interval",
      // resolution_time: "overview", 
      restrict_kind: "productivity", 
      restrict_begin: dateISO,
      restrict_end: dateISO,
      format: "json"
    }

//only productivity types and times
//   https://www.rescuetime.com/anapi/data?key=B63wBhc83u_6AKC06cC7zeMtzyhD4wthprJgzUQ5&perspective=interval&resolution_time=day&restrict_kind=productivity&restrict_begin=2020-08-10&restrict_end=2020-08-10&format=json

  let options = { formData: params }
  
  let path = './_data/rescueToday.json'
  
  writeRequest(url, path, res)
    
}

exports.august = (req, res) => {
  
  let date = new Date()
  let dateISO = date.getFullYear()+'-0'+(date.getMonth()+1)+'-'+(date.getDate()); //corrects month, adds a zero for months less than 10
  
  let url = baseUrl + 'data?key=' + KEY
  // console.log(url)
  
  let params = {
      perspective: "rank",
      restrict_kind: "overview", 
      restrict_begin: "2020-08-01",
      restrict_end: "2020-08-31", //dateISO
      format: "json"
    }

//only types of work and amount of time, high level, all month aggregate
// https://www.rescuetime.com/anapi/data?key=B63wBhc83u_6AKC06cC7zeMtzyhD4wthprJgzUQ5&perspective=rank&restrict_kind=overview&restrict_begin=2020-08-01&restrict_end=2020-08-15&format=json
//   https://www.rescuetime.com/anapi/data?key=B63wBhc83u_6AKC06cC7zeMtzyhD4wthprJgzUQ5&perspective=interval&resolution_time=day&restrict_kind=productivity&restrict_begin=2020-08-10&restrict_end=2020-08-10&format=json

  let options = { formData: params }
  
  let path = './_data/rescueAugust.json'
  
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


// <script type="application/javascript">
//   let path = {{ page }}
//   console.log(path)
//   // let f = fs.readFileSync("./posts/bodydata.md")
//   let f = fs.readFileSync(path)
//   f = String(f)
//   let words = f.split(' ') //creates an array
//   let wordcount = words.length
//   console.log(wordcount)
//   return wordcount
// </script>