class TV extends Electrodomestico{
	constructor(idAux)
	{
		super(idAux,'TV','apagada',"assets/tv.svg",true);
		this.canal = null;
		this.vol = 0;
		this.interfaz = document.querySelector(".contenedor-tv");
	}
	cambiarCanal(canal)
	{
		this.canal = canal;
	}
	subirCanal()
	{
		if(this.canal<60)
			this.canal++;
	}
	bajarCanal()
	{
		if(this.canal>0)
			this.canal--;
	}
	subirVolumen()
	{
		if(this.vol<25)
			this.vol++;
		this.interfaz.querySelector(".volumen>div>div").style.width=this.vol*4+"%";
	}
	bajarVolumen()
	{
		if(this.vol>0)
			this.vol--;
		this.interfaz.querySelector(".volumen>div>div").style.width=this.vol*4+"%";
	}
	switchTV()
	{
		if(this.estado == "encendida"){
			this.estado = "apagada";
			this.interfaz.querySelector(".boton-apagado").removeAttribute('encendido');
		}
		else {
			this.estado = "encendida";
			this.interfaz.querySelector(".boton-apagado").setAttribute('encendido','');
		}
	}
}
