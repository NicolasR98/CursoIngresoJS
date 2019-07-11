function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numeroRandom

	numeroRandom = Math.floor ( Math.random() * 10 + 1);

	if (numeroRandom >= 9){

		alert ("Nota: " + numeroRandom + " Excelente");
	} // no agrego menor que 9 porque ya en la anterior condicon quedo descartada.
	else if (numeroRandom >= 4){

		alert("Nota: " + numeroRandom + " Aprobo")
	}
	
	else alert ("Nota: " + numeroRandom + " Vamos, la proxima se puede");


}//FIN DE LA FUNCIÓN