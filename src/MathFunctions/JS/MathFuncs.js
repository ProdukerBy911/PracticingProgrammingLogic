const NumFact = 120;
const Result = 

function fatorial(NumFact) {
  if (NumFact == 0) {
    return print("Defina um valor inteiro maior que 10 para calcular o fatorial:  ");
  } else {
    Result = NumFact * (NumFact - 1) * (NumFact -2);
  }
  console.log(Result);
}