const express = require('express');
const path = require("path");

const port = process.env.PORT || 3000; // for Heroku 
const app = express();



const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('backend/data.json');
const db = low(adapter);

app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});


let controller = require('./controller')(db);

app.get('/api/carouselContent', controller.getCarouselContent);
// app.get('/api/news/tennisnews', newsController.getTennisNews);
// app.get('/api/news/latestSportNews', newsController.getLatestSportNews);
// app.get('/api/getFromBlog', newsController.getRecentFromBlog);
// app.get('/api/news/recentPosts', newsController.getRecentPosts);
// app.get('/api/news/media', newsController.getMedia);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});