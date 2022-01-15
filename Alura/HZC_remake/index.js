const botaoMenu = document.querySelector('.icone--menu')
const menu = document.querySelector('.menu')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu--ativo')
})