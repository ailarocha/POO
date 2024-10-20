// Função que gera números pseudo-aleatórios com base em uma semente
function pseudoRandom(seed) {
    var x = Math.sin(seed) * 10000;
    return Math.floor((x - Math.floor(x)) * 100);
  }
  
  function generateRandomNumbers() {
    var seed = parseInt(document.getElementById("seed").value);
    var numbers = [];
    var sum = 0;
    var evenCount = 0;
    var oddCount = 0;
  
    // Gera 10 números pseudo-aleatórios e calcula soma, contagem de pares/ímpares
    for (let i = 0; i < 10; i++) {
      var number = pseudoRandom(seed + i);
      numbers.push(number);
      sum += number;
  
      if (number % 2 === 0) {
        evenCount++; // Contagem de números pares
      } else {
        oddCount++; // Contagem de números ímpares
      }
    }
  
    var average = sum / numbers.length;
  
    // Exibe os resultados
    document.getElementById("result").innerHTML = 
      "Sequência: " + numbers.join(", ") + "<br>" +
      "Soma: " + sum + "<br>" +
      "Média: " + average.toFixed(2) + "<br>" +
      "Números Pares: " + evenCount + "<br>" +
      "Números Ímpares: " + oddCount;
  }
  