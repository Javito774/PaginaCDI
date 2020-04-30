class Termostato extends Electrodomestico
{
	constructor(idAux)
	{
		super(idAux,"termostato","apagado","assets/calor.png",true)
		this.temperaturaActual = 22;
		this.temperaturaDeseada = null;
		this.programas = [];
		this.interfaz=document.querySelector(".contenedor-termostato");
		programa.activo = false;
		programa.fecha = "2020-05-02";
		programa.temperatura = 20;
		programa.horaInicio = "8:30";
		programa.horaFin = "10:00";
		this.programas.push(programa);
		programa = new Programa();
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
			mensaje += '<div style="text-align: center;width: 8rem;">';
			mensaje += '<p class="hora">'+this.programas[i].horaInicio+' - '+this.programas[i].horaFin+'</p>';
			console.log(this.programas[i].seRepite);
			if(this.programas[i].seRepite)
			{
				mensaje +="<div class='repeticion'>";
				mensaje +="<p ";
				if(this.programas[i].repeticion[0])
					mensaje += "activado";
				mensaje +=">L</p>";
				mensaje +="<p ";
				if(this.programas[i].repeticion[1])
					mensaje += "activado";
				mensaje +=">M</p>";
				mensaje +="<p ";
				if(this.programas[i].repeticion[2])
					mensaje += "activado";
				mensaje +=">X</p>";
				mensaje +="<p ";
				if(this.programas[i].repeticion[3])
					mensaje += "activado";
				mensaje +=">J</p>";
				mensaje +="<p ";
				if(this.programas[i].repeticion[4])
					mensaje += "activado";
				mensaje +=">V</p>";
				mensaje +="<p ";
				if(this.programas[i].repeticion[5])
					mensaje += "activado";
				mensaje +=">S</p>";
				mensaje +="<p ";
				if(this.programas[i].repeticion[6])
					mensaje += "activado";
				mensaje +=">D</p>";
				mensaje +="</div>";
			}
			else
				mensaje += '<input type="date" class="fecha" value="'+this.programas[i].fecha+'" readonly/>';
			mensaje += '</div>';
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
			mensaje+="<p class='mensaje'>El termostato está apagado, pulse el botón de encendido para iniciar el sistema.</p>"
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
					mensaje += "<div class='contenedor-botones'><button onclick='esconderFlechaAtras();programa.interfaz.style.display=\"block\";'>Añadir</button></div>";
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
		this.repeticion = [false,false,false,false,false,false,false];
		this.interfaz = document.querySelector(".nuevo-programa");
		this.seRepite=false;
		this.vaciarCampos();
	}
	añadirRepeticion(numero)
	{
		this.repeticion[numero]=!this.repeticion[numero];
	}
	validar()
	{
		var resul = true;
		var suma = 0;
		for(var i=0; i<this.repeticion.length;i++)
		{
			if(this.repeticion[i])
				suma+=1;
		}
		if(this.horaInicio>this.horaFin)
			resul=false;
		if(suma==0 && this.fecha=="")
			resul=false;
		else if (this.fecha!="" && suma!=0)
		{
			this.fecha="";
			this.seRepite=true;
		}
		else if (this.fecha=="" && suma!=0){
			this.seRepite=true;
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
