// Login
const loginButton = document.getElementById('login-button')
let loginEmail = document.getElementById('login-email')
let loginPassword = document.getElementById('login-password')
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    let loginDetails = {
        email: loginEmail.value,
        password: loginPassword.value
    }
    fetch('https://fundme-backend.herokuapp.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'https://fundme-backend.herokuapp.com/',
            'Access-Control-Allow-Origin': 'https://fundme-backend.herokuapp.com/'
        },
        body: JSON.stringify(loginDetails)
    })
        .then((res) => res.json())
        .then((data) => {
            if (data['user']) {
                let userData = data['user']

                if (userData.role == 'sponsor') {
                    sessionStorage['user'] = JSON.stringify(userData)
                    location.assign('homepage.html')
                }
            }
        })
})