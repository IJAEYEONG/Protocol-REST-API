const express = require('express');
const path = require('path');
const app = express();

// 정적 파일 서빙
app.use(express.static('public'));

// 라우팅 모듈 추가
const staticRouter = require('./public/js/module/static.js');

// 모든 요청에 대해 staticRouter를 사용
app.use('/', staticRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express 서버가 http://localhost:${PORT}/ 에서 실행 중입니다.`);
});

module.exports = app;
