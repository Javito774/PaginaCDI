class Fuego
{
	constructor(potenciasAux)
	{
		this.potencias=potenciasAux;
		this.estado = 0;
		this.temporizador=0;
	}
	iniciarTemporizador()
	{
		this.intervalo = setInterval(()=>{
			if(this.temporizador>0)
			{
				this.temporizador--;
				this.actualizarEstado();
				console.log(this.estado);
			}
			else
				clearInterval(this.intervalo);
		},1000);
	}
	pausarTemporizador()
	{
		clearInterval(this.intervalo);
	}
	stopTemporizador()
	{
		clearInterval(this.intervalo);
		this.temporizador=0;
		this.actualizarEstado();
	}
	subirEstado()
	{
		if(this.estado<this.potencias)
			this.estado++;
	}
	bajarEstado()
	{
		if(this.estado>0)
			this.estado--;
		if(this.estado==0)
			clearInterval(this.intervalo);
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
			this.fuego[i] = new Fuego(potencia);
	}
	actualizarEstado()
	{
		this.estado="| ";
		for(var i=0;i<this.fuego.length;i++)
		{
			if(this.fuego[i].getEstado()==0)
				this.estado += "_ |";
			else
				this.estado +=this.fuego[i].getEstado()+" |";
		}
	}
	seleccionarFuego(numero)
	{
		if(this.fuegoSeleccionado==-1)
		{
			this.interfaz.querySelector(".controles").style.height = "100%";
		}
		else {
			this.interfazfuegos[this.fuegoSeleccionado].removeAttribute('seleccionado');
		}
		if(numero==this.fuegoSeleccionado)
		{
			this.interfaz.querySelector(".controles").style.height = "0%";
			this.fuegoSeleccionado=-1;
		}
		else
		{
			this.interfazfuegos[numero].setAttribute('seleccionado','');
			this.fuegoSeleccionado=numero;
		}
	}
}
