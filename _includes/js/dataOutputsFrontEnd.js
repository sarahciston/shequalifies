



// <!-- <script type="application/javascript">

fetch('/rescueDaily').then(res =>{
  res = JSON.parse(res)
  console.log(res)
}).then(res=>{
  var test = document.getElementById("test");
  test.innerhtml(res[0].total_duration_formatted);
  test.hidden = false;
  
  // for (let i=0; i< rescueDaily.length; i++){
  //   let date = rescueDaily[i].date
  //   let dailyCompUse = rescueDaily[i].total_duration_formatted
  //   console.log(date, dailyCompUse)
  // }
  
}).catch(err =>{console.log(err)})

// </script> -->




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


