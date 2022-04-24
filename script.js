let id = '#article1';
document.querySelectorAll('.navbar .nav-ul > li').forEach(function(value, index){
    value.addEventListener('click',function(e){
        if(id != e.target.getAttribute('href')){
            document.querySelector(`.nav-ul li a[href='${id}']`).parentNode.classList.toggle('bor-bot')
            id = e.target.getAttribute('href');
            document.querySelector(`.nav-ul li a[href='${id}']`).parentNode.classList.toggle('bor-bot')
            console.log(document.querySelector(`.nav-ul li a[href='${id}']`))
        } else {
            id = e.target.getAttribute('href')
        }
    })
})
document.querySelector(`.nav-ul li a[href='${id}']`).parentNode.classList.toggle('bor-bot')
document.querySelector(`${id.substring(1,id.length)}`).style.display = 'block'