class Executar {
  constructor () {
    window.onload = function () {
      document.getElementById("ini").innerHTML = "<h1>De uma olhada nos metodos e adicione-os ao construtor<h1>";
    };
  }
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
  
}

var codigos = new Executar ();