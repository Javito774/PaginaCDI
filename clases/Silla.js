class Silla
{
	constructor()
	{
		this.estado = "encendida";
		this.velocidad = 2.7;
	}
	apagarSilla()
	{
		this.estado = "apagada"
	}
	encenderSilla()
	{
		this.estado = "encendida";
	}
	establecerVelocidad(vel)
	{
		if(vel>0.0 && vel<5.0)
			this.velocidad = vel;
	}
}
