class Telefono{
  constructor()
  {
    this.interfaz = document.querySelector(".categoria-menu#teléfono");
    this.pantallaActual = null;
    this.mostrarMenu(1);
    this.imprimirContactos();
  }
  mostrarMenu(numero)
  {
    var pants = this.interfaz.querySelectorAll(".pantallas .pantalla-menu");
    if(this.pantallaActual!=null)
    {
      this.pantallaActual.style.display="none";
    }
    this.pantallaActual=pants[numero];
    this.pantallaActual.style.display="grid";
  }
  imprimirContactos()
  {
    var contenedor = this.interfaz.querySelector(".pantallas #contactos");
    var letra = null;
    var mensaje="";
    for(var i=0;i<agendaContactos.length;i++)
    {
      if(agendaContactos[i].nombre[0]!=letra)
      {
        if(i!=0)
        {
          mensaje+="</div></div>";
        }
        letra=agendaContactos[i].nombre[0];
        mensaje+="<div class='contenedor-letra'>";
        mensaje+="<p class='letra'>"+letra+"</p>"
        mensaje+="<div class='contenedor-contactos'>";
      }
      else {
        mensaje+="<hr/>";
      }
      mensaje+="<div class='contacto'>";
      mensaje+=agendaContactos[i].imagen;
      mensaje+="<p class='nombre-contacto'>"+agendaContactos[i].nombre+"</p>";
      mensaje+="</div>"
    }
    mensaje+="</div></div>";
    contenedor.innerHTML = mensaje;
  }
  llamar(opcion,numero)
  {

  }
}
