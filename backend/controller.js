// const _ = require("lodash");

module.exports = (db) => {
    // db.defaults({
    //         news: [],
    //         blog: []
    //     })
    //     .value();

    // Get
    function getCarouselContentFromDB() {
        return db.get('carouselContent').value();
    }


    function getCarouselContent(req, res) {
        const carousel = getCarouselContentFromDB();

        res.send({
            result: carousel
        });
    };




    function getLatestSportNewsFromDB() {
        return db.get('latestSportNews').value();
    }

    function getLatestSportNews(req, res) {
        const news = getLatestSportNewsFromDB();
        res.send({
            result: news
        });


    };


    function getRecentPostsFromDB() {
        return db.get('recentPosts').value();
    }

    function getRecentPosts(req, res) {
        const posts = getRecentPostsFromDB();
        res.send({
            result: posts
        });


    };

    function getMediaFromDB() {
        return db.get('media').value();
    }

    function getMedia(req, res) {
        const media = getMediaFromDB();
        res.send({
            result: media
        });


    };
    // function getTennisNews(req, res) {
    //     const news = getNewsFromDB()['tennisNews'];
    //     res.send({
    //         result: news
    //     });
    // };



    return {
        getCarouselContent,
        getLatestSportNews,
        getRecentPosts,
        getMedia,
    };
};