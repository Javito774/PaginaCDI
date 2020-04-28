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
    var recientes = new Array(3);
    this.restaurantes[0] = new Contacto("Javi",123456);
    this.restaurantes[1] = new Contacto("Yijun",123656);
    this.restaurantes[2] = new Contacto("Laura",143456);

    var mensaje = "";
    for(var i=0;i<this.recientes.length;i++)
    {
      mensaje+="<div class='pantalla-menu' onclick='mostrarMenu(2);telefono.llamar(\""+this.recientes[i].nombre+"\");'>";
      mensaje+=this.recientes[i].imagen;
      mensaje+="<p class='nombre-contacto'>"+this.recientes[i].nombre+"</p>";
      mensaje+="</div>";
    }
    this.interfaz.querySelector(".contenedor-recientes").innerHTML=mensaje;
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
      mensaje+="<div class='contacto' onclick='telefono.llamar(\""+agendaContactos[i].nombre+"\");'>";
      mensaje+=agendaContactos[i].imagen;
      mensaje+="<p class='nombre-contacto'>"+agendaContactos[i].nombre+"</p>";
      mensaje+="</div>";
    }
    mensaje+="</div></div>";
    contenedor.innerHTML = mensaje;
  }
  llamar(nombre,imagen)
  {
    this.mostrarMenu(0);
    this.interfaz.querySelector("#llamada h2").innerHTML=nombre;
    this.interfaz.querySelector(".menu-telefono").style.transform="translateY(-100%)";
    document.querySelector("#menuPrincipal").style.top="100%";
    esconderFlechaAtras();
    if(imagen!=null)
      this.interfaz.querySelector("#llamada .imagen-contacto").innerHTML=imagen;
    else
      this.interfaz.querySelector("#llamada .imagen-contacto").innerHTML="<p>"+nombre[0]+"</p>";
  }
  colgar()
  {
    document.querySelector("#menuPrincipal").style.top="0%";
    this.interfaz.querySelector(".menu-telefono").style.transform="none";
    this.interfaz.querySelectorAll(".menu-telefono input")[0].checked=true;
    mostrarMenu(menuNum);
    this.mostrarMenu(1);
    mostrarFlechaAtras();
    vaciarNumeroTelefono();
    mostrarMenuTelefono();
  }
}
