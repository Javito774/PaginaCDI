class Modo
{
	constructor(idAux,iconoAux)
	{
		this.id = idAux;
		this.icono = iconoAux;
	}

}

class Microondas extends Electrodomestico
{
	constructor(idAux)
	{
		super(idAux,'Microondas','apagado',"assets/microwave.png",true);
		this.temporizador=0;
		this.modos = [];
		this.modo = 0;
		this.potencia = [];
		this.interfaz = document.querySelector(".contenedor-microondas");
	}
	iniciarTemporizador()
	{
		this.mostrarbtnPlay();
		this.mostrarbtnPause();
		this.mostrarbtnStop();
		this.mostrarbtnsSubBaj();
		this.intervalo = setInterval(()=>{
			if(this.temporizador>1)
			{
				this.temporizador--;
				this.actualizarEstado();
			}
			else
			{
				clearInterval(this.intervalo);
				this.stopTemporizador();
			}
		},1000);
	}
	mostrarbtnPause()
	{
		if(this.interfaz.querySelector(".acciones .pause").style.display=="block")
			this.interfaz.querySelector(".acciones .pause").style.display="none";
		else
			this.interfaz.querySelector(".acciones .pause").style.display="block";
	}
	mostrarbtnPlay()
	{
		if(this.interfaz.querySelector(".acciones .play").style.display=="block")
			this.interfaz.querySelector(".acciones .play").style.display="none";
		else
			this.interfaz.querySelector(".acciones .play").style.display="block";
	}
	mostrarbtnStop()
	{
		if(this.interfaz.querySelector(".acciones .stop").style.display=="block")
			this.interfaz.querySelector(".acciones .stop").style.display="none";
		else
			this.interfaz.querySelector(".acciones .stop").style.display="block";
	}
	mostrarbtnsSubBaj()
	{
		if(this.interfaz.querySelector(".tiempo .subir").style.display=="none")
		{
			this.interfaz.querySelector(".tiempo .subir").style.display="block";
			this.interfaz.querySelector(".tiempo .bajar").style.display="block";
		}
		else
		{
			this.interfaz.querySelector(".tiempo .subir").style.display="none";
			this.interfaz.querySelector(".tiempo .bajar").style.display="none";
		}
	}
	pausarTemporizador()
	{
		this.mostrarbtnPlay();
		this.mostrarbtnPause();
		this.mostrarbtnStop();
		this.mostrarbtnsSubBaj();
		clearInterval(this.intervalo);
	}
	seleccionarModo(numero)
	{
		this.modo = numero;
	}
	stopTemporizador()
	{
		clearInterval(this.intervalo);
		this.mostrarbtnPause();
		this.mostrarbtnStop();
		this.mostrarbtnsSubBaj();
		this.interfaz.querySelector(".tiempo .bajar").style.display="none";
		this.temporizador=0;
		this.actualizarEstado();
	}
	subirTiempo()
	{
		if(this.temporizador==0)
		{
			this.mostrarbtnPlay();
			this.interfaz.querySelector(".tiempo .bajar").style.display="block";
		}
		this.temporizador+=15;
		this.actualizarEstado();
	}
	bajarTiempo()
	{
		if(this.temporizador>15)
			this.temporizador-=15;
		else
		{
			this.temporizador=0;
			this.mostrarbtnPlay();
			this.interfaz.querySelector(".tiempo .bajar").style.display="none";
		}
		this.actualizarEstado();
	}
	aniadirModo(modo)
	{
		this.modo.push(modo);
	}
	aniadirPotencia(potencia)
	{
		this.potencia.push(potencia);
	}
	actualizarEstado()
	{
		if(this.temporizador != 0)
		{
			var minutos = parseInt(this.temporizador/60);
			var segundos = this.temporizador%60;
			var aux;
			if(minutos<10)
			{
				aux = minutos;
				minutos = 0+''+aux;
			}
			if(segundos<10)
			{
				aux = segundos;
				segundos = 0+''+aux;
			}
			this.estado = minutos + ":"+segundos;
			this.interfaz.querySelector(".display-tiempo .minutos").innerHTML = minutos;
			this.interfaz.querySelector(".display-tiempo .segundos").innerHTML = segundos;
		}
		else
		{
			this.estado = "apagado";
			this.interfaz.querySelector(".display-tiempo .minutos").innerHTML="00";
			this.interfaz.querySelector(".display-tiempo .segundos").innerHTML ="00";
		}
	}
}
