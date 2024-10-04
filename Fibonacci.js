function pertenceFibonacci(n) {
    let fibSequence = [0, 1]; // Inicia a sequência com 0 e 1

    // Gera a sequência de Fibonacci até que o último número seja maior ou igual a n
    while (fibSequence[fibSequence.length - 1] < n) {
        let nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        fibSequence.push(nextFib);
    }

    // Verifica se o número informado pertence à sequência
    if (fibSequence.includes(n)) {
        return `O número ${n} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${n} NÃO pertence à sequência de Fibonacci.`;
    }
}

// Testando a função
let numeroTeste = 9;
console.log(pertenceFibonacci(numeroTeste));
