var nome, numeropar, acharevento, acharpart, newdate, diaevento, seleçaonome, anoevento, mesevento, idade, anonasc, mesnasc, seleçao, nomeevento, localevento, localeventoanuncio, falha = 0;
var listaevento = ["Senai", "Etec"];
var participantesevento = [100, 45];

var dateObj = new Date();
var mesatual = dateObj.getUTCMonth() + 1;
var diaatual = dateObj.getUTCDate();
var anoatual = dateObj.getUTCFullYear();


// Introdução

nome = window.prompt("Qual o seu nome?")
anonasc = window.prompt("Qual seu ano de nascimento, "+nome+"?")
idade = anoatual - anonasc;

if (idade > 18){
seleçao = window.prompt("Pressione 'C' para cadastrar um novo evento e 'I' para se inscrever em um existente");
} else{
mesnasc = window.prompt("Qual seu mês de nascimento, "+nome+"?")
if (mesnasc > mesatual){
seleçao = window.prompt("Pressione 'C' para cadastrar um novo evento e 'I' para se inscrever em um existente");
}else{
  alert("Erro: É necessário ter 18 anos");
}
}

//Sistema de seleção

seleçao = seleçao.toUpperCase();
if(seleçao === 'C'){
nomeevento = window.prompt("Digite o nome do seu evento: ");
anoevento = window.prompt("Digite o ano do seu evento: ");
if (anoevento == anoatual){
  mesevento = window.prompt("Digite o mês do seu evento: ");
 if (mesevento == mesatual){
  diaevento = window.prompt("Digite o dia do seu evento: ");
  if (diaevento > diaatual){
    alert("Cadastro da data concluído");
  }else{
    alert("Inválido");
    falha = 1;
  }}
 else{
    if (mesevento > mesatual){
      diaevento = window.prompt("Digite o dia do seu evento: ");
    }else{
      alert("Inválido");
      falha = 1;
    }}

}else{
if (anoevento > anoatual){
mesevento = window.prompt("Digite o mês do seu evento: ");
diaevento = window.prompt("Digite o dia do seu evento: ");
alert("Cadastro da data concluido");
}
else{
  alert("Inválido")
  falha = 1;
}}

 if(falha === 0){
   
   //Escolha do local do evento

 localevento = window.prompt("O evento será presencial (P) ou digital (D) ?")
 localevento = localevento.toUpperCase();
 if (localevento === 'D'){
 alert("Seu evento será digital")
 localeventoanuncio = "digital";
 } else{
 if(localevento === 'P'){
 alert("Seu evento será presencial")
 localeventoanuncio = "presencial";
 }else{
 alert("Erro: Dado inválido")
 }}

 alert("Seu evento de nome " + nomeevento + " será realizado na data "+ diaevento + "/" + mesevento + "/" + anoevento + " por meio " + localeventoanuncio);
 var adicionar = listaevento.unshift(nomeevento);
 }            // Inscrição de uma pessoa no evento
}else{
if(seleçao === 'I'){
 seleçaonome = window.prompt("Qual evento você quer participar? Eventos: " + listaevento)
 acharevento = listaevento.find(element => element == seleçaonome);
 if (acharevento == seleçaonome){
   numeropar = listaevento.indexOf(acharevento);
   if (participantesevento[numeropar] < 100){
     alert("Você se inscreveu para o evento "+ seleçaonome);
     participantesevento[numeropar] ++;
   }else{
     alert("O evento está lotado");
   }
 }else{
   alert("Evento não encontrado");
 }
}else{
  alert("Erro: Seleção inválida.")
}}
