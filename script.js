let id = '#article1';
// console.log(document.getElementsByTagName('.navbar .nav-ul li'))[0]
document.querySelectorAll('.navbar .nav-ul a').forEach(function(value, index){
    value.addEventListener('click',function(e){
        console.log(e.target.getAttribute('href'))
        if(id != e.target.getAttribute('href')){
            document.querySelector(`.nav-ul a[href='${id}']`).classList.toggle('bor-bot')
            id = e.target.getAttribute('href');
            document.querySelector(`.nav-ul a[href='${id}']`).classList.toggle('bor-bot')
            console.log(document.querySelector(`.nav-ul a[href='${id}']`))
        } else {
            id = e.target.getAttribute('href')
        }
    })
})
console.log(document.querySelector(`.nav-ul a[href='#${id}']`))
// document.querySelector('tab-content:first-child').style.display = 'block'
console.log(id.substring(1, id.length))