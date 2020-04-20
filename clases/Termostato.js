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
	switchTermostato()
	{
		if(this.temperaturaDeseada == null)
			this.temperaturaDeseada=22;
		else
			this.temperaturaDeseada=null;
		this.actualizarEstado();
		this.mostrarInterfaz();
	}
	subirTemperatura()
	{
		this.temperaturaDeseada++;
		this.actualizarEstado();
		this.interfaz.querySelector(".temperatura p").innerHTML=this.temperaturaDeseada+"ºC";
	}
	bajarTemperatura()
	{
		this.temperaturaDeseada--;
		this.actualizarEstado();
		this.interfaz.querySelector(".temperatura p").innerHTML=this.temperaturaDeseada+"ºC";
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
			this.estado = this.temperaturaActual + "->"+ this.temperaturaDeseada;
	}
	mostrarInterfaz()
	{
		var contenedor = this.interfaz.querySelector(".contenedor-mensaje");
		this.interfaz.querySelector(".boton-apagado img").setAttribute("onclick","electrodomesticoActual.switchTermostato();");
		var mensaje="";
		if(this.temperaturaDeseada==null)
		{
			mensaje+="<p class='mensaje'>La nevera está apagada, pulse el botón de encendido para iniciar el sistema.</p>"
			contenedor.innerHTML=mensaje;
		}
		else
		{
			var inputs = this.interfaz.querySelectorAll(".menu-termostato input[type='radio']");
			setTimeout(()=>{
				if(inputs[0].checked)
				{
					mensaje += "<div class='temperatura'>";
					mensaje+="<img class='bajartemp-btn' src='assets/remove.svg' onclick='electrodomesticoActual.bajarTemperatura()'/><p></p><img class='subirtemp-btn' src='assets/add.svg' onclick='electrodomesticoActual.subirTemperatura();'/>";
					mensaje+="</div>";
					mensaje+="<p>La temperatura de la estancia es de "+this.temperaturaActual+"ºC</p>";
					contenedor.innerHTML=mensaje;
					this.interfaz.querySelector(".temperatura p").innerHTML=this.temperaturaDeseada+"ºC";
				}
				else {
					mensaje += "<h2>PROGRAMAS</h2>";
					contenedor.innerHTML=mensaje;
				}
			},10);
		}

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
