var pantallas = [];


document.querySelector('.display-velocidad .circulo').addEventListener('mousedown', ()=>{
	document.querySelector('.display-velocidad').addEventListener('mousemove', modificarVelocidad);
});
document.querySelector('.display-velocidad').addEventListener('mouseleave',()=>
{
	document.querySelector('.display-velocidad').removeEventListener('mousemove',modificarVelocidad);
});
document.querySelector('.display-velocidad').addEventListener('mouseup',()=>
{
	document.querySelector('.display-velocidad').removeEventListener('mousemove',modificarVelocidad);
});
function modificarVelocidad(e)
{
	var posY = e.clientY;
	var inicio = document.querySelector(".display-velocidad .barra").offsetTop+document.querySelector(".display-velocidad .barra").offsetParent.offsetTop+document.querySelector(".display-velocidad .barra").offsetParent.offsetParent.offsetTop;
  console.log(posY+","+inicio);
	var final = inicio + document.querySelector('.display-velocidad .barra').offsetHeight;
	if(posY>=inicio && posY<=final)
	{
		var pos = (posY-inicio)*100/(final-inicio);
		document.querySelector('.display-velocidad .circulo').style.top=pos+"%";
    document.querySelector('.contenedor-joystick h1 span').innerHTML = (pos*5/100).toFixed(1);
	}
}
//@TODO organizar distintos temporizadores para que no tengan el mismo nombre.

