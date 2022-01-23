console.log("trabalhando com listas")

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

listaDestinos.push(`Curitiba`)
listaDestinos.splice(1,1) //Remover 2 movimentos a partir da posição 1

console.log(listaDestinos[1], listaDestinos[0])
console.log(listaDestinos)
