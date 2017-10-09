import { dataService } from 'dataService'
import { handlebarsHandler } from 'handlebarsHandler'

class Controller {

    getHome() {
        let promises = [
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
            let carouselContent = values[0];
            let latestSportNews = values[1];
            let recentPosts = values[2];
            let media = values[3];
            // let peruInfo = values[0];
            // let egyptInfo = values[1];
            // let cambodiaInfo = values[2];
            // let bulgariaInfo = values[3];

            handlebarsHandler.createTemplate('home', '#template-content', {
                carouselContent: carouselContent,
                latestSportNews: latestSportNews,
                recentPosts: recentPosts,
                media: media
                    // peruInfo: peruInfo,
                    // egyptInfo: egyptInfo,
                    // cambodiaInfo: cambodiaInfo,
                    // bulgariaInfo: bulgariaInfo
            });
        })

    }

    getPost() {
        let promises = [
            dataService.loadPost(),
            dataService.recentPosts(),
            dataService.getComments(),

        ];
        Promise.all(promises).then((values) => {
            let post = values[0];
            let recentPosts = values[1];
            let comments = values[2];

            handlebarsHandler.createTemplate('post', '#template-content', {
                recentPosts: recentPosts,
                post: post,
                comments: comments

            })
            console.log(post.title)
        })
    }
}

const controller = new Controller();

export { controller };