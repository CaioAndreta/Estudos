const imagens = document.querySelectorAll('img')
console.log(imagens)

const imagensComPalavraImagem = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagensComPalavraImagem)

const linksInternos = document.querySelectorAll('[href^="#"');
console.log(linksInternos);

const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2);

const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[--ultimoP.length])
console.log(ultimoP);