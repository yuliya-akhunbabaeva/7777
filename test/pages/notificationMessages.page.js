import BasePage from './base.page';

class NotificationMessagesPage extends BasePage {
  get clickHere() {
    return $('[href="/notification_message"]');
  }

  get notification() {
    return $('#flash');
  }

  open() {
    return super.open('notification_message_rendered');
  }
}

export default new NotificationMessagesPage();
