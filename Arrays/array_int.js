//Crear una función que devuelva solo los elementos mayores a 10.
let numeros =[10,5,1,20,3,2,25,15,11,7,8,9,4,6,66,100]
console.log(numeros)

function numeros_mayor(arr){
    return arr.filter(num => num > 10);
}
console.log(numeros_mayor(numeros));
//Crear una copia de un arreglo con .slice().
let copia = numeros.slice();
copia.push(99);
console.log(numeros);
console.log(copia);
//Ordenar un arreglo alfabéticamente.
let frutas = ["manzana","pera","naranja","Frutilla","Sandia"]
console.log(frutas);
frutas.sort();
console.log(frutas);
//Revertir un arreglo.
console.log(numeros.reverse(numeros));
//Usar .map() para multiplicar todos los números por 2.
let nuevo_numero = numeros.map(num => num *2 );
console.log(nuevo_numero)