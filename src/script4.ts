import PromptSync=require('prompt-sync');

class Funcionario{
    public nomeFunc: string;
    public cpf: string;
    public email: string;
    public tel: number;

    constructor(nomeFunc: string, cpf: string, email: string, tel: number){
        this.nomeFunc = nomeFunc;
        this.cpf = cpf;
        this.email = email;
        this.tel = tel;
    }
}
const nomeFunc = prompt('Digite seu nome: ');
const cpf = prompt('Digite seu CPF: ');
const email = prompt('Digite seu e-mail: ');
const tel = Number(prompt('Digite seu telefone: '));

const funcionario = new Funcionario(nomeFunc, cpf, email, tel);

console.log(`Dados do Funcionário:\n\n`);
console.log(`Nome: ${nomeFunc}`);
console.log(`CPF: ${cpf}`);
console.log(`E-mail: ${email}`);
console.log(`Telefone para Contato/WhatsApp: ${tel}`);