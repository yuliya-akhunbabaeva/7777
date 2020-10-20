import NotificationMessagesPage from '../pages/notificationMessages.page';
import { data } from '../../data/data';

describe('Verify notification message', function () {
  it('should check if correct notification message is displayed', function () {
    NotificationMessagesPage.open();

    NotificationMessagesPage.clickHere.click();
    let successMessage = data.notificationActionSuccessful;
    let notification = NotificationMessagesPage.notification.getText();
    if (!notification.includes(successMessage)) {
      for (let i = 0; i < 5; i++) {
        NotificationMessagesPage.clickHere.click();
        if (notification.includes(successMessage)) {
          break;
        } else if (i >= 2) {
          console.log('FAIL');
        }
      }
    }
  });
});
