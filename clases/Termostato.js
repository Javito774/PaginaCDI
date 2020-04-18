class Termostato extends Electrodomestico
{
	constructor(idAux)
	{
		super(idAux,"termostato","apagado","assets/calor.png",true)
		this.temperaturaActual = 22;
		this.temperaturaDeseada = null;
		this.programas = [];
		this.interfaz=document.querySelector(".contenedor-termostato");
	}
	encenderTermostato(temperatura)
	{
		this.temperaturaDeseada = temperatura;
		this.actualizarEstado();
	}
	apagarTermostato()
	{
		this.temperaturaDeseada = null;
		this.actualizarEstado();
	}
	subirTemperatura()
	{
		this.temperaturaDeseada++;
		this.actualizarEstado();
	}
	bajarTemperatura()
	{
		this.temperaturaDeseada--;
		this.actualizarEstado();
	}
	añadirPrograma(programa)
	{
		this.programas.push(programa);
	}
	eliminarPrograma(numero)
	{
		this.programas.splice(numero,1);
	}
	actualizarEstado()
	{
		if(this.temperaturaDeseada==null)
			this.estado = "apagado";
		else
			this.estado = temperaturaActual + "->"+ temperaturaDeseada;
	}
}

class Programa
{
	constructor()
	{
		this.activo = true;
		this.fecha = null;
		this.repeticion = Array(7);
		for(var i = 0;i<this.repeticion.length;i++)
			this.repeticion[i] = Array(3);
	}
	establecerFecha(fecha)
	{
		this.fecha = fecha;
		for(var i = 0;i<this.repeticion.length;i++)
			this.repeticion[i][0] = false;
	}
	establecerRepeticion(repeticion)
	{
		this.repeticion = repeticion;
	}
}