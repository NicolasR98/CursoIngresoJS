function mostrar()
{
var edad

edad = parseInt(document.getElementById("edad").value);

// Añadi encerre a la condicion en parentesis y le añadi el "not" (!) para volver verdad una condicion falsa.

if (!(edad >= 13 && edad <= 17)){

alert("No es adolescente");

}

//Aca hice lo mismo pero invertido. Añadiendo "pipe" (||) entre las dos condiciones


//if (edad < 13 || edad > 17){

    //alert("No es adolescente");





}//FIN DE LA FUNCIÓN