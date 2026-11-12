/* ex 1 */

function boasVindas(){
    console.log("Seja Bem-Vindo ao sistema escolar")
}
boasVindas();

console.log("-----------");

let curso= "Desenvolvimento de Sistemas";
let instituicao= "Escola de Tecnologia";

/* ex 2 */
function mostrarCurso(){
   console.log("Curso: "+ curso);
   console.log("Instituição: "+ instituicao);
}
mostrarCurso();

console.log("-----------");

/* ex 3 */


function saudarAluno(nome){
    console.log("Olá, "+nome+"! Seja bem-vindo");
    console.log("Olá, "+nome+"! Seja bem-vindo");
    console.log("Olá, "+nome+"! Seja bem-vindo");
}
saudarAluno("Carlos");
saudarAluno("Mariana");
saudarAluno("Pedro");

console.log("-----------");

/* ex 4 */



function mostrarAluno(nome, curso){
    console.log("Aluno: "+nome);
    console.log("Curso: "+curso);

}
mostrarAluno("Ana","Programação");
mostrarAluno("Asafe","Desenvolvimento de Sistemas");
mostrarAluno("Kayke","Ciência da Computação");

console.log("-----------");

/* ex 5 */

let nota1= 80;
let nota2= 60;

function calcularMedia(nota1,nota2){
    const media= (nota1+nota2)/2;
    console.log("Média do aluno: "+media)
    
}
calcularMedia(80,60);

console.log("-----------");
/* ex 6 */

function adPontos (nota,pontosExtras){
    const novaNota= (nota+pontosExtras);
    console.log("Nota atualizada: "+novaNota);
}
adPontos(80,10);
console.log("-----------");

/* ex 7 */

function verificarAprovação(media){
    if (media >= 60){
        console.log("Aluno aprovado!");
    }else{
        console.log("Aluno reprovado!");
    }
}

verificarAprovação(60);
console.log("-----------");


/* ex 8*/
function classificarAluno(nota){
    if(nota >= 90 ){
        console.log("Excelente");     
    }
    else if(nota >69 ){
        console.log("Bom");
    }
    else if (nota >=60){
        console.log("Regular");
    }
    else{
        console.log("Insuficiente");
    }    
}

classificarAluno(59);

console.log("-----------");

/* ex 9 */

function calcularMensalidade(valor){
    const desconto = valor*0.10;
    return valor - desconto;

}
let valorFinal=calcularMensalidade(500);
console.log(valorFinal);
console.log("-----------");

/* ex 10 */

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

function avaliarAluno(nome,nota1,nota2){
    const media= calcularMedia(nota1,nota2)
    if (media >=60){
        console.log("O Aluno "+ nome+" Foi aprovado");   
    }
    else{
        console.log("O Aluno "+ nome+" Foi reprovado");
    }
}
avaliarAluno("Lucas",10,10);
