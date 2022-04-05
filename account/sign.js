let regular =  document.getElementById('regular')
let admin =  document.getElementById('admin')
let sign = document.querySelector('.sign')
// let name = document.getElementById('name')
let test = document.getElementsByName("Regular")
sign.addEventListener("click", e =>{
    e.preventDefault()
    for (radio of test){
        if(radio.checked){
            console.log(radio.value)
            if(radio.value === 'admin'){
                window.open(`../dashboard/index.html`, '_self')
            } else if(radio.value === 'regular'){
                window.open(`../index.html`, '_self')
            }else{
                window.open(`../marchant-Dashboard/marchantindex.html`, '_self')
            }
        }
    }
})