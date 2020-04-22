class Combi extends Electrodomestico
{
	constructor(idAux)
	{
		super(idAux,"Combinado","_ºC | _ºC","assets/fridge.png",true);
		this.temNevera = null;
		this.temCongelador = null;
		this.interfaz = document.querySelector(".contenedor-nevera");
	}
	subirTemNevera(temperatura)
	{
		if(this.temNevera<8)
			this.temNevera++;
		this.mostrarTemperaturaNevera();
		this.actualizarEstado();
	}
	bajarTemNevera(temperatura)
	{
		if(this.temNevera>2)
			this.temNevera--;
		this.mostrarTemperaturaNevera();
		this.actualizarEstado();
	}
	subirTemCongelador()
	{
		if(this.temCongelador<-16)
			this.temCongelador++;
		this.mostrarTemperaturaCongelador();
		this.actualizarEstado();
	}
	bajarTemCongelador()
	{
		if(this.temCongelador>-24)
			this.temCongelador--;
		this.mostrarTemperaturaCongelador();
		this.actualizarEstado();
	}
	actualizarEstado()
	{
		if(this.temNevera!=null)
			this.estado = this.temNevera+"ºC | ";
		else
			this.estado = "_ºC | ";
		if(this.temCongelador!=null)
			this.estado += this.temCongelador+"ºC";
		else
			this.estado += "_ºC";
	}
	mostrarTemperaturaNevera()
	{
		if(this.temNevera==2)
			this.interfaz.querySelector(".contenedor-mensaje .temperatura .bajartemp-btn").style.display="none";
		else if(this.temNevera==8)
			this.interfaz.querySelector(".contenedor-mensaje .temperatura .subirtemp-btn").style.display="none";
		else
		{
			this.interfaz.querySelector(".contenedor-mensaje .temperatura .bajartemp-btn").style.display="block";
			this.interfaz.querySelector(".contenedor-mensaje .temperatura .subirtemp-btn").style.display="block";
		}
		this.interfaz.querySelector(".contenedor-mensaje .temperatura p").innerHTML=this.temNevera+"ºC";
	}
	mostrarTemperaturaCongelador()
	{
		if(this.temCongelador==-24)
			this.interfaz.querySelector(".contenedor-mensaje .temperatura .bajartemp-btn").style.display="none";
		else if(this.temCongelador==-16)
			this.interfaz.querySelector(".contenedor-mensaje .temperatura .subirtemp-btn").style.display="none";
		else
		{
			this.interfaz.querySelector(".contenedor-mensaje .temperatura .bajartemp-btn").style.display="block";
			this.interfaz.querySelector(".contenedor-mensaje .temperatura .subirtemp-btn").style.display="block";
		}
		this.interfaz.querySelector(".contenedor-mensaje .temperatura p").innerHTML=this.temCongelador+"ºC";
	}
	switchNevera()
	{
		if(this.temNevera==null)
		{
			this.temNevera = 4;
			this.interfaz.querySelector(".boton-apagado").setAttribute('encendido','');
		}
		else
		{
			this.temNevera = null;
			this.interfaz.querySelector(".boton-apagado").removeAttribute('encendido');
		}
		this.mostrarInterfazNevera();
	}
	switchCongelador()
	{
		if(this.temCongelador==null)
		{
			this.temCongelador = -18;
			this.interfaz.querySelector(".boton-apagado").setAttribute('encendido','');
		}
		else
		{
			this.temCongelador = null;
			this.interfaz.querySelector(".boton-apagado").removeAttribute('encendido');
		}
		this.mostrarInterfazCongelador();
	}
	mostrarInterfazNevera()
	{
		var contenedor = this.interfaz.querySelector(".contenedor-mensaje");
		this.interfaz.querySelector(".boton-apagado").setAttribute("onclick","electrodomesticoActual.switchNevera();");
		var mensaje="";
		if(this.temNevera==null)
		{
			mensaje+="<p class='mensaje'>La nevera está apagada, pulse el botón de encendido para iniciar el sistema.</p>"
			contenedor.innerHTML=mensaje;
			this.interfaz.querySelector(".boton-apagado").removeAttribute('encendido');
		}
		else
		{
			this.interfaz.querySelector(".boton-apagado").setAttribute('encendido','');
			mensaje += "<div class='temperatura'>";
			mensaje+="<img class='bajartemp-btn' src='assets/remove.svg' onclick='electrodomesticoActual.bajarTemNevera()'/><p></p><img class='subirtemp-btn' src='assets/add.svg' onclick='electrodomesticoActual.subirTemNevera();'/>";
			mensaje+="</div>";
			mensaje+="<p>La temperatura recomendada por el fabricante es de 4ºC</p>";
			contenedor.innerHTML=mensaje;
			this.mostrarTemperaturaNevera();
		}

	}
	mostrarInterfazCongelador()
	{
		var contenedor = this.interfaz.querySelector(".contenedor-mensaje");
		this.interfaz.querySelector(".boton-apagado").setAttribute("onclick","electrodomesticoActual.switchCongelador();");
		var mensaje="";
		if(this.temCongelador==null)
		{
			mensaje+="<p class='mensaje'>El congelador está apagado, pulse el botón de encendido para iniciar el sistema.</p>"
			contenedor.innerHTML=mensaje;
			this.interfaz.querySelector(".boton-apagado").removeAttribute('encendido');
		}
		else
		{
			this.interfaz.querySelector(".boton-apagado").setAttribute('encendido','');
			mensaje += "<div class='temperatura'>";
			mensaje+="<img class='bajartemp-btn' src='assets/remove.svg' onclick='electrodomesticoActual.bajarTemCongelador()'/><p></p><img class='subirtemp-btn' src='assets/add.svg' onclick='electrodomesticoActual.subirTemCongelador();'/>";
			mensaje+="</div>";
			mensaje+="<p>La temperatura recomendada por el fabricante es de -18ºC</p>";
			contenedor.innerHTML=mensaje;
			this.mostrarTemperaturaCongelador();
		}
	}
}
