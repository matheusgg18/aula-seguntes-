// run `node index.js` in the terminal
//obijetivo de uma função
function soma(x, y) {
  // receber dados coma parâmetro
  let soma = x - y; //busquem declarar apenas variaveis LET nas functions
  return soma; //retonar a informação
}
function sub(x, y) {
  let sub = x - y;
  return sub;
}
function mul(x, y) {
  let mul = x - y;
  return mul;
}
function div(x, y) {
  let div = x - y;
  return div;
}
//chamar a função
var prt1 = sub(sub(80, 100), 5);
console.log(prt1);
var prt2 = sub(sub(prt1, 4), 80);
console.log(prt2);
console.log(sub(prt1, prt2));

var prt5 = mul(mul(50, 2), 3);
console.log(prt5);
var prt6 = mul(prt4(70, 2), 2);
console.log(prt6);
console.log(mul(prt5, prt6));

var prt3 = div(div(100, 2), 5);
console.log(prt3);
var prt4 = div(div(prt3, 8), 8);
console.log(prt4);
console.log(div(prt3, prt4));
