function mostrar() {
    //tomo la edad  

    var edad

    edad = parseInt(document.getElementById("edad").value);

    if (edad < 13) {

        alert("Es un niño");

    }

    //Utilizo "else if" para hacer la siguiente condicion sin hacer el if devuelta (que esta mal)

    else if (edad < 18) {

        alert("Es adolescente")

    }

    else {
        alert("Es adulto");
    }





}//FIN DE LA FUNCIÓN