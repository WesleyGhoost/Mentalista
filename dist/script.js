var numeroSecreto = parseInt(Math.random() * 11);
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "você acertou!!";
    elementoResultado.innerHTML +=
      "<p>Se quiser, reinicie a página para tentar novamente!</p>";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "você deve digitar um número entre 0 e 10";
  } else {
    elementoResultado.innerHTML =
      "<p>você errou, o número era:</p>" + numeroSecreto;
    elementoResultado.innerHTML +=
      "<p> reinicie a página para tentar novamente</p>";
  }
}