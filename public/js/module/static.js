const express = require('express');
const router = express.Router();
const path = require('path');

// 정적 파일 경로 설정
const staticFiles = {
  '/': 'html/index.html',
  '/style.css': 'css/style.css',
  '/app.js': 'js/app.js'
};

// 모든 요청에 대해 정적 파일 서빙
router.get('*', function(req, res) {
  const reqPath = req.path;
  if (staticFiles[reqPath]) {
    const filePath = path.join(__dirname, `../public/${staticFiles[reqPath]}`);
    res.sendFile(filePath);
  } else {
    res.status(404).send('Not Found');
  }
});

module.exports = router;
