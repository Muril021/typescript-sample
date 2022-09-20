"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aviao = /** @class */ (function () {
    function Aviao(nomeAviao, velocidade, capacidadePessoas) {
        this.capacidadePessoas = 0;
        this.nomeAviao = nomeAviao;
        this.velocidade = velocidade;
        this.capacidadePessoas = capacidadePessoas;
    }
    return Aviao;
}());
var nomeAviao = prompt('Digite o nome do avião: ');
var velocidade = prompt('Digite a velocidade máxima do avião: ');
var capacidadePessoas = Number(prompt('Digite a capacidade máxima de pessoas: '));
var aviao = new Aviao(nomeAviao, velocidade, capacidadePessoas);
console.log("Dados do Avi\u00E3o:\n\n");
console.log("Nome do avi\u00E3o: ".concat(nomeAviao));
console.log("Velocidade do avi\u00E3o: ".concat(velocidade));
console.log("Capacidade total do avi\u00E3o: ".concat(capacidadePessoas, " pessoas"));
