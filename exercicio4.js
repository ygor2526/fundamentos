console.log("
=== EXERCÍCIO 4: ARROW FUNCTION INLINE ===");
function processarTexto(texto, callbackModificadora) {
  callbackModificadora(texto);
}

processarTexto("senai valinhos", (t) => {
  console.log(`Texto processado: ${t.toUpperCase()}`);
});
