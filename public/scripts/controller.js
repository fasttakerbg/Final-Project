import { dataService } from 'dataService'
import { handlebarsHandler } from 'handlebarsHandler'

class Controller {
    getHome() {
        const promises = [
            dataService.carouselContent(),
            dataService.latestSportNews(),
            dataService.recentPosts(),
            dataService.displayMedia(),
            // dataService.peruInfo(),
            // dataService.egyptInfo(),
            // dataService.cambodiaInfo(),
            // dataService.bulgariaInfo(),
        ];
        Promise.all(promises).then((values) => {
            const carouselContent = values[0];
            const latestSportNews = values[1];
            const recentPosts = values[2];
            const media = values[3];
            // let peruInfo = values[0];
            // let egyptInfo = values[1];
            // let cambodiaInfo = values[2];
            // let bulgariaInfo = values[3];

            handlebarsHandler.createTemplate('home', '#template-content', {
                carouselContent: carouselContent,
                latestSportNews: latestSportNews,
                recentPosts: recentPosts,
                media: media,
            });
        });
    }

    getPost() {
        const promises = [
            dataService.loadPost(),
            dataService.recentPosts(),
            dataService.getComments(),

        ];
        Promise.all(promises).then((values) => {
            const post = values[0];
            const recentPosts = values[1];
            const comments = values[2];

            handlebarsHandler.createTemplate('post', '#template-content', {
                recentPosts: recentPosts,
                post: post,
                comments: comments,
            });
        });
    }

    getBlog() {
        const promises = [
            dataService.getBlog(),


        ];
        Promise.all(promises).then((values) => {
            const blogArticles = values[0];


            handlebarsHandler.createTemplate('blog', '#template-content', {
                blogArticles: blogArticles,
            });
        });
    }
}

const controller = new Controller();

export { controller };