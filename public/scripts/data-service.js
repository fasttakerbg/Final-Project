import { requester } from 'requester';

class DataService {
    peruInfo() {
        return requester.getJSON('/api/peru');
    }

    carouselContent() {
        return requester.getJSON('/api/carouselContent');
    }

    latestSportNews() {
        return requester.getJSON('api/latestSportNews');
    }

    recentPosts() {
        return requester.getJSON('/api/recentPosts');
    }

    displayMedia() {
        return requester.getJSON('/api/media');
    }

    loadPost() {
        return requester.getJSON('api/post');
    }

    getComments() {
        return requester.getJSON('api/comments');
    }
    getBlog() {
        return requester.getJSON('api/blogArticles');
    }
}
const dataService = new DataService();
export { dataService };