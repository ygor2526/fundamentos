console.log("
=== EXERCÍCIO 3: MESMA MESTRA, COMPORTAMENTOS DIFERENTES ===");
function operar(a, b, operacaoCallback) {
  return operacaoCallback(a, b);
}

function somar(x, y) {
  return x + y;
}

function multiplicar(x, y) {
  return x * y;
}

const resultadoSoma = operar(10, 4, somar);
const resultadoMult = operar(10, 4, multiplicar);

console.log(`Soma: ${resultadoSoma}`);          
console.log(`Multiplicação: ${resultadoMult}`); 