export default function randomNumber(min = 1, max) {
  return Math.floor(Math.random() * max) + min;
}
