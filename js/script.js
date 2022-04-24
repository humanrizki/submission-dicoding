let id = '#article1';
// console.log(document.getElementsByTagName('.navbar .nav-ul li'))[0]
document.querySelectorAll('.navbar .nav-ul a').forEach(function(value, index){
    value.addEventListener('click',function(e){
        console.log(e.target.getAttribute('href'))
        if(id !== e.target.getAttribute('href')){
            document.querySelector(`.nav-ul a[href='${id}']`).classList.toggle('bor-bot')
            document.querySelector(id).classList.toggle('active-tab')
            id = e.target.getAttribute('href');
            document.querySelector(`.nav-ul a[href='${id}']`).classList.toggle('bor-bot')
            document.querySelector(id).classList.toggle('active-tab')
        } else {
            id = e.target.getAttribute('href')
        }
    })
})
document.querySelector(`.nav-ul a[href='${id}']`).classList.toggle('bor-bot')
document.querySelector(id).classList.toggle('active-tab')
const screen = {
    small: 0,
    medium: 990,
    large: 991
};
// window akan mendapatkan event walau hanya 1 pixel perubahan
window.addEventListener('resize', resizeHandler);
// pemanggilan
resizeHandler();
// menjumlahkan perhitungn
function resizeHandler() {
    // mendapatkan jumlah lebar window
    const iw = window.innerWidth;
    // menentukan nama dari ukuran
    let size = null;
    for (let s in screen) {
        if (iw >= screen[s]) size = s;
    }
    if(size === 'large'){
        let currentURL = window.location.href
        let newURL = currentURL.split('#')[0] + '#article1'
        document.querySelector(`.nav-ul a[href='${id}']`).classList.toggle('bor-bot')
        document.querySelector(id).classList.toggle('active-tab')
        id = '#article1'
        document.querySelector(id).classList.toggle('active-tab')
        document.querySelector(`.nav-ul a[href='${id}']`).classList.toggle('bor-bot')
        window.location.href = newURL
    }
    console.log(size);
}