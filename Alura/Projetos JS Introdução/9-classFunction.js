// const Livro = function(nome, editora, paginas) {
//     gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas

//     this.getNome = function(){
//         return gNome
//     }
//     this.getEditora = function(){
//         return gEditora
//     }
//     this.getPaginas = function(){
//         return gPaginas
//     }
// }

// const graphQL = new Livro("GraphQL", "Casa do Código", 143)
// console.log(graphQL.getNome())
// console.log(graphQL.getEditora())
// console.log(graphQL.getPaginas())

/////////////////

class Livro {
    constructor(titulo, editora, paginas){
        this.titulo = titulo,
        this.editora = editora,
        this.paginas = paginas
    }
    anunciarTitulo(){
        console.log(`Titulo: ${this.titulo}`)
    }
    descreverTitulo(){
        console.log(`${this.titulo} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`)
    }
}

const nodeJS = new Livro('Primeiros passos com NodeJS', 'Casa do Código', 195)
nodeJS.anunciarTitulo()
nodeJS.descreverTitulo()

console.log(typeof Livro) //classes são funções no JS

class LivroColecao extends Livro {
    constructor(titulo, nomeColecao){
        super(titulo)
        this.nomeColecao = nomeColecao
    }

    descreverColecao(){
        console.log(`O livro ${this.titulo} faz parte da coleção ${this.nomeColecao}`)
    }
}

const logicaDeProgramacao = new LivroColecao("Lógica de Programação", "Comece a programar")
logicaDeProgramacao.descreverColecao()