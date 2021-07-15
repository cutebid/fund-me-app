const input = document.querySelectorAll('.input-border input');
const otpInput = document.getElementById('otp')
let otpvalue = ""
input[0].focus()
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('keyup', (e) => {
        if (e.keyCode == 8 && input[i].value == "" && i > 0) {
            otpvalue = otpvalue.substr(0, i)
            input[i - 1].focus()
        }
        if (e.keyCode == 8) {
            otpvalue = otpvalue.substr(0, i)
        }
        if (input[i].value.match(/\d/)) {
            if (i > 0 && input[i - 1].value == "") {
                input[i - 1].focus()
            }
            if (otpvalue.length > (i + 1)) {
                otpvalue = otpvalue.substr(0, i) + input[i].value
            } else {
                otpvalue += input[i].value
                if (i < input.length - 1) {
                    input[i + 1].focus()
                }
            }
        } else {
            input[i].value = '';
        }
        otpInput.value = otpvalue
    })
    input[i].addEventListener('focus', () => {
        if (i > 0 && input[i - 1].value == "") {
            input[i - 1].focus()
        }
    })

}
const otpSubmit = document.getElementById('otpsubmit')
otpSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    setTimeout(() => {
        document.getElementById('success').style.display = 'flex'
    }, 2000)
})