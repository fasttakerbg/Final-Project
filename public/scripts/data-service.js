import { requester } from 'requester';

class DataService {

    peruInfo() {
        return requester.getJSON('/api/peru');
    }

    carouselContent() {
        return requester.getJSON('/api/carouselContent')
    }

}
const dataService = new DataService();
export { dataService };