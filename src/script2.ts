class Aviao{
    public nomeAviao: string;
    public velocidade: string;
    public capacidadePessoas=0;

    constructor(nomeAviao: string, velocidade: string, capacidadePessoas: number){
        this.nomeAviao = nomeAviao;
        this.velocidade = velocidade;
        this.capacidadePessoas = capacidadePessoas;
    }
}
const nomeAviao = prompt('Digite o nome do avião: ');
const velocidade = prompt('Digite a velocidade máxima do avião: ');
const capacidadePessoas = Number(prompt('Digite a capacidade máxima de pessoas: '));

const aviao = new Aviao(nomeAviao, velocidade, capacidadePessoas);


console.log(`Dados do Avião:\n\n`);
console.log(`Nome do avião: ${nomeAviao}`);
console.log(`Velocidade do avião: ${velocidade}`);
console.log(`Capacidade total do avião: ${capacidadePessoas} pessoas`);