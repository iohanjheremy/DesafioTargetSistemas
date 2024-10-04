function verificarLetraA(str) {
  // Usando expressão regular para encontrar todas as ocorrências de 'a' ou 'A'
  let matches = str.match(/a/gi); // 'g' para global, 'i' para ignorar maiúsculas/minúsculas
  
  if (matches) {
      return `A letra "a" foi encontrada ${matches.length} vezes.`;
  } else {
      return `A letra "a" não foi encontrada.`;
  }
}

// Testando a função com uma string de exemplo
let stringTeste = "Aprendizado com algoritmos";
console.log(verificarLetraA(stringTeste));
