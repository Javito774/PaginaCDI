class Ventana extends Electrodomestico
{
	constructor(idAux,nombre)
	{
		super(idAux,nombre,"cerrada","assets/ventana.png",false);
		this.icono2 = "assets/ventanaC.png";
	}
	cambiarEstado()
	{
		var aux = this.icono;
		this.icono = this.icono2;
		this.icono2 = aux;
		if(this.estado = "abierta")
			this.estado = "cerrada";
		else
			this.estado = "abierta";
	}
}
