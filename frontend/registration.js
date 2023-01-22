document.getElementById('register-form').addEventListener('submit', register);

function register(e) {
    e.preventDefault();
    const fullName = document.getElementById('full_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // create a new user object
    const newUser = { fullName, email, password };

    // send a post request to your server to register the user
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(response => {
        // handle the response from the server
        if(response.status === 201){
            // If registration was successful, redirect the user to the groups page
            response.json().then(({token}) => window.localStorage.setItem('token', token))
            window.location.href = '/groups';
            console.log("registration successful")
        }
    })
    .catch(error => {
        if(error.response.status === 409){
            alert("Email already in use, please use a different one.");
        }
        else{
            console.log(error);
        }
    });
}
