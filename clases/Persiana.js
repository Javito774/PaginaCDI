class Persiana extends Electrodomestico
{
    constructor(idAux,nombre)
    {
        super(idAux,nombre,"subida","assets/persiana.png",true);
        this.interfaz= document.querySelector(".contenedor-persiana");
        this.estado=0;
    }
    subirPersiana()
    {
        if(this.estado<5)
            this.estado++;
        this.interfaz.querySelector(".abierta>div>div").style.height=this.estado*20+"%";
    }
    bajarPersiana()
    {
        if(this.estado>0)
            this.estado--;
        this.interfaz.querySelector(".abierta>div>div").style.height=this.estado*20+"%";}
}
