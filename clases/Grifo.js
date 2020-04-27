class Grifo extends Electrodomestico
{
	constructor(idAux,nombre)
	{
		super(idAux,nombre,"cerrado","assets/tap.png",true);
		this.temperatura=0;
		this.presion=-1;
		this.interfaz = document.querySelector(".contenedor-grifo");
		this.interfaz.querySelector('.punto').addEventListener('mousedown', ()=>{
			document.querySelector(".contenedor-grifo").addEventListener('mousemove', scroll);
		});
		this.interfaz.addEventListener('mouseup',()=>
		{
			document.querySelector(".contenedor-grifo").removeEventListener('mousemove',scroll);
		});
		function scroll(e)
		{
			var posX = e.clientX;
			var inicio = electrodomesticoActual.interfaz.querySelector('.barra').offsetLeft;
			var final = inicio + electrodomesticoActual.interfaz.querySelector('.barra').offsetWidth;
			if(posX>=inicio && posX<=final)
			{
				var pos = (posX-inicio)*100/(final-inicio);
				electrodomesticoActual.interfaz.querySelector('.punto').style.left=pos+"%";
				electrodomesticoActual.temperatura=pos;
			}
		}
	}
	mostrarInterfaz()
	{
		this.interfaz.querySelector(".punto").style.left=this.temperatura+"%";
		var gotas=this.interfaz.querySelectorAll(".gotas input");
		if(this.presion!=-1)
		{
			gotas[this.presion].checked=true;
			this.interfaz.querySelector('.boton-apagado').setAttribute('encendido','');
		}
		else
		{
			this.interfaz.querySelector('.boton-apagado').removeAttribute('encendido');
			gotas.forEach(gota => {
				gota.checked=false;
			});
		}

	}
	setPresion(presion)
	{
		if(presion==0)
			this.estado = "cerrado";
		else
			this.estado = "abierto";
		this.presion=presion;
	}
	setTemperatura(temperatura)
	{
		this.temperatura=temperatura;
	}
}
