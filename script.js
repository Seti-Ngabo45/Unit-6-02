document.getElementById('submit').addEventListener('click', integer)
function integer () {
  const n = document.getElementById('answer').value
  if (n < 0) {
    alert('The number is negative')
  } else if (n > 0) {
    alert('The number is positive')
  }
}
