export default function obterID() {

  return Math.round((new Date()).getTime() / 1000)
}