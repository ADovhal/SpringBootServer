// Get the form element
const form = document.querySelector('#registration-form');

// Listen for submit event
form.addEventListener('submit', (event) => {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // Collect the form data
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;

  // Create a JSON object with the data
  const data = {
    name: name,
    email: email
  };

  // Send a POST request with the data
  fetch('/users/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Handle the response here
  })
  .catch(error => {
    console.error(error);
    // Handle the error here
  });
});


function showAll() {
    window.location.href = "users/all/show";
}