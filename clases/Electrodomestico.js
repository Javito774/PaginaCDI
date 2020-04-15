class Electrodomestico
{
	constructor(idAux,nombreAux,estadoAux,iconoAux,tieneInterfazAux)
	{
		this.id = idAux;
		this.nombre = nombreAux;
		this.estado = estadoAux;
		this.icono = iconoAux;
		this.tieneInterfaz=tieneInterfazAux;
	}
	imprimir(elemento)
	{
		elemento.innerHTML='<img src="'+this.icono+'"/><h4>'+this.nombre+'</h4><p>'+this.estado+'</p>';
	}
}