export default function validation(message) {
  const regex = /^[a-z\s]*$/;

  return regex.test(message);
}
