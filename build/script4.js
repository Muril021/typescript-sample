"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Funcionario = /** @class */ (function () {
    function Funcionario(nomeFunc, cpf, email, tel) {
        this.nomeFunc = nomeFunc;
        this.cpf = cpf;
        this.email = email;
        this.tel = tel;
    }
    return Funcionario;
}());
var nomeFunc = prompt('Digite seu nome: ');
var cpf = prompt('Digite seu CPF: ');
var email = prompt('Digite seu e-mail: ');
var tel = Number(prompt('Digite seu telefone: '));
var funcionario = new Funcionario(nomeFunc, cpf, email, tel);
console.log("Dados do Funcion\u00E1rio:\n\n");
console.log("Nome: ".concat(nomeFunc));
console.log("CPF: ".concat(cpf));
console.log("E-mail: ".concat(email));
console.log("Telefone para Contato/WhatsApp: ".concat(tel));
