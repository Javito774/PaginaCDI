class Puerta extends Electrodomestico
{
	constructor(idAux,habitacion1,habitacion2)
	{
		super(idAux,habitacion1.nombre,"cerrada","assets/puertaCerradaR.png",false);
		this.room1 = habitacion1;
		this.room2 = habitacion2; 
		this.icono2 = "assets/puertaAbiertaR.png";
	}
	cambiarEstado()
	{
		var icoAux = this.icono2;
		this.icono2 = this.icono;
		this.icono = icoAux;
		if(this.estado == "cerrada")
			this.estado = "abierta";
		else
			this.estado = "cerrada";
	}
}