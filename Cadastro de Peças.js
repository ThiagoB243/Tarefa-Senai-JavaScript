var pesopeças, listapeças = 0, mesmonome;
var nomepeças;
var listagemnome = [];
var listagempesos = [];

while (listapeças < 10){
nomepeças = window.prompt("Informe o nome da peça: ");
mesmonome = listagemnome.find(element => nomepeças);
if(nomepeças === mesmonome){
  alert("Você ja usou esse nome");
}else{
if(nomepeças.length < 3){
  alert("Erro: Nome da peça menor que três dígitos")
}else{
listagemnome.push(nomepeças);
pesopeças = window.prompt("Informe o peso da peça: ");
if (pesopeças > 100){
listapeças++;
listagempesos.push(pesopeças);
}else{
  alert("Erro: Peça de peso menor que 100g")
}}}}
alert("Número de peças máximo alcançado")
console.log(listagemnome);
console.log(listagempesos);