/*Acceso al Sistema: Una persona puede acceder al sistema
 si su usuario es "admin" Y su contrasena es "12345".
 Si no, imprime "Acceso denegado".*/

 let usuario= "hola"
 let pass = 12345
 if( usuario=== "admin" && pass=== 12345){
    console.log("Bienvenido Administrador")
 }else{
    console.log("Acceso DENEGADO")
 }