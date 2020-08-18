const express = require("express");
const fs = require('fs');
const cors = require('cors');
const uuid = require('uuid');
const url = require('url');
const schedule = require('node-schedule');

// const { validateComment } = require('./_comments/validation');
// const { renderMarkdown } = require('./_comments/markdown');
// const { storeComment, readComments } = require('./_comments/storage');
const { storeComment } = require('./_comments/storage');

const app = express();

const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// let bodyParser = require("body-parser");

// "http-server _site/ -c-1 -p $PORT"

app.set('view engine', "jekyll")

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

////COMMENTS START

async function createComment(req) {
  let basename = req.body.basename;
  basename = "/" + basename.replace('.md', '');
      
  let comment = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    quote: req.body.quote,
    pageId: req.body.pageId,
    basename: basename,
    commentId: uuid.v4(),
    createdAt: new Date().toISOString()
  }
    
  await storeComment(comment);

  return mapComment(comment);
}

function mapComment(data) {
  return {
    commentId: data.commentId,
    pageId: data.pageId,
    basename: data.basename,
    name: data.name,
    email: data.email,
    message: data.message,
    quote: data.quote,
    createdAt: data.createdAt,
    hidden: false,
  };
}

app.post('/newComment', (req, res, next) => {
  createComment(req)
    .then((data) => {
      console.log(data);
      console.log(data.basename)
      res.redirect(data.basename)
  }).catch((err) => next(err))
});
////COMMENTS END



app.use(express.static("_site"))

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/_site/index.html");
});

let withings = require("./_includes/js/withings.js")
// app.all("/withOauth", withings.oauth) //doesnt work use terminal
app.get("/withRefresh", withings.refresh)

app.get("/withToday", withings.today)
app.get("/withWeight", withings.weight)
app.get("/withSleep", withings.sleep)

let rescue = require("./_includes/js/rescueTime.js")
app.get("/rescueDaily", rescue.daily)
app.get("/rescueToday", rescue.today)
app.get("/rescueAugust", rescue.august)

let path = "./posts/bodydata.md"
let { wordcount } = require("./_includes/js/dataOutputs.js")
app.get("/wordcount", wordcount)

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

//chron jobs
const cron = require('./cron.js')

var ruleFresh = new schedule.RecurrenceRule();
// ruleFresh.dayOfWeek = [0, new schedule.Range(4, 6)];
// ruleFresh.hour = [0, new schedule.Range(4, 6)];
ruleFresh.hour = [0, new schedule.Range(2, 22, 2)]; //2,4,6,8,10,12,14,16,18,20,22] step param 2
ruleFresh.minute = 0;
var j = schedule.scheduleJob(ruleFresh, function(){
  cron.fresh()
  console.log(j.nextInvocation())
});

var ruleLoad = new schedule.RecurrenceRule();
// ruleFresh.dayOfWeek = [0, new schedule.Range(4, 6)];
// ruleFresh.hour = [0, new schedule.Range(4, 6)];
ruleLoad.hour = [0, new schedule.Range(1, 23, 4)]; //2,4,6,8,10,12,14,16,18,20,22] step param 2
ruleLoad.minute = 15;
var k = schedule.scheduleJob(ruleLoad, function(){
  cron.load()
  console.log(k.nextInvocation())
});

// var j = schedule.scheduleJob('* * /2 * *', cron.fresh() ); //refresh withings code
// var k = schedule.scheduleJob('* * /3 * *', cron.load() ); //refresh withings code

// var j = schedule.scheduleJob({minute: 1}, cron.fresh())
// var k = schedule.scheduleJob({hour: 2}, cron.load())

// var j = schedule.scheduleJob({minute: 7}, function(fireDate){
//   console.log('answer me!' + fireDate);
//   cron.fresh()
// });



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



// ////COMMENTS START

// async function getComments(req) {
//   const pageId = req.query.pageId;
//   const comments = await readComments(pageId);
//   return {
//     comments: comments.map(mapComment),
//   };
// }

// // function getUserData(req) {
// //   const data = req.headers.authorization.split('===')[1];
// //   return JSON.parse(Buffer.from(data, 'base64').toString('utf8'));
// // }

// async function createComment(req) {
//   const comment = req.body;
//   let postID = comment.post_id;
//   let name = comment.name;
//   let email = comment.email;
//   let message = comment.message;
//   // console.log(comment)

//   // const { userId, username, userPic, userUrl, userEmail } = getUserData(req);
//   // const { name, email } = getUserData(req);

//   // const valid = validateComment(comment);

//   // if (!valid) {
//   //   throw new Error(
//   //     `Request validation failed: ${JSON.stringify(comment)} ${JSON.stringify(
//   //       validateComment.errors,
//   //     )}`,
//   //   );
//   // }
//   // comment.userId = userId;
//   // comment.username = username;
//   // comment.userPic = userPic;
//   // comment.userUrl = userUrl;
//   // comment.userEmail = userEmail;
//   // comment.commentUrl = getCommentUrl(comment);
  
  
//   comment.postID = postID;
//   comment.name = name;
//   comment.email = email;
//   comment.message = message;
//   comment.commentID = req.body.commentID || uuid.v4();
//   comment.createdAt = new Date().toISOString();

//   await storeComment(comment);

//   return mapComment(comment);
// }

// // function getCommentUrl(comment) {
// //   const commentItemId = comment.originalItemId;
// //   const parsedCommentUrl = url.parse(
// //     comment.itemProtocol + '//' + commentItemId + '#jc' + comment.commentId,
// //   );
// //   parsedCommentUrl.port = comment.itemPort;
// //   delete parsedCommentUrl.href;
// //   delete parsedCommentUrl.host;
// //   return url.format(parsedCommentUrl);
// // }

// function mapComment(data) {
//   return {
//     // itemId: data.itemId,
//     // commentUrl: data.commentUrl,
//     commentID: data.commentID,
//     postID: data.postID,
//     // replyTo: data.replyTo,
//     // parentId: data.parentId,
//     // userId: data.userId,
//     name: data.name,
//     email: data.email,
//     // username: data.username,
//     // userPic: data.userPic,
//     // userUrl: data.userUrl,
//     message: data.message,
//     // htmlMessage: renderMarkdown(data.message),
//     // htmlContent: renderMarkdown(data.message),
//     createdAt: data.createdAt,
//     hidden: false,
//   };
// }

// app.get('/v2/comments', (req, res, next) =>
//   getComments(req)
//     .then((response) => res.json(response))
//     .catch((err) => next(err)),
// );

// // app.post('/comments/create', (req, res, next) =>
// app.post('/postComment', (req, res, next) => {
//   // console.log(req.body);
//   createComment(req)
//   //   .then((res) => {
//   //     // JSON.parse(res)
//   //     console.log(res)
//   // })
// });
// ////COMMENTS END