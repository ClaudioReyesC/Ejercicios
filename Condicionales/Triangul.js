/*Tipo de Triángulo: Dadas tres variables lado1, lado2, lado3 
que representan las longitudes de los lados de un triángulo.
 Determina e imprime si es:

Equilátero (todos los lados iguales)

Isósceles (dos lados iguales)

Escaleno (todos los lados diferentes)*/

let Lado1=30
let Lado2=20
let Lado3=30
if (Lado1 === Lado2 && Lado2 === Lado3){
    console.log("Equilátero")
}else if(Lado1 === Lado2 || Lado2 ===Lado3 || Lado1 === Lado3){
    console.log("Isósceles")
}else{
    console.log("Escaleno")
}