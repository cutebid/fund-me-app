// the inputs validation
function nameValidation() {
   let nameinput = document.getElementById('Name');
   let namepara = document.getElementById('namePara');
   if (nameinput.value == "") {
      namepara.innerHTML = 'Please enter your name'
      nameinput.style.border = '2px solid red';
   }
   else {
      nameinput.style.border = '3px solid green';
      namepara.innerHTML = ''
   }

};

function emailValidation() {
   let emailinput = document.getElementById('Email');
   let emailpara = document.getElementById('emailPara');
   console.log(emailpara)
   if (emailinput.value == "") {
      emailpara.innerHTML = 'Please enter an email'
      emailinput.style.border = '2px solid red';
   }
   else if (!emailinput.value.includes('@')) {
      emailinput.style.border = '2px solid red';
      emailpara.innerHTML = ' Invalid email'
   }
   else {
      emailinput.style.border = '2px solid green';
      emailpara.innerHTML = ''
   }

};

function numberValidation() {
   let numberinput = document.getElementById('Number');
   let numberpara = document.getElementById('numberPara');
   let maxlength = '11'
   if (numberinput.value == '') {
      numberpara.innerHTML = 'Please enter your telephone number';
      numberinput.style.border = '3px solid red'
   }
   else if (numberinput.value.length < maxlength) {
      numberpara.innerHTML = 'Phone number cannot be less than 11 characters';
      numberinput.style.border = '3px solid red'
   }
   //  else if(isNaN(numberinput.value)){
   //     numberpara.innerHTML ='Phone number is not a number';
   //     numberinput.style.border = '2px solid red'
   //  }

   else {
      numberinput.style.border = '3px solid green';
      numberpara.innerHTML = ''

   }


}

document.getElementById('Name').onblur = nameValidation;
document.getElementById('Email').onblur = emailValidation;
document.getElementById('Number').onblur = numberValidation;


const signupButton = document.getElementById('signup');
const successMsg = document.getElementById('success-message')
const modalBox = document.getElementById('success')

signupButton.addEventListener('click', (e) => {
   e.preventDefault()

   const fullname = document.getElementById('Name').value;
   const email = document.getElementById('Email').value;
   const number = document.getElementById('Number').value;
   const password = document.getElementById('password').value;

   let sponsorDetails = {
      "fullname": fullname,
      "phoneNumber": number,
      "email": email,
      "password": password,
      "confirmPassword": password
   }
   fetch('https://fundme-backend.herokuapp.com/auth/signup', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'Origin': 'https://fundme-backend.herokuapp.com/',
         'Access-Control-Allow-Origin': 'https://fundme-backend.herokuapp.com/'
      },
      redirect: 'follow',
      body: JSON.stringify(sponsorDetails)
   })
      .then(response => response.json())
      .then(
         (data) => {
            if (data['message']) {
               if (data['message'] == 'Activation link sent to email ID. Please activate to log in.') {
                  modalBox.style.display = 'flex'
               }
               successMsg.textContent = data['message']
            }
         }
      )
      .catch(err => console.log(err))
})