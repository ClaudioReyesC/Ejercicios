//Crear un objeto auto con marca, modelo y año.

let auto ={
    marca : "Haima",
    modelo  :"Haima 3",
    año : 2013,
};
console.log(auto)
//Agregar una nueva propiedad color.
auto.color = "rojo"
console.log(auto)
//Eliminar la propiedad año.
delete auto.año
console.log(auto)
//Crear un método que devuelva una descripción del auto.
auto.descripción = function(){
    return " Auto chino"
}
console.log(auto.descripción())
