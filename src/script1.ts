class Cliente{
    public nome: string;
    public cpf: string;
    public nascimento: string;
}
const cliente = new Cliente();

const nomeCliente = cliente.nome = 'Murilo Nascimento';
const cpf = cliente.cpf = '123.456.789-00';
const nascimento = cliente.nascimento = '20/04/1999';

console.log('Dados do Cliente:\n\n');
console.log(`Nome: ${nomeCliente}`);
console.log(`CPF: ${cpf}`);
console.log(`Data de Nascimento: ${nascimento}`);