import PromptSync=require('prompt-sync');

class produtoEletronico{
    public nomeProduto: string;
    public marca: string;
    public armazenamento: number;
    public memoria: number;
    public sistema: string;

    constructor(nomeProduto: string, marca: string, armazenamento: number, memoria: number, sistema: string){
        this.nomeProduto = nomeProduto;
        this.marca = marca;
        this.armazenamento = armazenamento;
        this.memoria = memoria;
        this.sistema = sistema;
    }
}
const nomeProduto = prompt('Digite o nome do produto: ');
const marca = prompt('Digite a marca do produto: ');
const armazenamento = Number(prompt('Digite a capacidade de armazenamento do produto: '));
const memoria = Number(prompt('Digite a memória RAM do produto: '));
const sistema = prompt('Digite o sistema operacional do produto: ');

const produto = new produtoEletronico(nomeProduto, marca, armazenamento, memoria, sistema);

console.log(`Detalhes do Produto:\n\n`);
console.log(`Nome do Produto: ${nomeProduto}`);
console.log(`Marca: ${marca}`);
console.log(`Armazenamento: SSD ${armazenamento}GB`);
console.log(`Memória: ${memoria}GB RAM`);
console.log(`Sistema Operacional: ${sistema}`);