function mostrar()
{
//tomo la edad  
var edad ;

edad = parseInt(document.getElementById("edad").value ) ;

if(edad >= 18)
{ 
    alert("Es adulto")

}
else if (edad <= 17 && edad >= 13)
{
    alert("Es adolescente")
}
else 
{
    alert("es niño")
}


}//FIN DE LA FUNCIÓN