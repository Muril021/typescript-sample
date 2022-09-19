var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    return Cliente;
}());
var cliente = new Cliente();
var nome = cliente.nome = 'Murilo Nascimento';
var cpf = cliente.cpf = '123.456.789-00';
var nascimento = cliente.nascimento = '20/04/1999';
console.log('Dados do Cliente:\n\n');
console.log("Nome: ".concat(nome));
console.log("CPF: ".concat(cpf));
console.log("Data de Nascimento: ".concat(nascimento));
var Aviao = /** @class */ (function () {
    function Aviao() {
    }
    return Aviao;
}());
var aviao = new Aviao();
var nomeAviao = aviao.nomeAviao = 'Piper PA-28';
var velocidade = aviao.velocidade = '800km/h';
var capacidade = aviao.capacidadePessoas = 4;
console.log("Dados do Avi\u00E3o:\n\n");
console.log("Nome do avi\u00E3o: ".concat(nomeAviao));
console.log("Velocidade do avi\u00E3o: ".concat(velocidade));
console.log("Capacidade total do avi\u00E3o: ".concat(capacidade, " pessoas"));
var produtoEletronico = /** @class */ (function () {
    function produtoEletronico() {
    }
    return produtoEletronico;
}());
var produto = new produtoEletronico();
var nomeProduto = produto.nomeProduto = 'Computador';
var marcaProduto = produto.marca = 'Tech Power';
var armazenamento = produto.armazenamento = 480;
var memoria = produto.memoria = 16;
var sistemaOp = produto.sistema = 'Windows 10';
console.log("Detalhes do Produto:\n\n");
console.log("Nome do Produto: ".concat(nomeProduto));
console.log("Marca: ".concat(marcaProduto));
console.log("Armazenamento: SSD ".concat(armazenamento, "GB"));
console.log("Mem\u00F3ria: ".concat(memoria, "GB RAM"));
console.log("Sistema Operacional: ".concat(sistemaOp));

var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    return Funcionario;
}());
var funcionario = new Funcionario();
var nomeFunc = funcionario.nome = 'Carlos Almeida';
var cpfFunc = funcionario.cpf = '123.456.789-00';
var email = funcionario.email = 'carlos.almeida01@gmail.com';
var tel = funcionario.tel = 21964251678;
console.log("Dados do Funcion\u00E1rio:\n\n");
console.log("Nome: ".concat(nomeFunc));
console.log("CPF: ".concat(cpfFunc));
console.log("E-mail: ".concat(email));
console.log("Telefone para Contato/WhatsApp: ".concat(tel));
