console.log("
=== EXERCÍCIO 5: CALLBACK ASSÍNCRONA COM SETTIMEOUT ===");
function simularDownload(nomeArquivo, callbackConclusao) {
  console.log(`Iniciando download de [${nomeArquivo}]...`);

  setTimeout(() => {
    callbackConclusao();
  }, 1500);
}

simularDownload("dados_clientes.csv", () => {
  console.log("✅ Download finalizado com sucesso no disco!");
});
console.log("⚡ [Node.js] Linha seguinte executada imediatamente sem travar!");