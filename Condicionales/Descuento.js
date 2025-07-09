/*Descuento por Edad: Si una persona tiene 65 años o más, 
tiene un 10% de descuento. Si tiene menos de 18 años, tiene un 20% de descuento. 
De lo contrario, no tiene descuento. Declara una variable edad y precioOriginal
 y calcula el precioFinal con el descuento si aplica.*/


let edad = 25
let precioOriginal = 1000
let precioFinal = precioOriginal
if (edad >= 65){
    precioFinal *= 0.9
    console.log("tienes un descuento de 10% el precio final es de: ", precioFinal)
}else if(edad < 18){
    precioFinal *= 0.8
    console.log("tienes un descuento de 10% el precio final es de: ", precioFinal)
}else{
    console.log("Lo siento no tienes descuento el precio final es:", precioFinal)
}