class Aviao{
    public nomeAviao: string;
    public velocidade: string;
    public capacidadePessoas: number;
}
const aviao = new Aviao();

const nomeAviao = aviao.nomeAviao = 'Piper PA-28';
const velocidade = aviao.velocidade = '800km/h';
const capacidade = aviao.capacidadePessoas = 4;

console.log(`Dados do Avião:\n\n`);
console.log(`Nome do avião: ${nomeAviao}`);
console.log(`Velocidade do avião: ${velocidade}`);
console.log(`Capacidade total do avião: ${capacidade} pessoas`);