class Netlis {
  constructor() {
    this.biblioteca = new BibliotecaMultimedia("Biblioteca");
  	this.peliculas = new BibliotecaMultimedia("Peliculas");
  	this.peliculas = new BibliotecaMultimedia("Series");
    this.interfaz = document.querySelector("#servicios .netlis");
  }

}
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
class Pelicula
{
	constructor(nombre,descripcion,miniatura,director,actores,anio,precio)
	{
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.miniatura = miniatura;
		this.director = director;
		this.actores = actores;
		this.anio = anio;
		this.precio = precio;
	}
}
