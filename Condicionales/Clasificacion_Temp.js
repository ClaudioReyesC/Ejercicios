/*Clasificación de Temperatura:

temperatura mayor a 30: "Mucho calor"

temperatura entre 20 y 30 (inclusive): "Temperatura normal"

temperatura entre 10 y 19 (inclusive): "Fresco"

temperatura menor a 10: "Frío"

Define una variable temperatura y clasifícala.

*/
let temperatura = 31
if ( temperatura > 30){
    console.log("Mucho Calor")
}else if(temperatura >= 20 && temperatura <=30){
    console.log("temperatura normal")
}else if(temperatura >= 10 && temperatura <=19){
    console.log("Fresco")
}else{
    console.log("Frio")
}