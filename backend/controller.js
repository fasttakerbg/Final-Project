// const _ = require("lodash");

module.exports = (db) => {
    // db.defaults({
    //         news: [],
    //         blog: []
    //     })
    //     .value();

    // Get
    function getCarouselContentFromDB() {
        return db.get('countryList').value();
    }


    function getCarouselContent(req, res) {
        const carousel = getCarouselContentFromDB();

        res.send({
            result: carousel
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
    };
};