const NumFact = 120;
const Result = NumFact * (NumFact - 1) * (NumFact -2); 

function fatorial(NumFact) {
  if (NumFact == 0) {
    return print("Defina um valor inteiro maior que 10 para calcular o fatorial:  ");
  } else {
    return Result; 
  }
}

console.log(fatorial);