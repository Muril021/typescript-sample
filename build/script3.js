"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var produtoEletronico = /** @class */ (function () {
    function produtoEletronico(nomeProduto, marca, armazenamento, memoria, sistema) {
        this.nomeProduto = nomeProduto;
        this.marca = marca;
        this.armazenamento = armazenamento;
        this.memoria = memoria;
        this.sistema = sistema;
    }
    return produtoEletronico;
}());
var nomeProduto = prompt('Digite o nome do produto: ');
var marca = prompt('Digite a marca do produto: ');
var armazenamento = Number(prompt('Digite a capacidade de armazenamento do produto: '));
var memoria = Number(prompt('Digite a memória RAM do produto: '));
var sistema = prompt('Digite o sistema operacional do produto: ');
var produto = new produtoEletronico(nomeProduto, marca, armazenamento, memoria, sistema);
console.log("Detalhes do Produto:\n\n");
console.log("Nome do Produto: ".concat(nomeProduto));
console.log("Marca: ".concat(marca));
console.log("Armazenamento: SSD ".concat(armazenamento, "GB"));
console.log("Mem\u00F3ria: ".concat(memoria, "GB RAM"));
console.log("Sistema Operacional: ".concat(sistema));
