export default function calculateAge(birthDate) {
  // console.log(birthDate);
  let birthDateObj = new Date(birthDate);
  let currentDate = new Date();

  let age = currentDate.getFullYear() - birthDateObj.getFullYear();

  if (
    currentDate.getMonth() < birthDateObj.getMonth() ||
    (currentDate.getMonth() === birthDateObj.getMonth() &&
      currentDate.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }

  return age;
}
