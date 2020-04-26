class sistemaEntrada{
	constructor(idAux,p1,p2)
	{
		super(idAux,habitacion1.nombre,"cerrada","assets/puertaCerradaR.png",false);
		this.puertaportal = pl;
		this.puertaentrada = p2;
		this.icono2 = "assets/puertaAbiertaR.png";
	}
	cambiarEstado()
	{
		var icoAux = this.icono2;
		this.icono2 = this.icono;
		this.icono = icoAux;
		if(this.estado == "cerrada")
			this.estado = "abierta";
		else
			this.estado = "cerrada";
	}
  verificaCodigoAcceso(){

    
  }
}
