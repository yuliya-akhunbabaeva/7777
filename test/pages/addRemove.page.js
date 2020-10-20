import BasePage from './base.page';

class AddRemovePage extends BasePage {
    get addElementBtn() {
        return $('button');
    }

    get deleteBtn() {
        return $('.added-manually');
    }

    open() {
        return super.open('add_remove_elements/');
    }
}

export default new AddRemovePage();