import PhoneInputBasePage from '../pages/phoneInputBase.page';

class PhoneInputPage extends PhoneInputBasePage {
  get phoneInput() {
    return $$('input[placeholder="Enter phone number"]');
  }

  get value() {
    return $("//code[contains(text(),'9990')]");
  }

  open() {
    return super.open('');
  }
}
export default new PhoneInputPage();
