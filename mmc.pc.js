function mmc(a, b) {
  
  if (isNaN(a) || isNaN(b)) {
    return "Erro: um dos valores não é um número.";
  }

  if (a <= 0 || b <= 0) {
    return "Erro: insira apenas números inteiros positivos.";
  }

  let maior = Math.max(a, b);

  while (true) {
    if (maior % a === 0 && maior % b === 0) {
      return maior;
    }
    maior++;
  }
}