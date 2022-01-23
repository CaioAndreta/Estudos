console.log("trabalhando com condicionais")

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 15
const estaAcompanhada = true
const temPassagemComprada = true
console.log("Destinos possíveis:")
console.log(listaDestinos)

// if(idadeComprador>=18){
//     console.log("Comprador maior de idade")
//     listaDestinos.splice(1,1)
// }
// else if(estaAcompanhada) {
//         console.log("Comprador está acompanhado")
//         listaDestinos.splice(1,1)
// }
// else {
//     console.log("Não é maior de idade e não posso vender")
// }

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa viagem")
    listaDestinos.splice(1, 1)
}
else {
    console.log("Não é maior de idade e não posso vender")
}

console.log("Embarque: \n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem")
} else {
    console.log("Você não pode embarcar")
}