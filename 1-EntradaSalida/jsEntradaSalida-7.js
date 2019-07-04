/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	 var numero_1;
    var numero_2;
    var resultado;
    
numero_1 = parseInt ( document.getElementById("numeroUno").value);
numero_2 = parseInt ( document.getElementById("numeroDos").value);

  
resultado = numero_1 + numero_2;

    alert("La suma es " + resultado );
	
}

function restar()
{
    var numero_1;
    var numero_2;
    var resultado;
    
numero_1 = parseInt ( document.getElementById("numeroUno").value);
numero_2 = parseInt ( document.getElementById("numeroDos").value);

  
resultado = numero_1 - numero_2;

    alert("La resta es " + resultado );
	
}

function multiplicar()
{
    var numero_1;
    var numero_2;
    var resultado;
    
    numero_1 = parseInt (document.getElementById("numeroUno").value);
    numero_2 = parseInt(document.getElementById("numeroDos").value);

    resultado = numero_1 * numero_2;

    alert("La multiplicacion es " + resultado);

}

function dividir()
{
    var numero_1;
    var numero_2;
    var resultado;

    numero_1 = parseInt(document.getElementById("numeroUno").value);
    numero_2 = parseInt(document.getElementById("numeroDos").value);
    
    resultado = numero_1 / numero_2;

    alert("La division es " + resultado);
	
}

