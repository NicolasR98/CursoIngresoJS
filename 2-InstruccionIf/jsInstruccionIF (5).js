function mostrar()
{
//tomo la edad  
var edad ;
edad = parseInt(document.getElementById("edad").value) ;

            // Si su edad es menor a 13 O mayor a 18
if(edad < 13 || edad >= 18)
{
    alert("No sos adolescente") ;
}
                       /* Tambien se podria hacer negando la edad.

                        aca se niega los valores de adolescencia (entre 13 y 17 años)

                     if ( !(edad >= 13 && edad <= 17))
                        {
                                  alert("adolescente")
                        }
                                                                                      */ 
 

}//FIN DE LA FUNCIÓN