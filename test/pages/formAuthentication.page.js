import BasePage from './base.page';

class FormAuthenticationPage extends BasePage {
  get userNameInputField() {
    return $('#username');
  }

  get passwordInputField() {
    return $('#password');
  }

  get loginBtn() {
    return $('.radius');
  }

  get successNotification() {
    return $('#flash');
  }

  get logOutBtn() {
    return $('.button.secondary.radius');
  }

  login(userName, password) {
    this.userNameInputField.setValue(userName);
    this.passwordInputField.setValue(password);
    this.loginBtn.click();
  }

  open() {
    return super.open('login');
  }
}

export default new FormAuthenticationPage();
