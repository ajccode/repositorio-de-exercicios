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
  //o numero de likes dentro de um array
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
  
  /** Considere uma matriz / lista de ovelhas 
   * onde algumas ovelhas podem estar faltando 
   * em seu lugar. Precisamos de uma função que 
   * conte o número de ovelhas pre */
   
   countSheeps (arrayOfSheeps) {

     let nummero_de_ovelhas = [3];
     nummero_de_ovelhas[0] = 0;
     nummero_de_ovelhas[1] = 0;
     nummero_de_ovelhas[2] = 0;
     nummero_de_ovelhas[3] = 0;
     for (let contagem = 0; contagem <= (arrayOfSheeps.length - 1); contagem++) {
       if (arrayOfSheeps[contagem] === undefined) {
        nummero_de_ovelhas[0] += 1;
      }
      if (arrayOfSheeps[contagem] === null) {
        nummero_de_ovelhas[1] += 1;
      }
      if (arrayOfSheeps[contagem] === false) {
        nummero_de_ovelhas[2] += 1;
      }
      if (arrayOfSheeps[contagem] === true) {
         nummero_de_ovelhas[3] += 1;
      }
    }
    return " undefined: " +  nummero_de_ovelhas[0] + " null: " + nummero_de_ovelhas[1] + " false: " + nummero_de_ovelhas[2] + " true: " + nummero_de_ovelhas[3];;
  }
}
window.onload = function () {
 
  document.getElementById("ini").innerHTML = "<h1>Coloque o codigo aqui!11</h1>";
};