var habitaciones = [];
var metodosDePago = [];
var agendaContactos = [];

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

	habitaciones.push(recibidor);
	habitaciones.push(cocina);
	habitaciones.push(pasillo);
	habitaciones.push(salon);
	habitaciones.push(estudio);
	habitaciones.push(dormitorio1);
	habitaciones.push(dormitorio2);
	habitaciones.push(banio1);
	habitaciones.push(banio2);

	cocina.aniadirElectrodomestico(new Combi(cocina.getElectrodomesticos().length));
	cocina.aniadirElectrodomestico(new Vitroceramica(cocina.getElectrodomesticos().length,3,6));
	cocina.aniadirElectrodomestico(new Microondas(cocina.getElectrodomesticos().length));

	salon.aniadirElectrodomestico(new TV(salon.getElectrodomesticos().length));
}

inicio();

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