import { Cliente } from "./cliente.js"
import { Conta } from "./conta.js";
import { ContaCorrente } from "./contaCorrente.js"
import { ContaPoupanca } from "./contaPoupanca.js";
import { ContaSalario } from "./contaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309)

const contaCorrente = new ContaCorrente(cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaCorrente.depositar(500)
contaCorrente.sacar(100)

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)

console.log(contaPoupanca)
console.log(contaCorrente)

contaPoupanca.sacar(10)
contaCorrente.sacar(10)
console.log(contaPoupanca)
console.log(contaCorrente)
console.log(contaSalario)