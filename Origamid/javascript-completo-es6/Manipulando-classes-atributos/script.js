const itensMenu = document.querySelectorAll('.menu a')
itensMenu.forEach((item) => {
    item.classList.add('ativo')
    console.log(item.getAttribute('class'))
})

itensMenu.forEach((item, index) => {
    if(index > 0){
        item.classList.remove('ativo');
    }
    console.log(itensMenu[index])
})

itensMenu[0].classList.remove('ativo');
console.log(itensMenu[0])

const imgs = document.querySelectorAll('img')
imgs.forEach((item) => {
    console.log(item.hasAttribute('alt'))
})
