class Netlis {
  constructor() {
    this.nombre = "Netlis";
    this.biblioteca = new BibliotecaMultimedia("Biblioteca");
  	this.peliculas = new BibliotecaMultimedia("Peliculas");
  	this.series = new BibliotecaMultimedia("Series");
    this.interfaz = document.querySelector("#servicios .netlis");

    this.peliculas.aniadirPelicula(new Pelicula('Harry Potter y la piedra filosofal','El día en que cumple once años, Harry Potter se entera de que es hijo de dos destacados hechiceros, de los que ha heredado poderes mágicos. En la escuela Hogwarts de Magia y Hechicería, donde se educa con otros niños que también tienen poderes especiales, aprenderá todo lo necesario para ser mago.','assets/pelicula1.jpg',1998,150,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('Harry Potter y la camara de los secretos','','assets/pelicula2.jpg',1998,150,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('Harry Potter y el prisionero de azkaban','','assets/pelicula3.jpg',1998,150,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('Harry Potter y el cáliz de fuego','','assets/pelicula4.jpg',1998,150,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('Harry Potter y el misterio del principe','','assets/pelicula5.jpg',1998,150,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('Ex-Machina','','assets/pelicula6.jpg',1998,150,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('Star Wars Episodio I','','assets/pelicula7.jpg',1998,150,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('Charlie y la fabrica de chocolate','','assets/pelicula8.jpg',1998,150,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('El viaje de chihiro','','assets/pelicula9.jpg',1998,150,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('El Rey León','','assets/pelicula10.jpg',1998,150,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('Buscando a Nemo','','assets/pelicula11.jpg',1998,150,2.99));
    this.imprimir(this.interfaz.querySelector('.sub-menu.peliculas'),this.peliculas.peliculas);
    this.biblioteca.aniadirPelicula(this.peliculas.peliculas[0]);
    this.biblioteca.aniadirPelicula(this.peliculas.peliculas[1]);
    this.biblioteca.aniadirPelicula(this.peliculas.peliculas[2]);
    this.biblioteca.aniadirPelicula(this.peliculas.peliculas[5]);
    this.biblioteca.aniadirPelicula(this.peliculas.peliculas[8]);
    this.imprimir(this.interfaz.querySelector('.sub-menu.biblioteca'),this.biblioteca.peliculas);
  }
  imprimir(interfaz,array)
  {
    var mensaje="";
    array.forEach(pelicula => {
      mensaje+='<div class="pelicula">';
      mensaje+='<img src="'+pelicula.miniatura+'" />';
      mensaje+='<p class="nombre">'+pelicula.nombre+'</p>';
      mensaje+='<p class="caducidad">'+pelicula.precio+'€</p>';
      mensaje+='</div>';
    });
    interfaz.innerHTML=mensaje;
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
	constructor(nombre,descripcion,miniatura,anio,duracion,precio)
	{
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.miniatura = miniatura;
		this.anio = anio;
    this.duracion = duracion;
		this.precio = precio;
	}
}
