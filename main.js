
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Quem é a melhor pessoa do mundo?");

    
    if (respostaTime.toLowerCase() === "lorena david") {
      alert("Isso mesmo!Euzinhaaaaaaaaaa!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  

