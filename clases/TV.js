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
		if(this.vol<100)
			this.vol++;
	}
	bajarVolumen()
	{
		if(this.vol>0)
			this.vol--;
	}
	encender()
	{
		this.estado = "encendida";
	}
	apagar()
	{
		this.estado = "apagada";
	}
}