/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
    var sueldo
    var aumento
    var nuevoSueldo
// pongo las variables

    sueldo = parseFloat(document.getElementById("sueldo").value);

    
    aumento = sueldo *.1;

    //Hago la operacion procedente a sacar el porcentaje del sueldo

    nuevoSueldo = sueldo + aumento;
// El resultado del porcentaje del aumento lo sumo con el sueldo

    document.getElementById("resultado").value = nuevoSueldo;

    // Muestro el sueldo con aumento en la caja de texto "resultado"
    

   








}
