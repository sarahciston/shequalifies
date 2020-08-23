const fs = require("fs");

// let rescueDaily = fs.readFileSync('../assets/data/rescueDaily.json');
// rescueDaily = JSON.parse(rescueDaily);

// for (let i=0; i< rescueDaily.length; i++){
//   let date = rescueDaily[i].date
//   let dailyCompUse = rescueDaily[i].total_duration_formatted
//   console.log(date, dailyCompUse)
// }

exports.wordcount = (req, res) => {
//   {{ site.post }}?=wordcount //posts/bodydata.html?=wordcount
  let path = req.query
  console.log(path)
  // let f = fs.readFileSync("./posts/bodydata.md")
  let f = fs.readFileSync(path)
  f = String(f)
  let words = f.split(' ') //creates an array
  let wordcount = words.length
  console.log(wordcount)
  return wordcount
}



// <ul>
// {% for day in site.assets.data.rescueDaily %}
//   <li>
//   {% day.total_duration_formatted %}
//   </li>
// {% endfor %}
// </ul>

// let rescueJuly = fs.readFileSync('../assets/data/rescueJuly.json');
// rescueJuly = JSON.parse(rescueJuly);
// //and so on for all JSON files

// {::options parse_block_html="true" /}
// <span>
// <ul>{::options parse_span_html="true" /}
// {% for item in site.dat.yaml %}
//   <il>{::options parse_span_html="true" /}
//     {% item.foo %}
//   </il>{::options parse_span_html="true" /}
// {% endfor %}  
// </ul>
// </span>  
// {::options parse_block_html="false" /}

// <div id="test" hidden="true">
// Regular text here again.
// </div>




// // <!-- <script type="application/javascript">
// fetch('/rescueDaily').then(res =>{
//   res = JSON.parse(res)
//   console.log(res)
//   var test = document.getElementById("test");
//   test.innerhtml(res[0].total_duration_formatted);
//   test.hidden = false;
// }).catch(err =>{console.log(err)})
// // </script> -->