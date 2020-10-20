import PhoneInputPage from '../pages/phoneInput.page';
import { phoneInput } from '../../data/phoneInput';

describe('country="US"', function () {
  it('should check if phone number can be input only in national format', function () {
    PhoneInputPage.open();

    PhoneInputPage.phoneInput[1].setValue(phoneInput.phoneNumber);
    expect(PhoneInputPage.phoneInput[1].getAttribute('value')).toEqual(
      phoneInput.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'),
    );
    expect(PhoneInputPage.value.getText()).toEqual(phoneInput.codePart + phoneInput.phoneNumber);
  });

  describe('country="US" / international', function () {
    it('should check if phone number can be input only in international format', function () {
      PhoneInputPage.phoneInput[2].setValue(phoneInput.phoneNumber);
      expect(PhoneInputPage.phoneInput[2].getAttribute('value')).toEqual(
        phoneInput.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3'),
      );
      expect(PhoneInputPage.value.getText()).toEqual(phoneInput.codePart + phoneInput.phoneNumber);
    });

    describe('country="US" / international / withCountryCallingCode', function () {
      it('should check if country calling code part (+1) in the input field', function () {
        expect(PhoneInputPage.phoneInput[3].getAttribute('value')).toEqual(phoneInput.codePart);
      });

      it('should check the input field with code part and phone number', function () {
        PhoneInputPage.phoneInput[3].setValue(phoneInput.phoneNumberAndCode);
        expect(PhoneInputPage.phoneInput[3].getAttribute('value')).toEqual(
          phoneInput.phoneNumberAndCode.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+$1 $2 $3 $4'),
        );
        expect(PhoneInputPage.value.getText()).toEqual('+' + phoneInput.phoneNumberAndCode);
      });

      describe('defaultCountry="US"', function () {
        it('should check the input field in national format for default Country', function () {
          PhoneInputPage.phoneInput[4].setValue(phoneInput.phoneNumberAndCode);
          expect(PhoneInputPage.phoneInput[4].getAttribute('value')).toEqual(
            phoneInput.phoneNumberAndCode.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '$1 ($2) $3-$4'),
          );
          expect(PhoneInputPage.value.getText()).toEqual(
            phoneInput.codePart + phoneInput.phoneNumber,
          );
        });

        it('should check the input field in international format for any country', function () {
          PhoneInputPage.phoneInput[4].setValue(phoneInput.phoneNumber);
          expect(PhoneInputPage.phoneInput[4].getAttribute('value')).toEqual(
            phoneInput.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'),
          );
        });

        describe('No country', function () {
          it('should check the input phone field can only be input in international format', function () {
            PhoneInputPage.phoneInput[5].setValue(phoneInput.phoneNumber);
            expect(PhoneInputPage.phoneInput[5].getAttribute('value')).toEqual(
              phoneInput.phoneNumber.replace(/(\d{3})(\d{3})(\d{1})(\d{3})/, '+$1 $2 $3 $4'),
            );
            expect(PhoneInputPage.value.getText()).toEqual('+' + phoneInput.phoneNumberAndCode);
          });
        });
      });
    });
  });
});
