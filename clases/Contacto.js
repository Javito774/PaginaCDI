class Contacto
{
	constructor(nombre,numero,imagen)
	{
		this.nombre = nombre;
		this.numero = numero;
		if(imagen!=null)
			this.imagen = "<img class='foto-contacto' src='"+imagen+"'/>";
		else
			this.imagen = "<p class='foto-contacto'>"+this.nombre[0]+"</p>";
	}
}
