const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');

const app = express();
const server = createServer(app);

// app.get('/', (req, res) => {
//   res.send("# Node Chat\
//   # YSE 横浜システム工学院専門学校\
//   # IT・ゲームソフト科\
//   # 220064\
//   # モハッマド　ワヒュ　ブディ　ムルヤ\
//   ");
// });

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});