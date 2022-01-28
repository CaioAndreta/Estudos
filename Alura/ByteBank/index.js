import { Cliente } from "./cliente.js"
import { Gerente } from "./funcionario/gerente.js"; 
import { Diretor } from "./funcionario/diretor.js"; 
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900)
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Ricardo", 5000, 12345678901)
gerente.cadastrarSenha("123")
const cliente = new Cliente("Laís", 98765432100, "456")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123")
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456")

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)