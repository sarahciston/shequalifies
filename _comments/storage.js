'use strict';

const fs = require('fs');
const crypto = require('crypto');

const writeCache = {};

async function storeComment(comment) {
  const key = comment.commentId; //comment.itemId;
  if (!writeCache[key]) {
    writeCache[key] = fs.createWriteStream(`./_data/comments/${hash(key)}.json`, {
      flags: 'a',
    });
  }

  return new Promise((resolve, reject) => {
    writeCache[key].write(`${JSON.stringify(comment)}\n`, 'utf8', (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

async function readComments(itemId) {
  const key = itemId;
  const data = await new Promise((resolve, reject) => {
    fs.readFile(`./_data/comments/${hash(key)}.json`, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return resolve(``);
      }
      resolve(data);
    });
  });
  return data
    .split('\n')
    .filter((line) => line !== '')
    // .map((line) => JSON.parse(line));
}

// module.exports = {
//   storeComment,
//   readComments,
// };

module.exports = {
  storeComment
};

function hash(str) {
  return crypto
    .createHash('md5')
    .update(str)
    .digest('hex');
}