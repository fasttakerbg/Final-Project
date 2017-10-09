// import { htmlHandler } from 'htmlHandler';
// import { footerController } from 'footerController';
// import { headerController } from 'headerController';
import { controller } from 'controller';

class Router {

    start() {
        let sammy = Sammy(function() {
            // this.before({}, () => {
            //     headerController.initialize();
            // });
            // Home Page
            this.get('#/', (sammy) => sammy.redirect('#/home'));
            this.get('#/home', controller.getHome);

            //Post Page
            this.get('#/post', controller.getPost);


            // Blog PAge
            this.get('#/blog', controller.getBlog);
            // this.get('#/blog/:id', (sammy) => controller.getCategoryNews(sammy));
            // this.post('#/account/sign-in', accountController.signIn);
            // this.post('#/account/sign-up', accountController.signUp);

            // this.post('#/account/add-to-watchlist', accountController.addToWatchlist);

            // this.get('#/account/sign-out', accountController.signOut);
            // this.get('#/account/market-overview', accountController.getMarketOverview);
            // this.get('#/account/watchlist', accountController.getWatchlist);
            // this.get('#/account/news', accountController.getNews);
            // this.get('#/account/user-settings', accountController.getUserSettings);

            // // Other
            // this.get('#/about', () => htmlHandler.setHtml('about', '#content'));
            // this.get('#/contact', accountController.validateContactForm);
            // this.post('#/newsletter', footerController.subscription);
            // this.post('#/contact', footerController.contact);
        });

        $(function() {
            sammy.run('#/');
        });
    }
}

const router = new Router();

export { router };