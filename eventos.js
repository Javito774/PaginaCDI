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
	var pantalla1 = document.querySelector("#controlesSilla");
	var pantalla2 = document.querySelector("#PantallaSecundaria");
	var menuElem = document.querySelectorAll(".categoria-menu");
	pantallas = [];
	if(menuNum == 0)
	{
		desactivarmapa();
	}
	if(menuNum == numero)
	{
		menuElem[menuNum].style.display="none";
		menuNum = -1;
		pantalla1.style.width="100%";
		pantalla2.style.width="0%";
		if(numero==0)
		{
			document.querySelector("#ventanaEstancia").style.display="none";
		}
	}
	else
	{
		if(menuNum!=-1)
		{
			menuElem[menuNum].style.display="none";
			menuNum = numero;
			menuElem[menuNum].style.display="grid";
			pantallas.push(menuElem[menuNum].getAttribute("id"));
			mostrarCarpeta();
			if(menuNum == 0)
			{
				activarmapa();
			}
		}
		else
		{
			menuNum = numero;
			pantalla1.style.width="50%";
			pantalla2.style.width="50%";
			menuElem[menuNum].style.display="grid";
			pantallas.push(menuElem[menuNum].getAttribute("id"));
			mostrarCarpeta();
			if(menuNum == 0)
			{
				activarmapa();
			}
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
	if(document.querySelector('#teléfono .menu-telefono').style.transform=="none" || document.querySelector('#teléfono .menu-telefono').style.transform=="")
		esconderMenuTelefono();
	if(numeroMarcado.length%4==0)
	{
		numeroMarcado = numeroMarcado.concat(' ');
	}
	numeroMarcado = numeroMarcado.concat(numero);
	document.querySelector(".inputNumero .numTelefono").innerHTML = numeroMarcado;
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
	}
	document.querySelector(".inputNumero .numTelefono").innerHTML = numeroMarcado;
}
function esconderMenuTelefono()
{
	document.querySelector('#teléfono #btn-borrar').style.display="table";
	document.querySelector('#teléfono .menu-telefono').style.transform="translateY(-100%)";
}
function mostrarMenuTelefono()
{
	document.querySelector('#teléfono #btn-borrar').style.display="none";
	document.querySelector('#teléfono .menu-telefono').style.transform="none";
}
mostrarMenuTelefono();

//MANEJAR MOVIMIENTO DE VENTANAS ENTRE DOMOTICA
function mostrarCarpeta()
{
	var pantalla = document.querySelector("#PantallaSecundaria>.indicador-carpeta>h3");
	if(pantallas.length!=0)
	{
		if(pantallas.length==1)
			 document.querySelector("#PantallaSecundaria>.indicador-carpeta>img").style.transform="translateY(100%)";
		else
			document.querySelector("#PantallaSecundaria>.indicador-carpeta>img").style.transform="none";
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
	pantallaActual.interfaz.style.display="none";
	mostrarCarpeta();
}
