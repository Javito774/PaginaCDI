class Iluminacion extends Electrodomestico
{
	constructor(idAux,nombre)
	{
		super(idAux,nombre,"apagada","assets/emoji_objects.svg");
		this.icono2 = "assets/iluminacionEN";
	}
	cambiarEstado()
	{
		var icoAux = this.icono2;
		this.icono2 = this.icono;
		this.icono = icoAux;
		if(this.estado == "apagada")
			this.estado = "encendida";
		else
			this.estado = "apagada";
	}
}