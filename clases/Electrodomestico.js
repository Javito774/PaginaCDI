class Electrodomestico
{
	constructor(idAux,nombreAux,estadoAux,iconoAux)
	{
		this.id = idAux;
		this.nombre = nombreAux;
		this.estado = estadoAux;
		this.icono = iconoAux;
	}
	getNombre()
	{
		return this.nombre;
	}
	getIcono()
	{
		return this.icono;
	}
	getEstado()
	{
		return this.estado;
	}
}