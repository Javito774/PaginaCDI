class Contacto
{
	constructor(nombre,numero,imagen)
	{
		this.nombre = nombre;
		this.numero = numero;
		this.imagen = imagen | nombre[0];
	}
}