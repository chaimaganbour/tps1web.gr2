for (let i = 0; i < 5; i++) {
   T[i]=parseInt(prompt("entrez un nombre:"));
    
}
let som;
function somme_5(T){
  for (let i = 0; i<5; i++) {
     som=som+T[i];  
  }
  return som
}
//alert("la somme est :",))
Console.log(somme_5(T))