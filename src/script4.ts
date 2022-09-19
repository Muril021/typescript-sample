class Funcionario{
    public nome: string;
    public cpf: string;
    public email: string;
    public tel: number;
}
const funcionario = new Funcionario();

const nomeFunc = funcionario.nome = 'Carlos Almeida';
const cpfFunc = funcionario.cpf = '123.456.789-00';
const email = funcionario.email = 'carlos.almeida01@gmail.com';
const tel = funcionario.tel = 21964251678;

console.log(`Dados do Funcionário:\n\n`);
console.log(`Nome: ${nomeFunc}`);
console.log(`CPF: ${cpfFunc}`);
console.log(`E-mail: ${email}`);
console.log(`Telefone para Contato/WhatsApp: ${tel}`);