import BasePage from './base.page';

class DynamicControlsPage extends BasePage {
    get checkBox() {
        return $('#checkbox input');
    }

    get notificationMsg() {
        return $('#message');
    }

    get button() {
        return $('button[onclick="swapCheckbox()"]');
    }

    get checkBoxBack() {
        return $('#checkbox');
    }

    get inputField() {
        return $('#input-example input');
    }

    get enableBtn() {
        return $('#input-example button');
    }

    open() {
        return super.open('dynamic_controls');
    }
}

export default new DynamicControlsPage();
