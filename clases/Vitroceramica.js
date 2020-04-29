class Fuego
{
	constructor(potenciasAux,interfaz)
	{
		this.potencias=potenciasAux;
		this.estado = 0;
		this.temporizador=0;
		this.colores = ['#000','#690404','#a40000','#bc0202','#e30404','#ff0000'];
		this.interfaz = interfaz;
		this.isPaused = true;
		this.isSelected=false;
	}
	iniciarTemporizador()
	{
		document.querySelector(".contenedor-vitro .controles .stop").style.display="block";
		document.querySelector(".contenedor-vitro .controles .pause").style.display="block";
		document.querySelector(".contenedor-vitro .controles .play").style.display="none";
		this.isPaused=false;
		this.intervalo = setInterval(()=>{
			if(this.temporizador>0)
			{
				this.temporizador--;
				if(this.isSelected)
					this.mostrarTemporizador();
			}
			else
			{
				clearInterval(this.intervalo);
				this.estado = 0;
				this.mostrarInterfaz();
			}
		},1000);
	}
	pausarTemporizador()
	{
		this.isPaused=true;
		document.querySelector(".contenedor-vitro .controles .stop").style.display="block";
		document.querySelector(".contenedor-vitro .controles .pause").style.display="block";
		document.querySelector(".contenedor-vitro .controles .play").style.display="none";
		clearInterval(this.intervalo);
	}
	stopTemporizador()
	{
		this.isPaused=true;
		clearInterval(this.intervalo);
		this.temporizador=0;
		document.querySelector(".contenedor-vitro .minutos").innerHTML="00";
		document.querySelector(".contenedor-vitro .segundos").innerHTML ="00";
		document.querySelector(".contenedor-vitro .controles .play").style.display="none";
		document.querySelector(".contenedor-vitro .controles .pause").style.display="none";
		document.querySelector(".contenedor-vitro .controles .stop").style.display="none";
	}
	mostrarTemporizador()
	{
		if(this.temporizador != 0)
		{
			if(!this.isPaused)
			{
				document.querySelector(".contenedor-vitro .controles .stop").style.display="block";
				document.querySelector(".contenedor-vitro .controles .pause").style.display="block";
				document.querySelector(".contenedor-vitro .controles .play").style.display="none";
			}
			else
			{
				document.querySelector(".contenedor-vitro .controles .stop").style.display="block";
				document.querySelector(".contenedor-vitro .controles .pause").style.display="none";
				document.querySelector(".contenedor-vitro .controles .play").style.display="block";
			}
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
			document.querySelector(".contenedor-vitro .minutos").innerHTML = minutos;
			document.querySelector(".contenedor-vitro .segundos").innerHTML = segundos;
		}
		else
		{
			document.querySelector(".contenedor-vitro .controles .stop").style.display="none";
			document.querySelector(".contenedor-vitro .controles .pause").style.display="none";
			document.querySelector(".contenedor-vitro .controles .play").style.display="none";
			document.querySelector(".contenedor-vitro .minutos").innerHTML="00";
			document.querySelector(".contenedor-vitro .segundos").innerHTML ="00";
			this.isPaused=true;
		}
	}
	subirTiempo()
	{
		this.temporizador+=15;
		this.mostrarTemporizador();
	}
	bajarTiempo()
	{
		if(this.temporizador>15)
			this.temporizador-=15;
		else
			this.temporizador=0;
		this.mostrarTemporizador();
	}
	subirEstado()
	{
		if(this.estado<this.potencias)
			this.estado++;
		this.mostrarInterfaz();
	}
	bajarEstado()
	{
		if(this.estado>0)
			this.estado--;
		this.mostrarInterfaz();
	}
	mostrarInterfaz()
	{
		if(this.isSelected)
		{
			document.querySelector('.contenedor-vitro .potencia').innerHTML = this.estado;
			this.mostrarTemporizador();
		}
		this.interfaz.style.background="radial-gradient(black, black 28%,white 32%,white 34%, "+this.colores[this.estado]+" 36%, "+this.colores[this.estado]+" 62%, white 67%)";
	}
}

class Vitroceramica extends Electrodomestico
{
	constructor(idAux,nFuegos,potencia)
	{
		super(idAux,"vitroceramica","_ | _ | _","assets/vitrp.png",true);
		this.interfaz= document.querySelector('.contenedor-vitro');
		this.interfazfuegos = this.interfaz.querySelectorAll(".cristal .fuego");
		this.fuegoSeleccionado = -1;
		this.fuego=new Array(nFuegos);
		for(var i=0;i<this.fuego.length;i++)
			this.fuego[i] = new Fuego(potencia,this.interfazfuegos[i]);
	}
	actualizarEstado()
	{
		this.estado="| ";
		for(var i=0;i<this.fuego.length;i++)
		{
			if(this.fuego[i].estado==0)
				this.estado += "_ |";
			else
				this.estado +=this.fuego[i].estado+" |";
		}
	}
	mostrarInterfaz()
	{
		if(this.fuegoSeleccionado!=-1)
			electrodomesticoActual=this.fuego[this.fuegoSeleccionado];
		this.fuego.forEach(fuegu => {
			fuegu.mostrarInterfaz();
		});

	}
	seleccionarFuego(numero)
	{
		if(this.fuegoSeleccionado==-1)
		{
			this.interfaz.querySelector(".controles").style.height = "100%";
		}
		else {
			this.fuego[this.fuegoSeleccionado].isSelected=false;
			this.interfazfuegos[this.fuegoSeleccionado].removeAttribute('seleccionado');
		}
		if(numero==this.fuegoSeleccionado)
		{
			electrodomesticoActual=pantallas[pantallas.length-1];
			this.interfaz.querySelector(".controles").style.height = "0%";
			this.fuegoSeleccionado=-1;
			this.fuego[numero].isSelected=false;
		}
		else
		{
			this.interfazfuegos[numero].setAttribute('seleccionado','');
			this.fuegoSeleccionado=numero;
			this.fuego[numero].isSelected=true;
			this.fuego[numero].mostrarInterfaz();
			electrodomesticoActual=this.fuego[numero];
		}
	}
}
