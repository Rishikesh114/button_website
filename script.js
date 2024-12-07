/*document.getElementById('myButton').addEventListener('click', function() {
  alert('Button was clicked!');
});*/
document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById('myButton');
  button.addEventListener('click', () => {
    alert('Button was clicked!');
    window.location.href = 'https://www.geeksforgeeks.org';
  });
});
