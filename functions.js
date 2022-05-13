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

console.log("----------------------")
//Iteracion 4:

const numbers4 = [12, 21, 38, 5, 45, 37, 6];
let suma4=0;
let promedio=0;
function average(param) {
    for (let i=0; i<param.length; i++ ){
        suma4=suma4+param[i];
      }
      promedio= suma4/param.length;
      console.log("El promedio de este array es: " + promedio);
    
  // insert code
}
average(numbers4);

console.log("----------------------")
//Iteracion 5:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', 10, 'upgrade', 8, 'hub'];
suma5=0;
promedio5=0;
function averageWord(param) {
    for (let i=0; i<param.length; i++){
        if (isNaN(param[i])){
            suma5= suma5+ param[i].length;
        }
        else if (isNaN(param[i])==false){
            suma5= suma5 + param[i];
        } 
    }
promedio= suma5/param.length;
console.log("La suma de todo es: " + suma);
console.log("El promedio de todo es: " + promedio);

}
averageWord(mixedElements);





