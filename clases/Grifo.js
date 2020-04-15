class Grifo extends Electrodomestico
{
	constructor(idAux,nombre)
	{
		super(idAux,nombre,"cerrado","assets/tap.png",true);
		this.temperatura=36;
		this.presion=0;
	}
	setPresion(presion)
	{
		if(presion==0)
			this.estado = "cerrado";
		else
			this.estado = "abierto";
		this.presion=presion;
	}
	setTemperatura(temperatura)
	{
		this.temperatura=temperatura;
	}
}