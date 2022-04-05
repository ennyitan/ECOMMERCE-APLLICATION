let loginModal = document.querySelector('.login-modal')
let signUpBtn = document.getElementById('sign-up')

signUpBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const marchantName = document.getElementById('name');
    const marchantEmail = document.getElementById('email');
    const marchantNunber = document.getElementById('number');
    const marchantPassword = document.getElementById('password');
    const marchantConfirmPassword = document.getElementById('password-cinfirm');
    const marchantCompany = document.getElementById('company');
    const marchantrcc = document.getElementById('rcc');
    if (marchantName.value === '' || marchantEmail.value === '' || marchantNunber.value == '' || marchantPassword.value === '' || marchantConfirmPassword === '' || marchantrcc.value === '') {
        alert("kindly fill form completely!!")
    } else {
        callModal(e)
    }
})





let closeBtn = document.querySelector('.close')
let closeBtnReg = document.querySelector('#closeReg')

let registerModal = document.querySelector('#register')


// purchase section
// signUpBtn.addEventListener('click', callModal)

function callModal(e) {
    e.preventDefault()
    loginModal.style.top = "398px";
}

closeBtnReg.addEventListener('click', function() {
    registerModal.style.top = "-1000px";
    // registerModal.style.transition = '2s'
})