class Restaurantes {
  constructor() {
    this.nombre = "Restaurantes";
    this.interfaz = document.querySelector("#servicios .restaurantes");
    this.restaurantes = new Array(3);
    this.restaurantes[0] = new Contacto("GastroVía 61",123456);
    this.restaurantes[1] = new Contacto("El Tormo",123656);
    this.restaurantes[2] = new Contacto("Abastos 2.0",143456);
    this.imprimirRestaurantes();
  }
  imprimirRestaurantes()
  {
    var mensaje = "";
    for(var i=0;i<this.restaurantes.length;i++)
    {
      mensaje+="<div class='contacto' onclick='mostrarMenu(2);telefono.llamar(\""+this.restaurantes[i].nombre+"\",true);'>";
      mensaje+=this.restaurantes[i].imagen;
      mensaje+="<p class='nombre-contacto'>"+this.restaurantes[i].nombre+"</p>";
      mensaje+="</div>";
    }
    this.interfaz.querySelector(".contenedor-contactos").innerHTML=mensaje;
  }
}
