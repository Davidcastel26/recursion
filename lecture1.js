//hipotesis: x es un numero entero
function factorial(x){
    //casos de corte / caso base
    if(x > -1 && x < 2) return 1
    //devolvemos 1 puesto que 0! = 1 y 1! = 1
    else if(x <0) return 0;
    
    // parte de recursion
    return x * factorial(x - 1) // si x >= 2 devolvemos el producto de x por el factorial de x - 1
  }