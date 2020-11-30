class Executar {
  //Seleciona os numeros pares ou impares de num e
  //mostra os numeros pares ou impares que
  //estão em numero menor
  iterar (num) {
     var par = [];
     var impar = [];
       
     for(let i = 0; i < num.length; i++) {
       if (num[i] % 2 === 0) {
         par.push(num[i]);
         } else {
           impar.push(num[i]);
         }
       }
       
       if (par.length < impar.length) return par;
       if (par.length > impar.length) return impar;
  }
  //Semelhante ao likes do facebook, mostra
  //o numero de likes dentro de um array;
  likes (curtidas) {
      let verdadeiro = true;
      switch (verdadeiro) {
        case ((curtidas.length - 1) === -1):
          return "no one like this";
          break;
        
        case ((curtidas.length -1) === 0):
          return curtidas[0] + " like this";
          break;
        
        case ((curtidas.length -1) === 1):
          return curtidas[0] + " and " + curtidas[1] + " like this";
          break;
       
       case ((curtidas.length -1) === 2):
         return curtidas[0] + ", " + curtidas[1] + " and " + curtidas[2] + " like this";
         break;
       case ((curtidas.length -1) >= 3):
         return curtidas[0] + ", " + curtidas[1] + " and " + (curtidas.length - 2) + " others like this";
         break;
      }
   }
}
window.onload = function () {
  document.getElementById("ini").innerHTML = "<h1>adicione o metodo que quiser aqui!!!!</h1>";
}

