var habitaciones = [];
var metodosDePago = [];
var agendaContactos = [];
var electrodomesticoActual=null;
var telefono;
var programa;
var netlis;
var netlisPagina=0;
var restaurantesFavoritos;
var telefonillo;
var codigoAcceso;
var pantallaPeliculas;

//FUNCIONES QUE INICIAN TODAS LAS ESTANCIAS DE LA CASA.
function inicio()
{
	var cocina = new Estancia(1,"cocina");
	var salon = new Estancia(3,"salon");
	var banio1 = new Estancia(7,"baño1");
	var banio2 = new Estancia(8,"baño2");
	var estudio = new Estancia(4,"estudio");
	var dormitorio1 = new Estancia(5,"dormitorio1");
	var dormitorio2 = new Estancia(6,"dormitorio2");
	var pasillo = new Estancia(2,"pasillo");
	var recibidor = new Estancia(0,"recibidor");
	var puertas = [];

	programa = new Programa();
	programa.interfaz.querySelector(".display-temperatura").innerHTML=programa.temperatura+'ºC';

	puertas.push(new Puerta(0,recibidor,cocina));
	puertas.push(new Puerta(1,recibidor,pasillo));
	puertas.push(new Puerta(2,recibidor,salon));
	puertas.push(new Puerta(3,pasillo,estudio));
	puertas.push(new Puerta(4,pasillo,dormitorio1));
	puertas.push(new Puerta(5,pasillo,dormitorio2));
	puertas.push(new Puerta(6,dormitorio2,banio2));
	puertas.push(new Puerta(7,pasillo,banio1));

	habitaciones.push(recibidor);
	recibidor.electrodomesticos.push(puertas[0]);
	recibidor.electrodomesticos.push(puertas[1]);
	recibidor.electrodomesticos.push(puertas[2]);
	recibidor.electrodomesticos.push(new Iluminacion(recibidor.electrodomesticos.length,"general"));
	recibidor.electrodomesticos.push(new Termostato(recibidor.electrodomesticos.length));

	habitaciones.push(cocina);
	cocina.electrodomesticos.push(puertas[0]);
	cocina.electrodomesticos.push(new Iluminacion(cocina.electrodomesticos.length,"general"));
	cocina.electrodomesticos.push(new Termostato(cocina.electrodomesticos.length));
	cocina.electrodomesticos.push(new Grifo(cocina.electrodomesticos.length,"fregadeo"));
	cocina.electrodomesticos.push(new Combi(cocina.electrodomesticos.length));
	cocina.electrodomesticos.push(new Vitroceramica(cocina.electrodomesticos.length,3,6));
	cocina.electrodomesticos.push(new Microondas(cocina.electrodomesticos.length));
	cocina.electrodomesticos.push(new Ventana(cocina.electrodomesticos.length,"ventana"));
	cocina.electrodomesticos.push(new Persiana(cocina.electrodomesticos.length,"persiana"));

	habitaciones.push(pasillo);
	pasillo.electrodomesticos.push(puertas[1]);
	pasillo.electrodomesticos.push(puertas[3]);
	pasillo.electrodomesticos.push(puertas[4]);
	pasillo.electrodomesticos.push(puertas[5]);
	pasillo.electrodomesticos.push(puertas[7]);
	pasillo.electrodomesticos.push(new Iluminacion(pasillo.electrodomesticos.length,"general"));
	pasillo.electrodomesticos.push(new Termostato(pasillo.electrodomesticos.length));

	habitaciones.push(salon);
	salon.electrodomesticos.push(puertas[2]);
	salon.electrodomesticos.push(new Iluminacion(salon.electrodomesticos.length,"general"));
	salon.electrodomesticos.push(new Termostato(salon.electrodomesticos.length));
	salon.electrodomesticos.push(new TV(salon.electrodomesticos.length));
	salon.electrodomesticos.push(new Ventana(salon.electrodomesticos.length,"ventana1"));
	salon.electrodomesticos.push(new Persiana(salon.electrodomesticos.length,"persiana1"));
	salon.electrodomesticos.push(new Ventana(salon.electrodomesticos.length,"ventana2"));
	salon.electrodomesticos.push(new Persiana(salon.electrodomesticos.length,"persiana2"));

	habitaciones.push(estudio);
	estudio.electrodomesticos.push(puertas[3]);
	estudio.electrodomesticos.push(new Iluminacion(estudio.electrodomesticos.length,"general"));
	estudio.electrodomesticos.push(new Termostato(estudio.electrodomesticos.length));
	estudio.electrodomesticos.push(new Ventana(estudio.electrodomesticos.length,"ventana"));
	estudio.electrodomesticos.push(new Persiana(estudio.electrodomesticos.length,"persiana"));

	habitaciones.push(dormitorio1);
	dormitorio1.electrodomesticos.push(puertas[4]);
	dormitorio1.electrodomesticos.push(new Iluminacion(dormitorio1.electrodomesticos.length,"general"));
	dormitorio1.electrodomesticos.push(new Termostato(dormitorio1.electrodomesticos.length));
	dormitorio1.electrodomesticos.push(new Ventana(dormitorio1.electrodomesticos.length,"ventana"));
	dormitorio1.electrodomesticos.push(new Persiana(dormitorio1.electrodomesticos.length,"persiana"));

	habitaciones.push(dormitorio2);
	dormitorio2.electrodomesticos.push(puertas[5]);
	dormitorio2.electrodomesticos.push(puertas[6]);
	dormitorio2.electrodomesticos.push(new Iluminacion(dormitorio2.electrodomesticos.length,"general"));
	dormitorio2.electrodomesticos.push(new Iluminacion(dormitorio2.electrodomesticos.length,"mesilla"));
	dormitorio2.electrodomesticos.push(new Termostato(dormitorio2.electrodomesticos.length));
	dormitorio2.electrodomesticos.push(new Ventana(dormitorio2.electrodomesticos.length,"ventana"));
	dormitorio2.electrodomesticos.push(new Persiana(dormitorio2.electrodomesticos.length,"persiana"));

	habitaciones.push(banio2);
	banio2.electrodomesticos.push(puertas[6]);
	banio2.electrodomesticos.push(new Iluminacion(banio2.electrodomesticos.length,"general"));
	banio2.electrodomesticos.push(new Termostato(banio2.electrodomesticos.length));
	banio2.electrodomesticos.push(new Grifo(banio2.electrodomesticos.length,"lavabo"));
	banio2.electrodomesticos.push(new Grifo(banio2.electrodomesticos.length,"ducha"));

	habitaciones.push(banio1);
	banio1.electrodomesticos.push(puertas[7]);
	banio1.electrodomesticos.push(new Iluminacion(banio1.electrodomesticos.length,"general"));
	banio1.electrodomesticos.push(new Termostato(banio1.electrodomesticos.length));
	banio1.electrodomesticos.push(new Grifo(banio1.electrodomesticos.length,"lavabo"));
	banio1.electrodomesticos.push(new Grifo(banio1.electrodomesticos.length,"ducha"));

	aniadirContacto(new Contacto("Marge",123456789,"imagenes/margeD.png"));
	aniadirContacto(new Contacto("Homer",234567898,"imagenes/homerD.png"));
	aniadirContacto(new Contacto("Lisa",466855684,"imagenes/lisaD.png"));
	aniadirContacto(new Contacto("Bart",444754478,"imagenes/bartD.png"));
	aniadirContacto(new Contacto("Milhouse",236852369,"imagenes/tioc.png"));
	aniadirContacto(new Contacto("Aurelia",236875687));

	aniadirContacto(new Contacto("Laura",236875687));
	aniadirContacto(new Contacto("Paquito",236875687));
	aniadirContacto(new Contacto("Yijun",236875687));
	aniadirContacto(new Contacto("Ubi uwu",236875687,"imagenes/ubi.png"));
	aniadirContacto(new Contacto("Ivinchiwinchi",236875687,"imagenes/ivan.jpeg"));
	aniadirContacto(new Contacto("La paca",236875687));
	aniadirContacto(new Contacto("Coraline",236875687));
	aniadirContacto(new Contacto("Nanito",236875687));
	aniadirContacto(new Contacto("Guillermito",236875687));
	aniadirContacto(new Contacto("Jony",236875687));
	aniadirContacto(new Contacto("Daniel Garcia Garuti",236875687,"imagenes/dani.png"));
	aniadirContacto(new Contacto("Javier Herrero",689970969,"imagenes/javi2.jpg"))

	telefono = new Telefono();
	mostrarMenuTelefono();

	netlis = new Netlis();
	restaurantesFavoritos = new Restaurantes();

	telefonillo = new Telefonillo();
	codigoAcceso = new CodigoAcceso();

	pantallaPeliculas = new Pantalla('Pelicula',document.querySelector('#servicios .netlis .pantalla-pelicula'))
}

document.addEventListener("DOMContentLoaded", inicio);

//FUNCIONES QUE GESTIONAN LOS METODOS DE PAGO
function aniadirMetodoDePago(metodo)
{
	metodosDePago.push(metodo);
}
function eliminarMetodoDePago(numero)
{
	metodosDePago.splice(numero,1);
}

//FUNCIONES QUE GESTIONAN LA LISTA DE CONTACTOS
function aniadirContacto(contacto)
{
	var i=0;
	while(i<agendaContactos.length && agendaContactos[i].nombre < contacto.nombre )
	{
		i++;
	}
	agendaContactos.splice(i,0,contacto);
}

function eliminarContacto(numero)
{
	agendaContactos.splice(numero,1);
}
