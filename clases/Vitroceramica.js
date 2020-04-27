class Fuego
{
	constructor(potenciasAux)
	{
		this.potencias=potenciasAux;
		this.estado = 0;
		this.temporizador=0;
	}
	getTemporizador()
	{
		return this.temporizador;
	}
	setTemporizador(temp)
	{
		this.temporizador=temp;
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
	getPotencias()
	{
		return this.potencias;
	}
	getEstado()
	{
		return this.estado;
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
		this.fuego=new Array(nFuegos);
		for(var i=0;i<this.fuego.length;i++)
			this.fuego[i] = new Fuego(potencia);
	}
	getFuego(nFuego)
	{
		return this.fuego[nFuego];
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
}
