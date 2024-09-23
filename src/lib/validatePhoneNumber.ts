export default function validatePhoneNumber(phoneNumber: string) {
  let cleanedNumber = phoneNumber.replace(/\D/g, "");

  cleanedNumber = cleanedNumber.slice(-9);

  let formattedNumber = "";
  for (let i = 0; i < cleanedNumber.length; i++) {
    if (i === 2 || i === 5 || i === 7) {
      formattedNumber += " ";
    }
    formattedNumber += cleanedNumber[i];
  }

  return formattedNumber;
}
