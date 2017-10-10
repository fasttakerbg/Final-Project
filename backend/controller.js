module.exports = (db) => {
    function getCarouselContentFromDB() {
        return db.get('carouselContent').value();
    }

    function getCarouselContent(req, res) {
        const carousel = getCarouselContentFromDB();

        res.send({
            result: carousel,
        });
    }

    function getLatestSportNewsFromDB() {
        return db.get('latestSportNews').value();
    }

    function getLatestSportNews(req, res) {
        const news = getLatestSportNewsFromDB();
        res.send({
            result: news,
        });
    }

    function getRecentPostsFromDB() {
        return db.get('recentPosts').value();
    }

    function getRecentPosts(req, res) {
        const posts = getRecentPostsFromDB();
        res.send({
            result: posts,
        });
    }

    function getMediaFromDB() {
        return db.get('media').value();
    }

    function getMedia(req, res) {
        const media = getMediaFromDB();
        res.send({
            result: media,
        });
    }

    function getPostFromDB() {
        return db.get('post').value();
    }

    function getPost(req, res) {
        const post = getPostFromDB();
        res.send({
            result: post,
        });
    }

    function getCommentsFromDB() {
        return db.get('comments').value();
    }

    function getComments(req, res) {
        const comments = getCommentsFromDB();
        res.send({
            result: comments,
        });
    }


    function getBlogArticlesFromDB() {
        return db.get('blogArticles').value();
    }

    function getBlogArticles(req, res) {
        const blogArticles = getBlogArticlesFromDB();
        res.send({
            result: blogArticles,
        });
    }

    return {
        getCarouselContent,
        getLatestSportNews,
        getRecentPosts,
        getMedia,
        getPost,
        getComments,
        getBlogArticles,
    };
};