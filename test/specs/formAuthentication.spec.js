import FormAuthenticationPage from '../pages/formAuthentication.page';
import { user } from '../../data/user';
import { data } from '../../data/data';

describe('Smoke login with valid credentials', function () {
  it('should login', function () {
    FormAuthenticationPage.open();

    FormAuthenticationPage.login(user.userName, user.password);
    expect(FormAuthenticationPage.successNotification.getText()).toContain(
      data.successfulLoginNotification,
    );
  });

  it('should log out', function () {
    FormAuthenticationPage.logOutBtn.click();
    expect(FormAuthenticationPage.successNotification.getText()).toContain(
      data.successfulLogOutNotification,
    );
  });
});
