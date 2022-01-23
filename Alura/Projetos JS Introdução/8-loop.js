console.log("trabalhando com condicionais")

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 15
const estaAcompanhada = true
let temPassagemComprada = false
const destino = `Salvador`

console.log("\nDestinos possíveis:")
console.log(listaDestinos)

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true


let contador = 0
let destinoExiste = false
while (contador<3){
    if(listaDestinos[contador] == destino){
        console.log("Destino existe")
        destinoExiste = true
        break
    }
    contador += 1
}

console.log("destino existe:", destinoExiste)

if(podeComprar && destinoExiste){
    console.log('Boa viagem')
} else {
    console.log('Desculpe, tivemos um erro!')
}

for(let cont = 0; cont < 3; cont++){
    if(listaDestinos[contador] == destino){
        console.log("Destino existe")
        destinoExiste = true
        break
    }
    contador += 1
}