/* ¿Qué es un objeto?
Un objeto agrupa información y funciones relacionadas. Tiene propiedades y métodos.*/
let persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function() {
    console.log("Hola, soy " + this.nombre);
  }
};
console.log(persona)

//accediendo a propiedades
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona["edad"])

//Modificacion propiedades
persona.nombre= "pedro";
persona.edad = 35
console.log(persona)
//elimanar propiedad
delete persona.edad
console.log(persona)
