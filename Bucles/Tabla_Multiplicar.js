/*Tabla de Multiplicar: Pide al usuario un número (variable numeroTabla, por ejemplo, 7). 
Usa un bucle for para imprimir
 la tabla de multiplicar de ese número del 1 al 10 (ej: "7 x 1 = 7").*/

let numeroTabla = 8
  for(let i = 1 ; i < 11; i++){
    let resultado = numeroTabla * i 
    console.log(numeroTabla, " x ", i ," = ", resultado )
 }
