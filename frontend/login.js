const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // send a request to the server to check if the email and password match
    fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            // redirect the user to the dashboard
            window.location.href = '/groups';
        }
    })
    .catch(error => {
        console.error(error);
        alert('An error occurred, please try again later.');
    });
});
