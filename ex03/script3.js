a=parseInt(prompt("entrez le 1er nombre :"));
b=parseInt(prompt("entrez le 2ème nombre :"));
c=parseInt(prompt("entrez le 3ème nombre :"));

function plus_grand(a,b,c){
    max=a;
  if(b>max){
    max=b;
    if(c>max){
        max=c;
    }
  }
  return max
}
alert(plus_grand(a,b,c))
function somme(a,b){
    if(a==b)
    {
        som=a+b;
        return som
    }
    else{
        som=a+b;
        tri=3*som;
        return tri 
    }
}
alert(somme(a,b));