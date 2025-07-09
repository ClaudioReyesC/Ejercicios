/*Día de la Semana: Crea una variable diaNumero con un número del 1 al 7. 
Usando condicionales, imprime el nombre del día de la semana
 (1 = "Lunes", 2 = "Martes", etc.). 
Si el número no está en ese rango, imprime "Número de día inválido".

*/

let diaNumero = 10; // Simulando la entrada del usuario
if(diaNumero === 1){
    console.log("es lunes")
} else if(diaNumero === 2){
    console.log("es martes")
}else if(diaNumero === 3){
    console.log("es miercoles")
}else if(diaNumero === 4){
    console.log("es jueves")
}else if(diaNumero === 5){
    console.log("es viernes")
}else if(diaNumero === 6){
    console.log("es sabado")
}else if(diaNumero === 7){
    console.log("es domingo")
}else{
    console.log("Número de día inválido")
}