class Estancia
{
	constructor(idAux,nombreAux)
	{
		this.id = idAux;
 		this.nombre = nombreAux;
		this.electrodomesticos = [];
	}
	getNombre()
	{
		return this.nombre;
	}
	getElectrodomesticos()
	{
		return this.electrodomesticos;
	}
	aniadirElectrodomestico(electrodomestico)
	{
		this.electrodomesticos.push(electrodomestico);
	}
}
