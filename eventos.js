var pantallas = []

//@TODO organizar distintos temporizadores para que no tengan el mismo nombre.

//CONTROL DEL RELOJ
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function actualizarHora(){
	var fecha = new Date();
	var horas = fecha.getHours();
	var minutos = addZero(fecha.getMinutes());
	document.querySelector("#notificaciones .reloj .minutos").innerHTML=minutos;
	document.querySelector("#notificaciones .reloj .horas").innerHTML=horas;
}
actualizarHora();
var intervaloReloj = setInterval(actualizarHora,10000);


//CONTROL DE LOS DISTINTOS MENUS
var menuNum = -1;

function mostrarMenu(numero)
{
	clearTimeout(intervaloAnimacion);
  var numeroAux = pantallas.length;
  for(var i=1;i<numeroAux;i++)
  {
    retrocederVentana();
  }
	var pantalla1 = document.querySelector("#controlesSilla");
	var pantalla2 = document.querySelector("#PantallaSecundaria");
	var menuElem = document.querySelectorAll(".categoria-menu");
  var botones = document.querySelectorAll("#menuPrincipal img");
	if(menuNum == 0)
	{
		desactivarmapa();
	}
	if(menuNum == numero)
	{
		menuElem[menuNum].style.display="none";
    botones[menuNum].removeAttribute('seleccionado');
		menuNum = -1;
		pantalla1.style.width="100%";
		pantalla2.style.width="0%";
	}
	else
	{
    pantallas = [];
		if(menuNum!=-1)
		{
			menuElem[menuNum].style.display="none";
      botones[menuNum].removeAttribute('seleccionado');
			menuNum = numero;
		}
		else
		{
			menuNum = numero;
			pantalla1.style.width="50%";
			pantalla2.style.width="50%";

		}
    botones[menuNum].setAttribute('seleccionado','');
    menuElem[menuNum].style.display="grid";
    pantallas.push(menuElem[menuNum].getAttribute("id"));
    mostrarCarpeta();
    if(menuNum == 0)
    {
      activarmapa();
    }
	}
}

//EVENTOS PARA CONTROLAR EL MAPA
var svg = document.querySelector("#mapa")
var bordes = document.querySelectorAll("#mapa .borde");
var parrafos = document.querySelectorAll("#mapa p");

svg.style.display="none";

for(var i=0;i<bordes.length;i++)
{
	var recorrido=bordes[i].getTotalLength();
	bordes[i].style.strokeDasharray = recorrido;
	bordes[i].style.strokeDashoffset = recorrido;
}

var intervaloAnimacion;
function activarmapa ()
{
	svg.style.display="block";
	intervaloAnimacion=setTimeout(()=>{
		for(var i=0;i<parrafos.length;i++)
		{
			parrafos[i].style.opacity=1;
		}
		for(var i=0;i<bordes.length;i++)
		{
			bordes[i].style.strokeDashoffset = 0;
		}
	},100);
}
function desactivarmapa()
{
	for(var i=0;i<bordes.length;i++)
	{
		bordes[i].style.strokeDashoffset = bordes[i].getTotalLength();
	}
	for(var i=0;i<parrafos.length;i++)
	{
		parrafos[i].style.opacity=0;
	}
	intervaloAnimacion=setTimeout(()=>{
		svg.style.display="none";
	},2100);
}


