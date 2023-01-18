  
  /**
   * Um jogo bem simples de JokenPo bem organizado.
   **/
  let s = "sicssors";
  let r = "rock";
  let p = "papers";
  
  //Função Principal
  const rps = (p1, p2) => {
    if (((p1 === r) && (p2 === s)) || ((p1 == s) && (p2 == p)) || ((p1 === p) && (p2 == r))) {
      return "Jogador 1 ganhou!";
    }
    else if (p1 === p2) {
      return "Foi declarado um empate!!!";
    }
    else {
      return "Jogador 2 ganhou!!!";
    }
  }; //Fim função principal
  
  //Testa a função e manda para o navegador
  window.onload = function() {
    document.getElementsByTagName("body")[0].innerHTML += rps(r, s);  //"Player 1 won!";
    document.getElementsByTagName("body")[0].innerHTML += rps(s, p);  //"Player 1 won!";
    document.getElementsByTagName("body")[0].innerHTML += rps(p, r) + "<br>"; //"Player 1 won!";
  
    document.getElementsByTagName("body")[0].innerHTML += rps(s, r);  //"Player 2 won";
    document.getElementsByTagName("body")[0].innerHTML += rps(p, s);  //"Player 2 won";
    document.getElementsByTagName("body")[0].innerHTML += rps(r, p) + "<br>";  //"Player 2 won";
  
    document.getElementsByTagName("body")[0].innerHTML += rps(r, r); //return "Draw!";  
    document.getElementsByTagName("body")[0].innerHTML += rps(s, s); //return "Draw!";
    document.getElementsByTagName("body")[0].innerHTML += rps(p, p); //return "Draw!";
  };
  
  
