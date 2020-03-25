class Puerta extends Electrodomestico
{
	constructor(idAux,habitacion)
	{
		super(idAux,habitacion,"cerrada","assets/emoji_objects.svg");
		this.icono2 = "assets/iluminacionEN";
	}
	cambiarEstado()
	{
		var icoAux = this.icono2;
		this.icono2 = this.icono;
		this.icono = icoAux;
		if(this.estado == "cerrada")
			this.estado = "encendida";
		else
			this.estado = "cerrada";
	}
}