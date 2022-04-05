let form = document.getElementById('form')
let password = document.getElementById('password')
let email = document.getElementById('email')
let inputs = document.getElementsByTagName('input')
let show = document.getElementById('show')


show.addEventListener('click', () =>{
    if(password.type === 'password'){
        password.type = 'text';
        show.innerHTML ='Hide'
    } else {
        password.type = 'password'
        show.innerHTML ='Show'
    }
    
})

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    if(email.value === ""){
       document.getElementById('email-notify').innerHTML = 'Please enter a valid email or phone number.'
        email.classList.add('inp-b-btm')
    if(password.value === ""){
        document.getElementById('password-notify').innerHTML ='Your password must contain between 4 and 60 characters.'
        password.classList.add('inp-b-btm')
    }
    }else{
        alert('Login Successfull!')
    }
   
})
password.addEventListener('input',() =>{
    if(password.value.length >=4){
        document.getElementById('password-notify').innerHTML = ''
    }
})

// redirecting pages

// radio.forEach((item) => {
//       item.addEventListener("click", e);
//     if(item === regular){
//         console.log('whatever')
//     }
     
    // });