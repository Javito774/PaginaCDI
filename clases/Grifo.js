class Grifo
{
	constructor(idAux,nombre)
	{
		super(idAux,nombre,"cerrado","icono");
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