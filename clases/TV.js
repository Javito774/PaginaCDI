class TV extends Electrodomestico{
	constructor(idAux)
	{
		super(idAux,'TV','apagada',"assets/tv.svg",true);
		this.canal = 0;
		this.canales = ['La 1','La 2','AtresMedia','Cuatro','Telecinco','La sexta'];
		this.vol = 0;
		this.interfaz = document.querySelector(".contenedor-tv");
	}
	cambiarCanal(canal)
	{
		this.canal = canal;
	}
	subirCanal()
	{
		if(this.canal<this.canales.length && this.estado == "encendida"){
			this.canal++;
			this.interfaz.querySelector(".canal").innerHTML="CH "+ this.canal + " | "+this.canales[this.canal-1];}
	}
	bajarCanal()
	{
		if(this.canal>1 && this.estado == "encendida"){
			this.canal--;

			this.interfaz.querySelector(".canal").innerHTML="CH "+ this.canal + " | "+this.canales[this.canal-1];}

	}
	subirVolumen()
	{
		if(this.vol<25 && this.estado == "encendida"){
			this.vol++;
			this.interfaz.querySelector(".volumen>div>div").style.width=this.vol*4+"%";}
	}
	bajarVolumen()
	{
		if(this.vol>0 && this.estado == "encendida")
		{	this.vol--;
			this.interfaz.querySelector(".volumen>div>div").style.width=this.vol*4+"%";}
	}
	switchTV()
	{
		if(this.estado == "encendida"){
			this.estado = "apagada";
			this.interfaz.querySelector(".boton-apagado").removeAttribute('encendido');
			this.canal=0;
			this.interfaz.querySelector(".canal").innerHTML="Apagada";
		}
		else {
			this.estado = "encendida";
			this.interfaz.querySelector(".boton-apagado").setAttribute('encendido','');
			this.canal=1;
			this.interfaz.querySelector(".canal").innerHTML="CH "+ this.canal + " | "+this.canales[this.canal-1];;
		}
	}
}