//Controlador del telefono
var numeroMarcado = "";
function aniadirNumeroATelefono(numero)
{
	if(telefono.interfaz.querySelector('.menu-telefono').style.transform=="none" || telefono.interfaz.querySelector('.menu-telefono').style.transform=="")
  {
		esconderMenuTelefono();
  }
	if(numeroMarcado.length%4==0)
	{
		numeroMarcado = numeroMarcado.concat(' ');
	}
	numeroMarcado = numeroMarcado.concat(numero);
	document.querySelector(".inputNumero .numTelefono").innerHTML = numeroMarcado;
  telefono.interfaz.querySelector('#iconoLlamar').setAttribute('onclick','telefono.llamar("'+numeroMarcado+'");');
}
function quitarNumeroATelefono()
{
	numeroMarcado = numeroMarcado.slice(0,-1);
	if(numeroMarcado.length%4==0)
	{
		numeroMarcado = numeroMarcado.slice(0,-1);
	}
	if(numeroMarcado.length==1)
	{
		numeroMarcado="";
		mostrarMenuTelefono();
    telefono.interfaz.querySelector('#iconoLlamar').removeAttribute('onclick');
	}
	telefono.interfaz.querySelector(".inputNumero .numTelefono").innerHTML = numeroMarcado;
}
function vaciarNumeroTelefono()
{
  numeroMarcado="";
  telefono.interfaz.querySelector(".inputNumero .numTelefono").innerHTML = numeroMarcado;
  telefono.interfaz.querySelector('#iconoLlamar').removeAttribute('onclick');
}
function esconderMenuTelefono()
{
	telefono.interfaz.querySelector('#btn-borrar').style.display="table";
	telefono.interfaz.querySelector('.menu-telefono').style.transform="translateY(-100%)";
}
function mostrarMenuTelefono()
{
	telefono.interfaz.querySelector('.contenedor-botones #btn-borrar').style.display="none";
	telefono.interfaz.querySelector('.menu-telefono').style.transform="none";
}

//MANEJAR MOVIMIENTO DE VENTANAS ENTRE DOMOTICA
function mostrarCarpeta()
{
	var pantalla = document.querySelector("#PantallaSecundaria>.indicador-carpeta>h3");
	if(pantallas.length!=0)
	{
		pantalla.innerHTML=pantallas[0];
		for(var i=1;i<pantallas.length;i++)
		{
			pantalla.innerHTML+=" / ";
			pantalla.innerHTML+=pantallas[i].nombre;
		}
	}
}

function mostrarHabitacion(numeroHabitacion)
{

	var mensaje="";
	var estancia = habitaciones[numeroHabitacion];
	estancia.interfaz.style.display="grid";
	pantallas.push(estancia);
	mostrarCarpeta();
	for(var i=0;i<estancia.electrodomesticos.length;i++)
	{
		if(estancia.electrodomesticos[i] instanceof Puerta)
		{
			if(estancia.electrodomesticos[i].room1.nombre==estancia.nombre)
				estancia.electrodomesticos[i].nombre=estancia.electrodomesticos[i].room2.nombre;
			else
				estancia.electrodomesticos[i].nombre=estancia.electrodomesticos[i].room1.nombre;
		}
		if(estancia.electrodomesticos[i].tieneInterfaz)
		{
			mensaje+='<div onclick="electrodomesticoActual=habitaciones['+numeroHabitacion+'].electrodomesticos['+i+'];';
			mensaje+='pantallas.push(electrodomesticoActual);';
			mensaje+='mostrarCarpeta();';
			mensaje+='electrodomesticoActual.interfaz.style.display=\'grid\';';
			if(estancia.electrodomesticos[i] instanceof Combi)
			{
				mensaje+='electrodomesticoActual.mostrarInterfazNevera();';
			}
      else if(estancia.electrodomesticos[i] instanceof Termostato)
      {
        mensaje+='electrodomesticoActual.mostrarInterfaz();';
      }
			mensaje+='">';
		}
		else
			mensaje+='<div onclick="habitaciones['+numeroHabitacion+'].electrodomesticos['+i+'].cambiarEstado();habitaciones['+numeroHabitacion+'].electrodomesticos['+i+'].imprimir(this);">';

		mensaje+='<img src="'+estancia.electrodomesticos[i].icono+'"/><h4>'+estancia.electrodomesticos[i].nombre+'</h4><p>'+estancia.electrodomesticos[i].estado+'</p></div>';
		estancia.interfaz.innerHTML=mensaje;
	}
}

function retrocederVentana()
{
	if(electrodomesticoActual!=null)
		electrodomesticoActual=null;
  var pantallaActual = pantallas.pop();
  if(pantallas.length==0)
    mostrarMenu(menuNum);
  else
	   pantallaActual.interfaz.style.display="none";
  mostrarCarpeta();
}

function cambiarVentanaPeliculas(numero)
{
  var menus = document.querySelectorAll("#servicios .netlis .sub-menu");
  electrodomesticoActual.style.display="none";
  electrodomesticoActual=menus[numero];
  electrodomesticoActual.style.display="grid";
}
