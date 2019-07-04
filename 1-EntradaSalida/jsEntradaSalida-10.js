/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
    var importe
    var descuento
    var resultado

    importe = document.getElementById("importe").value;

    //El importe que se ponga en la pagina se va a cargar en la variable

    descuento = importe * .25

    //Se saca el porcentaje del importe

    resultado = importe - descuento;
    // se resta el resultado de descuento con importe
    document.getElementById("resultado").value = resultado;

}
