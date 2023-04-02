const form = document.querySelector('signupbox'); //This makes it so "form" refers to the input form on the page.

form.addEventListener('submit', (event) => { //This event fires if you ever hit the "Submit" button
  event.preventDefault(); // This lil' ol' code prevents the form from submitting by default, i.e., with no data.
  const name = document.getElementById('name').value; //This gets the name for the confirmation alert.
  const email = document.getElementById('email').value; //This gets the email
  const position = document.querySelector('input[name="position"]:checked').value; //This gets which position you checked off on the radio button
  alert('Thank you for submitting! This is the information we currently have: Your name is' + name + ', your email is ' + email + ', and you are interested in the position of ' + position + '.');
}); //^ That is the alert itself.
