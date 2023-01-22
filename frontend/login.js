document.getElementById('login-form').addEventListener('submit', login);

function login(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginUser = {email, password}
    // send a request to the server to check if the email and password match
    fetch('/loginUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginUser),
    })
    .then(response => {
        // handle the response from the server
        if(response.status === 201){
            response.json().then(({token}) => window.localStorage.setItem('token', token))
            window.location.href = '/groups';
            console.log("login successful")
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
};
