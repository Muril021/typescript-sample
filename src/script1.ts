import PromptSync=require('prompt-sync');

class Cliente{
    public nomeCliente: string;
    public cpfCliente: string;
    public nascimentoCliente: string;

    constructor(nomeCliente: string, cpfCliente: string, nascimentoCliente: string){
        this.nomeCliente = nomeCliente;
        this.cpfCliente = cpfCliente;
        this.nascimentoCliente = nascimentoCliente;
    }
}
const nomeCliente = prompt('Digite seu nome: ');
const cpfCliente = prompt('Digite seu cpf: ');
const nascimentoCliente = prompt('Digite sua data de nascimento: ');

const cliente = new Cliente(nomeCliente, cpfCliente, nascimentoCliente);

console.log('Dados do Cliente:\n\n');
console.log(`Nome: ${nomeCliente}`);
console.log(`CPF: ${cpfCliente}`);
console.log(`Data de Nascimento: ${nascimentoCliente}`);