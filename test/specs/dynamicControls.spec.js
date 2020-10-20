import DynamicControlsPage from '../pages/dynamicControls.page';
import { data } from '../../data/data';

describe('Verify that elements changed asynchronously', function () {
  it('should check box be selected', function () {
    DynamicControlsPage.open();

    DynamicControlsPage.checkBox.click();
    expect(DynamicControlsPage.checkBox).toBeSelected();
  });

  it('should delete check box by clicking Remove button', function () {
    DynamicControlsPage.button.click();
    browser.waitUntil(() => DynamicControlsPage.notificationMsg.isDisplayed());
    expect(DynamicControlsPage.button).toHaveText(data.addButtonText);
  });

  it('should add check box by clicking Add button ', function () {
    DynamicControlsPage.button.click();
    browser.waitUntil(() => DynamicControlsPage.checkBoxBack.isDisplayed());
    expect(DynamicControlsPage.notificationMsg).toBeDisplayed();
  });

  describe('Verify that input field change state', function () {
    it('should check initial state of input field', function () {
      expect(DynamicControlsPage.inputField).not.toBeEnabled({ message: 'input field is disable' });
      expect(DynamicControlsPage.enableBtn).toBeClickable({ message: 'button is disable' });
    });

    it('should check if by clicking Enable button input field is enable ', function () {
      DynamicControlsPage.enableBtn.click();
      browser.waitUntil(() => DynamicControlsPage.inputField.isEnabled());
      expect(DynamicControlsPage.notificationMsg).toHaveText(data.enabledText);
    });
  });
});
