const pessoa = require('./pessoa.js')

const mathias = new pessoa("mathias", 85, 1.72);
console.log(mathias);
console.log(mathias.imc);

const maria = new pessoa();
maria.nome = "maria";
maria.altura = 1.67;
maria.peso = 57;
console.log(maria);