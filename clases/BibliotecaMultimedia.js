class BibliotecaMultimedia
{
	constructor(nombre)
	{
		this.nombre = nombre;
		this.peliculas = [];
	}
	aniadirPelicula(pelicula)
	{
		this.peliculas.push(pelicula);
	}
	eliminarPelicula(numero)
	{
		if(numero>=0 && numero<this.peliculas.length)
			this.peliculas.splice(numero,1);
	}
}
