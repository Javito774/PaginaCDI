class Persiana extends Electrodomestico
{
	constructor(idAux,nombre)
	{
		super(idAux,nombre,"bajada","icono");
		this.icono2 = "icono2";
	}
	cambiarEstado()
	{
		var aux = this.icono;
		this.icono = this.icono2;
		this.icono2 = aux;
		if(this.estado = "subida")
			this.estado = "bajada";
		else
			this.estado = "subida";
	}
}