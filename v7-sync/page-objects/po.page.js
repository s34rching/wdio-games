import Basepage from "../page-objects/basepage.page";

class PoPage extends Basepage {
    get productsCarousel() {
        return $('#carousel-example-generic');
    }
}

export default new PoPage();
