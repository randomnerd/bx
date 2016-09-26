import Formsy from 'formsy-react'

Formsy.addValidationRule('passwordConfirmationMatch', (values, value) => {
  return values.password === values.password_confirm;
});

Formsy.addValidationRule('passwordSecure', (values, value) => {
  if (values.password && values.password.length < 6) return false;
  let digit = new RegExp("\\d+");
  let letter = new RegExp("[a-zA-Z]+");
  let hasDigit = digit.exec(values.password);
  let hasLetter = letter.exec(values.password);
  return hasDigit && hasLetter;
});

Formsy.addValidationRule('withdrawalFee', (values, value, params) => {
  let amount = parseFloat(values.amount);
  let fee = parseFloat(params[0]);
  let balance = parseFloat(params[1]);

  if (!amount) return false;
  if (!fee) return true;
  if (amount <= fee) return false;
  if (amount > balance) return false;

  return true;
});

Formsy.addValidationRule('minTotal', (values, value) => {
  return (parseFloat(values.amount * values.price)).toFixed(8) > 0;
});