document.querySelector(".contenedor-joystick>div>div").addEventListener('mousedown',()=>
{
  document.querySelector(".contenedor-joystick").addEventListener('mousemove',rotacionJoystick);
  document.querySelector(".contenedor-joystick").addEventListener('mouseup',()=>{
    document.querySelector(".contenedor-joystick").removeEventListener('mousemove',rotacionJoystick);
    document.querySelector(".contenedor-joystick>div>div").style.transform="translate(0px,0px)";
  });
  document.querySelector(".contenedor-joystick").addEventListener('mouseleave',()=>{
    document.querySelector(".contenedor-joystick").removeEventListener('mousemove',rotacionJoystick);
    document.querySelector(".contenedor-joystick>div>div").style.transform="translate(0px,0px)";
  });
});
function rotacionJoystick(e)
{
  var posY = document.querySelector(".contenedor-joystick").offsetTop+document.querySelector(".contenedor-joystick").offsetParent.offsetTop;
  var posX = document.querySelector(".contenedor-joystick").offsetLeft+document.querySelector(".contenedor-joystick").offsetParent.offsetLeft;
  var inicioY = posY-(document.querySelector(".contenedor-joystick").offsetHeight/2);
  var inicioX = posX-(document.querySelector(".contenedor-joystick").offsetWidth/2);
  var finY = posY+(document.querySelector(".contenedor-joystick").offsetHeight/2);
  var finX = posX+(document.querySelector(".contenedor-joystick").offsetWidth/2);
  var transformacionX = ((e.clientX-posX)*50)/(finX-posX);
  var transformacionY = Math.sqrt(2500-(transformacionX*transformacionX));
  console.log(transformacionX);
  document.querySelector(".contenedor-joystick>div>div").style.transform="translate("+transformacionX+"px,0px)";
  if(e.clientY<posY)
    document.querySelector(".contenedor-joystick>div>div").style.transform="translate("+transformacionX+"px,-"+transformacionY+"px)";
  else
    document.querySelector(".contenedor-joystick>div>div").style.transform="translate("+transformacionX+"px,"+transformacionY+"px)";
}
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
function esconderFlechaAtras()
{
  document.querySelector("#PantallaSecundaria>.indicador-carpeta>img").style.top="100%";
}
function mostrarFlechaAtras()
{
  document.querySelector("#PantallaSecundaria>.indicador-carpeta>img").style.top="0";
}
function mostrarCarpeta()
{
	var pantalla = document.querySelector("#PantallaSecundaria>.indicador-carpeta>h3");
	if(pantallas.length!=0)
	{
		pantalla.innerHTML=pantallas[0];
		for(var i=1;i<pantallas.length;i++)
		{
			pantalla.innerHTML+=" / ";
			pantalla.innerHTML+=pantallas[i].nombre.substring(0,12);
      if(pantallas[i].nombre.length>12)
        pantalla.innerHTML+= " ...";
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
      else if(estancia.electrodomesticos[i] instanceof Grifo ||
              estancia.electrodomesticos[i] instanceof Persiana ||
              estancia.electrodomesticos[i] instanceof Termostato ||
              estancia.electrodomesticos[i] instanceof Vitroceramica)
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
	if(electrodomesticoActual!=null && electrodomesticoActual.nombre!="Netlis")
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
	var label = document.querySelectorAll("#servicios .netlis .menu-peliculas input");
  menus[netlisPagina].style.display="none";
  netlisPagina=numero;
  menus[netlisPagina].style.display="grid";
	label[netlisPagina].checked=true;
}

/** Funciones Taxis */
function pedirParaInvitado(){
	let div = document.getElementById('invitados-form');
	div.style.display = 'block';
}

function pedirParaMi(){
	let div = document.getElementById('invitados-form');
	div.style.display = 'none';
}

function abrirHistorial(){
	let div_pedir = document.getElementById('taxis-form-container');
	div_pedir.style.display = 'none';
	let div_btn = document.getElementById('taxis-lower-buttons');
	div_btn.style.display = 'none';
	let div_historial = document.getElementById('historial-viajes');
	div_historial.style.display = 'block';
}

function cerrarHistorial(){
	let div_pedir = document.getElementById('taxis-form-container');
	div_pedir.style.display = 'block';
	let div_btn = document.getElementById('taxis-lower-buttons');
	div_btn.style.display = 'flex';
	let div_historial = document.getElementById('historial-viajes');
	div_historial.style.display = 'none';
}

function reservarViaje(){

	let div_historial = document.getElementById('taxis-container');
	div_historial.style.display = 'none';
	let div_btn = document.getElementById('confirmacion-taxi');
	div_btn.style.display = 'block';
}

function aceptarViaje(){
	let div_historial = document.getElementById('taxis-container');
	div_historial.style.display = 'flex';
	let div_btn = document.getElementById('confirmacion-taxi');
	div_btn.style.display = 'none';
}

var pantallaPago = new Pantalla('pago',document.querySelector('.pantallaPago'))

function abrirInterfazPago()
{
	if(menuNum!=1)
	{
		mostrarMenu(1);
	}
	pantallas.push(pantallaPago);
	pantallaPago.interfaz.style.display="block";
}

function mostrarDistancia()
{
	var inputs = document.querySelectorAll(".taxis-container .form>div");
	var mostrar = true;
	inputs.forEach(input => {
		if(!input.classList.contains('amigo'))
		{
			if(input.querySelector('input[type="text"]').value=="")
				mostrar=false
		}
	});
	if(mostrar)
	{
		var distancia = (Math.random() * (10.00 - 5.00) + 5.00).toFixed(2);
		document.querySelector(".taxis-container .form .distancia span").innerHTML=distancia;
		document.querySelector(".taxis-container .form .precio span").innerHTML=(distancia*1.3).toFixed(2);
	}
	else
	{
		document.querySelector(".taxis-container .form .distancia span").innerHTML="0.00";
		document.querySelector(".taxis-container .form .precio span").innerHTML="0.00";
	}
}

function comprobarCamposPeticionTaxi()
{
	var formulario = document.querySelector(".taxis-container .form");
	var inputs = formulario.querySelectorAll("input");
	console.log(inputs);
	var mostrar = true;
	if(formulario.hasAttribute("amigo"))
	{
		inputs.forEach(input => {
				if(input.value=="")
					mostrar=false;
		});
	}
	else {
		console.log("Tia eers un circo");
		inputs.forEach(input => {
			console.log(input.offsetParent);
			if((!input.offsetParent.classList.contains("amigo")) && input.value=="")
				mostrar=false;
		});
	}
	if(mostrar)
	{
		abrirInterfazPago();
		mostrarPrecioEnTarjeta(formulario.querySelector(".precio span").innerHTML);
		document.querySelector('.pantallaPago .confirmacion-pago').setAttribute('onclick','new Transaccion("taxis")');
	}
}
function vaciarCamposTaxis()
{
	var formulario = document.querySelector(".taxis-container .form");
	var inputs = formulario.querySelectorAll("input");
	inputs.forEach(input => {
		input.value="";
	});
}
function mostrarPrecioEnTarjeta(precio)
{
	document.querySelector(".pantallaPago .precio").innerHTML=parseFloat(precio).toFixed(2)+"€";
}
