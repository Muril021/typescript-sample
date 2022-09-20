"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nomeCliente, cpfCliente, nascimentoCliente) {
        this.nomeCliente = nomeCliente;
        this.cpfCliente = cpfCliente;
        this.nascimentoCliente = nascimentoCliente;
    }
    return Cliente;
}());
var nomeCliente = prompt('Digite seu nome: ');
var cpfCliente = prompt('Digite seu cpf: ');
var nascimentoCliente = prompt('Digite sua data de nascimento: ');
var cliente = new Cliente(nomeCliente, cpfCliente, nascimentoCliente);
console.log('Dados do Cliente:\n\n');
console.log("Nome: ".concat(nomeCliente));
console.log("CPF: ".concat(cpfCliente));
console.log("Data de Nascimento: ".concat(nascimentoCliente));
