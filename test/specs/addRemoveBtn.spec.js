import AddRemovePage from '../pages/addRemove.page';

describe('Verify that Add and Remove button work by design', () => {
    it('should add element by clicking the Add button', () => {
        AddRemovePage.open();

        AddRemovePage.addElementBtn.click();
        expect(AddRemovePage.deleteBtn).toBeDisplayed();
    });

    it('should delete element by clicking the Delete button', function () {
        AddRemovePage.deleteBtn.click();
        expect(AddRemovePage.deleteBtn).not.toBeDisplayed();
    });
});


