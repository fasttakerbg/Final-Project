import { dataService } from 'dataService'
import { handlebarsHandler } from 'handlebarsHandler'

class Controller {

    getHome() {
        let promises = [
            dataService.carouselContent(),
            // dataService.peruInfo(),
            // dataService.egyptInfo(),
            // dataService.cambodiaInfo(),
            // dataService.bulgariaInfo(),
        ];
        Promise.all(promises).then((values) => {
            let carouselContent = values[0];
            // let peruInfo = values[0];
            // let egyptInfo = values[1];
            // let cambodiaInfo = values[2];
            // let bulgariaInfo = values[3];

            handlebarsHandler.createTemplate('home', '#template-content', {
                carouselContent: carouselContent,
                // peruInfo: peruInfo,
                // egyptInfo: egyptInfo,
                // cambodiaInfo: cambodiaInfo,
                // bulgariaInfo: bulgariaInfo
            });
        })

    }
}

const controller = new Controller();

export { controller };