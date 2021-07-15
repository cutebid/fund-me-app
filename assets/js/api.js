// Student sign up

const submitButton = document.getElementById('submit-student-form')


submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const fullname = document.getElementById('fullname').value
    const phoneno = document.getElementById('phoneno').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    let studentDetails = {
        fullname: fullname,
        phoneNumber: phoneno,
        email: email,
        password: password,
        confirmPassword: password,
        role: "student"
    }
    fetch('https://fundme-backend.herokuapp.com/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'https://fundme-backend.herokuapp.com/',
            'Access-Control-Allow-Origin': 'https://fundme-backend.herokuapp.com/'
        },

        redirect: 'follow',
        body: JSON.stringify(studentDetails)
    })
        .then(response => response.json())
        .then((data) => {
            if (data['newUser']) {
                location.assign('studentregistration2.html')
            }
            if (data['message']) {
                document.getElementById('err-msg').textContent = data['message']
            }
        })
        .catch(err => console.log(err))
})
