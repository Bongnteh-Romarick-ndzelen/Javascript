function Multiplication(x,y){
      return x * y //The function returns the product of x and y
}
var z = Multiplication(30,7)
console.log(z)
function fact(n){
      if (n == 0){
            return 1;
      }
      else if (n < 0){
            return ("invalid Input");
      }
      return n * fact(n-1);
}
console.log(fact(-6))
