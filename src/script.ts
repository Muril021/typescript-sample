import PromptSync=require('prompt-sync');

const idade:number=27;
const nome:string='Murilo';
const maiorDeIdade: boolean=true;

function soma(num1:number, num2:number):number{
   return num1+num2;
   /* OUTRA FORMA DE USAR O RETURN:
    * const soma:number=num1+num2;
    * return soma;
    */ 
}
console.log(`A soma de 7+5 é ${soma(7,5)}`);