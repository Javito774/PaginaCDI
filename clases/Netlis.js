class Netlis {
  constructor() {
    this.nombre = "Netlis";
    this.interfaz = document.querySelector("#servicios .netlis");
    this.biblioteca = new BibliotecaMultimedia("Biblioteca",this.interfaz.querySelector('.sub-menu.biblioteca'));
  	this.peliculas = new BibliotecaMultimedia("Peliculas",this.interfaz.querySelector('.sub-menu.peliculas'));
  	this.series = new BibliotecaMultimedia("Series",this.interfaz.querySelector('.sub-menu.series'));

    this.peliculas.aniadirPelicula(new Pelicula('Harry Potter y la piedra filosofal','El día en que cumple once años, Harry Potter se entera de que es hijo de dos destacados hechiceros, de los que ha heredado poderes mágicos. En la escuela Hogwarts de Magia y Hechicería, donde se educa con otros niños que también tienen poderes especiales, aprenderá todo lo necesario para ser mago.','assets/pelicula1.jpg',2001,152,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('Harry Potter y la camara de los secretos','Terminado el verano, Harry (Radcliffe) no ve la hora de abandonar la casa de sus odiosos tíos, pero, inesperadamente se presenta en su dormitorio Dobby, un elfo doméstico, que le anuncia que correrá un gran peligro si vuelve a Hogwarts.','assets/pelicula2.jpg',2002,154,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('Harry Potter y el prisionero de azkaban','Cuando Harry Potter y sus amigos vuelven a Hogwarts para cursar su tercer año de estudios, se ven involucrados en un misterio: de la prisión para magos de Azkaban se ha fugado Sirius Black, un peligroso mago que fue cómplice de Lord Voldemort y que intentará vengarse de Harry Potter.','assets/pelicula3.jpg',2004,137,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('Harry Potter y el cáliz de fuego','La cuarta parte de la serie del niño mago comienza con la Copa Internacional de Quidditch. Cuenta también el inicio de la atracción por Cho Chang y otro año de magia, en el que una gran sorpresa obligará a Harry a enfrentarse a muchos desafíos temibles.','assets/pelicula4.jpg',2005,157,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('Harry Potter y el misterio del principe','Las tediosas vacaciones en casa de sus tíos todavía no han acabado y Harry se encuentra más inquieto que nunca. Apenas ha tenido noticias de Ron y Hermione y presiente que algo extraño está sucediendo en Hogwarts.','assets/pelicula5.jpg',2007,138,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('Ex-Machina','Nathan, un programador multimillonario con fama de reclusivo, selecciona a Caleb, un joven empleado de su empresa, para que pase una semana con él en un lugar remoto en las montañas con el objetivo de que participe en un test en el que está involucrada su última creación: Ava, un robot-mujer en el que inteligencia artificial lo es todo.','assets/pelicula6.jpg',2015,108,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('Star Wars Episodio I','Ambientada treinta años antes que "La guerra de las galaxias" (1977), muestra la infancia de Darth Vader, el pasado de Obi-Wan Kenobi y el resurgimiento de los Sith, los caballeros Jedi dominados por el Lado Oscuro. La Federación de Comercio ha bloqueado el pequeño planeta de Naboo, gobernado por la joven Reina Amidala.','assets/pelicula7.jpg',1999,130,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('Charlie y la fabrica de chocolate','Charlie Bucket (Freddie Highmore), un niño muy bueno de una familia muy pobre, gana un concurso para disfrutar de una visita de un día a la gigantesca fábrica de chocolate del excéntrico Willy Wonka (Johnny Depp) y su equipo de Oompa-Loompas.','assets/pelicula8.jpg',2005,116,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('El viaje de chihiro','Chihiro es una niña de diez años que viaja en coche con sus padres. Después de atravesar un túnel, llegan a un mundo fantástico, en el que no hay lugar para los seres humanos, sólo para los dioses de primera y segunda clase. Cuando descubre que sus padres han sido convertidos en cerdos, Chihiro se siente muy sola y asustada.','assets/pelicula9.jpg',2001,124,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('El Rey León','La sabana africana es el escenario en el que tienen lugar las aventuras de Simba, un pequeño león que es el heredero del trono. Sin embargo, al ser injustamente acusado por el malvado Scar de la muerte de su padre, se ve obligado a exiliarse. Durante su destierro, hará buenas amistades e intentará regresar para recuperar lo que legítimamente le corresponde.','assets/pelicula10.jpg',1994,85,2.99));
    this.peliculas.aniadirPelicula(new Pelicula('Buscando a Nemo','El pececillo Nemo, que es hijo único, es muy querido y protegido por su padre. Después de ser capturado en un arrecife australiano va a parar a la pecera de la oficina de un dentista de Sidney. Su tímido padre emprenderá una peligrosa aventura para rescatarlo.','assets/pelicula11.jpg',2003,101,2.99));
    this.peliculas.imprimir(true);
    this.biblioteca.aniadirPelicula(this.peliculas.peliculas[3]);
    this.biblioteca.aniadirPelicula(this.peliculas.peliculas[5]);
    this.biblioteca.aniadirPelicula(this.peliculas.peliculas[4]);
    this.biblioteca.aniadirPelicula(this.peliculas.peliculas[8]);
    this.biblioteca.imprimir(false);
    this.series.aniadirPelicula(new Serie('Marco Polo','En un mundo repleto de codicia, rivalidad, intrigas sexuales y traiciones, "Marco Polo" narra las aventuras del famoso explorador de la corte de Kublai Khan en la China del siglo XIII.','assets/serie1.jpg',2014,50,4.95,2));
    this.series.aniadirPelicula(new Serie('American Gods','Sombra cumple condena cuando su mujer y su mejor amigo acaban de morir en un accidente de coche. Es en mitad de un tormentoso vuelo, de camino al funeral, donde conoce al Señor Miércoles.','assets/serie2.jpg',2017,60,4.95,2));
    this.series.aniadirPelicula(new Serie('Juego de Tronos','La historia se desarrolla en un mundo ficticio de carácter medieval donde hay Siete Reinos. Hay tres líneas argumentales principales: la crónica de la guerra civil dinástica por el control de Poniente entre varias familias nobles que aspiran al Trono de Hierro.','assets/serie3.jpg',2011,50,4.95,8));
    this.series.aniadirPelicula(new Serie('Stranger Things','Homenaje a los clásicos misterios sobrenaturales de los años 80, "Stranger Things" es la historia de un niño que desaparece en el pequeño pueblo de Hawkins, Indiana, sin dejar rastro en 1983.','assets/serie4.jpg',2016,50,4.95,3));
    this.series.aniadirPelicula(new Serie('Breaking Bad','Tras cumplir 50 años, Walter White (Bryan Cranston), un profesor de química de un instituto de Albuquerque, Nuevo México, se entera de que tiene un cáncer de pulmón incurable. Casado con Skyler (Anna Gunn) y con un hijo discapacitado (RJ Mitte), la brutal noticia lo impulsa a dar un drástico cambio a su vida.','assets/serie5.jpg',2008,45,4.95,5));
    this.series.aniadirPelicula(new Serie('Westworld','Westworld es un parque de atracciones futurista y controlado por alta tecnología dirigido por el Dr. Robert Ford (Anthony Hopkins). Las instalaciones cuentan con androides cuya apariencia física es humana, y gracias a ellos los visitantes pueden dar rienda suelta a sus instintos y vivir cualquier tipo de aventura o fantasía, por muy oscura o peligrosa que sea, sabiendo que los robots no les harán daño.','assets/serie6.jpg',2016,60,4.95,3));
    this.series.aniadirPelicula(new Serie('Vikingos','Narra las aventuras del héroe Ragnar Lothbrok, de sus hermanos vikingos y su familia, cuando él se subleva para convertirse en el rey de las tribus vikingas. Además de ser un guerrero valiente, Ragnar encarna las tradiciones nórdicas de la devoción a los dioses. Según la leyenda era descendiente directo del dios Odín.','assets/serie7.jpg',2013,45,4.95,6));
    this.series.imprimir(true);
  }
  mostrarInfoSerie(numero)
  {
    var peli = this.series.peliculas[numero];
    document.querySelector('.pantallaPago .confirmacion-pago').setAttribute('onclick','new Transaccion(netlis.series.peliculas['+numero+'])');
    mostrarPrecioEnTarjeta(peli.precio);
    pantallaPeliculas.nombre = peli.nombre;
    pantallas.push(pantallaPeliculas);
    mostrarCarpeta();
    document.querySelector('.pantalla-pelicula').style.display="grid";
    document.querySelector('.pantalla-pelicula .cartel img').setAttribute('src',peli.miniatura);
    document.querySelector('.pantalla-pelicula .datos .titulo').innerHTML = peli.nombre;
    document.querySelector('.pantalla-pelicula .datos .descripcion').innerHTML = peli.descripcion;
    document.querySelector('.pantalla-pelicula .datos button span').innerHTML = peli.precio+"€";
    document.querySelector('.pantalla-pelicula .datos .año').innerHTML = peli.anio+" · "+peli.duracion + "minutos";
  }
  mostrarInfoPelicula(numero)
  {
    var peli = this.peliculas.peliculas[numero];
    peliculaSeleccionada=numero;
    document.querySelector('.pantallaPago .confirmacion-pago').setAttribute('onclick','new Transaccion(netlis.peliculas.peliculas['+numero+'])');
    mostrarPrecioEnTarjeta(peli.precio);
    pantallaPeliculas.nombre = peli.nombre;
    pantallas.push(pantallaPeliculas);
    mostrarCarpeta();
    document.querySelector('.pantalla-pelicula').style.display="grid";
    document.querySelector('.pantalla-pelicula .cartel img').setAttribute('src',peli.miniatura);
    document.querySelector('.pantalla-pelicula .datos .titulo').innerHTML = peli.nombre;
    document.querySelector('.pantalla-pelicula .datos .descripcion').innerHTML = peli.descripcion;
    document.querySelector('.pantalla-pelicula .datos button span').innerHTML = peli.precio+"€";
    document.querySelector('.pantalla-pelicula .datos .año').innerHTML = peli.anio+" · "+peli.duracion + "minutos";
  }
}
class BibliotecaMultimedia
{
	constructor(nombre,interfaz)
	{
		this.nombre = nombre;
		this.peliculas = [];
    this.interfaz=interfaz;
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
  imprimir(conPrecio)
  {
    var mensaje="";
    var i = 0;
    this.peliculas.forEach(pelicula => {
      mensaje+='<div class="pelicula"';
      if(conPrecio && pelicula instanceof Pelicula)
        mensaje+='onclick="electrodomesticoActual.mostrarInfoPelicula('+i+')"';
      else if(conPrecio && pelicula instanceof Serie)
        mensaje+='onclick="electrodomesticoActual.mostrarInfoSerie('+i+')"';
      mensaje+='>';
      mensaje+='<img src="'+pelicula.miniatura+'" />';
      mensaje+='<p class="nombre">'+pelicula.nombre+'</p>';
      if(conPrecio)
        mensaje+='<p class="caducidad">'+pelicula.precio+'€</p>';
      mensaje+='</div>';
      i++;
    });
    this.interfaz.innerHTML=mensaje;
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
class Serie
{
	constructor(nombre,descripcion,miniatura,anio,duracion,precio,temporadas)
	{
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.miniatura = miniatura;
		this.anio = anio;
    this.duracion = duracion;
    this.temporadas = temporadas
		this.precio = precio;
	}
}
