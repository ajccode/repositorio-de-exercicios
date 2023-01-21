  
  /**
   * Um jogo bem simples de JokenPo bem organizado.
   **/
  let s = "sicssors";
  let r = "rock";
  let p = "papers";
  
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
  
  };
  window.onload = function() {
    document.getElementsByTagName("body")[0].innerHTML += rps(r, s) + "</br>";  //"Player 1 won!";
    document.getElementsByTagName("body")[0].innerHTML += rps(s, p) + "</br>";  //"Player 1 won!";
    document.getElementsByTagName("body")[0].innerHTML += rps(p, r) + "</br>"; //"Player 1 won!";
  
    document.getElementsByTagName("body")[0].innerHTML += rps(s, r) + "</br>";  //"Player 2 won";
    document.getElementsByTagName("body")[0].innerHTML += rps(p, s) + "</br>";  //"Player 2 won";
    document.getElementsByTagName("body")[0].innerHTML += rps(r, p) + "<br>";  //"Player 2 won";
  
    document.getElementsByTagName("body")[0].innerHTML += rps(r, r) + "</br>"; //"return "Draw!";  
    document.getElementsByTagName("body")[0].innerHTML += rps(s, s) + "</br>"; //"return "Draw!";
    document.getElementsByTagName("body")[0].innerHTML += rps(p, p) + "</br>"; //"return Draw"
  };
