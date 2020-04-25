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
		{
			this.temperaturaDeseada=22;
			this.interfaz.querySelector(".boton-apagado").setAttribute('encendido','');
		}
		else
		{
			this.temperaturaDeseada=null;
			this.interfaz.querySelector(".boton-apagado").removeAttribute('encendido');
		}
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
	imprimirProgramas()
	{
		var mensaje = "";
		for(var i=0;i<this.programas.length;i++)
		{
			mensaje += "<div class='programa'>";
			mensaje += '<p class="display-temperatura">'+this.programas[i].temperatura+'ºC</p>';
			mensaje += '<p>'+this.programas[i].fecha+'</p>';
			mensaje += '<div class="toggle"';
			if(this.programas[i].activo)
				mensaje+=' activo ';
			mensaje += 'onclick="this.hasAttribute(\'activo\') ? (this.removeAttribute(\'activo\')) : (this.setAttribute(\'activo\',\'\'));"><div></div></div>';
			mensaje += '</div>';
		}
		this.interfaz.querySelector(".contenedor-programas").innerHTML=mensaje;
	}
	mostrarInterfaz()
	{
		var contenedor = this.interfaz.querySelector(".contenedor-mensaje");
		this.interfaz.querySelector(".boton-apagado").setAttribute("onclick","electrodomesticoActual.switchTermostato();");
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
					mensaje += "<div class='contenedor-botones'><img src='assets/add.svg' onclick='esconderFlechaAtras();programa.interfaz.style.display=\"block\";'/></div>";
					mensaje += "<div class='contenedor-programas'>";
        	mensaje += "</div>";
					contenedor.innerHTML=mensaje;
					this.imprimirProgramas();
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
		this.temperatura = 22;
		this.fecha = "";
		this.horaInicio = null;
		this.horaFin = null;
		this.repeticion = [0,0,0,0,0,0,0];
		this.interfaz = document.querySelector(".nuevo-programa");
		this.vaciarCampos();
	}
	validar()
	{
		var resul = true;
		var suma = 0;
		for(var i=0; i<this.repeticion.length;i++)
		{
			suma+=this.repeticion[i];
		}
		if(this.horaInicio>this.horaFin)
			resul=false;
		if(suma==0 && this.fecha=="")
			resul=false;
		else if (this.fecha!="" && suma!=0)
		{
			this.fecha="";
		}
		return resul;
	}
	vaciarCampos()
	{
		var elementos = document.querySelectorAll(".nuevo-programa input");
		for(var i=0;i<elementos.length;i++)
		{
			elementos[i].value="";
		}
	}
}
