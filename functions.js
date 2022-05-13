//Iteracion 1:

function sum(numberOne , numberTwo) {
    if (numberOne>numberTwo){
        console.log (numberOne);
    }
    else if (numberTwo>numberOne){
        console.log(numberTwo);
    }
    else console.log("Son iguales...")
  }

  sum(2,2);

console.log("----------------------")
//Iteracion 2:

 let MasLargo= "";
  const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  for (let i=0;i< param.length;i++){
    if (param[i].length>MasLargo.length){
        MasLargo=param[i];
    }
    else if (param[i].length == MasLargo.length){
        MasLargo=MasLargo + " " + param[i];
    }
  }
  console.log(MasLargo);
}

findLongestWord(avengers);

console.log("----------------------")
//Iteracion 3:

const numbers = [1, 2, 3, 5, 45, 37, 58];
let suma=0;
function sumAll(param) {
  for (let i=0; i<param.length; i++ ){
    suma=suma+param[i];
  }
  console.log("La suma de todos los elementos del array " + "es: " + suma);

}
sumAll(numbers);







