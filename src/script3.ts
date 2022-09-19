class produtoEletronico{
    public nomeProduto: string;
    public marca: string;
    public armazenamento: number;
    public memoria: number;
    public sistema: string;
}
const produto = new produtoEletronico();

const nomeProduto = produto.nomeProduto = 'Computador';
const marcaProduto = produto.marca = 'Tech Power';
const armazenamento = produto.armazenamento = 480;
const memoria = produto.memoria = 16;
const sistemaOp = produto.sistema = 'Windows 10';

console.log(`Detalhes do Produto:\n\n`);
console.log(`Nome do Produto: ${nomeProduto}`);
console.log(`Marca: ${marcaProduto}`);
console.log(`Armazenamento: SSD ${armazenamento}GB`);
console.log(`Memória: ${memoria}GB RAM`);
console.log(`Sistema Operacional: ${sistemaOp}`);