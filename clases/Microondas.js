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
	seleccionarModo(numero)
	{
		this.modo = numero;
	}
	getModo()
	{
		return this.modos[this.modo];
	}
	stopTemporizador()
	{
		clearInterval(this.intervalo);
		this.temporizador=0;
		this.actualizarEstado();
	}
	setTiempo(tiempo)
	{
		this.temporizador = tiempo;
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
		}
		else
			this.estado = "apagado";
	}
}
