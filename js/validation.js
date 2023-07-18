export default function validation(message) {
  const regex = /^[a-z]+$/;

  return regex.test(message);
}
