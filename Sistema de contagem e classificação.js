var alunos = parseInt(window.prompt("Digite o número de alunos"));

for (var i = 0; i <= alunos; i++){
if (i % 2 === 0 && i != 0){
    console.log("PAR - número "+ i);
    } else if (i % 2 === 1){
    console.log("IMPAR - número "+ i);
    }else{
    console.log("Zero - número "+ i);
}}