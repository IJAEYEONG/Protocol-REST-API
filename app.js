const express = require('express');
const axios = require('axios');
const app = express();

const BaseUrl = 'https://api.themoviedb.org/3/movie/popular';
const Api_key = '10ad75c569818326a7686e6984c4d996';
const language = 'ko-kr';
const maxPage = 500;

app.get('/movies', async (req, res) => {
    try {
        const page = req.query.page || 1;
        const requestUrl = `${BaseUrl}?api_key=${Api_key}&language=${language}&page=${page}`;
        const response = await axios.get(requestUrl);
        const result = response.data;

        let list = [];
        result.results.forEach(element => {
            list.push(`<li><img src="https://image.tmdb.org/t/p/w500/${element.poster_path}"><br>제목:${element.title}<br>내용:${element.overview}</li>`);
        });

        res.send(`<ul>${list.join('')}</ul>`);
    } catch (error) {
        console.error(error);
        res.status(500).send('에러 발생');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
