class Combi extends Electrodomestico
{
	constructor(idAux)
	{
		super(idAux,"Combinado","_ºC | _ºC","assets/fastfood.svg");
		this.temNevera = null;
		this.temCongelador = null; 
	}
	subirTemNevera(temperatura)
	{
		if(this.temNevera<8)
			this.temNevera++;
		this.actualizarEstado();
	}
	bajarTemNevera(temperatura)
	{
		if(this.temNevera>2)
			this.temNevera--;
		this.actualizarEstado();
	}
	getTemNevera()
	{
		return this.temNevera;
	}
	subirTemCongelador()
	{	
		if(this.temNevera<-16)
			this.temCongelador++;
		this.actualizarEstado();
	}
	bajarTemCongelador()
	{	
		if(this.temNevera>-24)
			this.temCongelador--;
		this.actualizarEstado();
	}
	getTemCongelador()
	{
		return this.temCongelador;
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
	apagarNevera()
	{
		this.temNevera = null;
	}
	apagarCongelador()
	{
		this.temCongelador = null;
	}
	encenderNevera()
	{
		this.temNevera = 4;
	}
	encenderCongelador()
	{
		this.temCongelador = -18;
	}
}