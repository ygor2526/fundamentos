console.log("
=== EXERCÍCIO 2: CALLBACK COM PARÂMETROS ===");
function calcularDobro(numero, callbackResultado) {
  const dobro = numero * 2;
  callbackResultado(dobro);
}

function imprimirFormatado(valor) {
  console.log(`[RESULTADO]: O valor calculado é ${valor}`);
}

calcularDobro(25, imprimirFormatado); 