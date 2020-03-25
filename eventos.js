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

	if(menuNum!=-1)
	{
			menuElem[menuNum].style.opacity="0";
			menuElem[menuNum].style.zIndex="2";
	}
	if(menuNum == 0)
	{
		desactivarmapa();
	}
	if(menuNum == numero)
	{
		menuNum = -1;
		pantalla1.style.width="100%";
		pantalla2.style.width="0%";
	}

	else
	{
		menuNum = numero;
		pantalla1.style.width="50%";
		pantalla2.style.width="50%";
		menuElem[menuNum].style.opacity="1";
		menuElem[menuNum].style.zIndex="200";
		if(menuNum == 0)
		{
			activarmapa();
		}
	}
}

/*EVENTOS PARA CONTROLAR EL MAPA*/

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
	if(document.querySelector('#telefonia .menu-telefono').style.display=="flex" || document.querySelector('#telefonia .menu-telefono').style.display=="")
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
	document.querySelector('#telefonia #btn-borrar').style.display="table";
	document.querySelector('#telefonia .menu-telefono').style.display="none";
}
function mostrarMenuTelefono()
{
	document.querySelector('#telefonia #btn-borrar').style.display="none";
	document.querySelector('#telefonia .menu-telefono').style.display="flex";
}
mostrarMenuTelefono();