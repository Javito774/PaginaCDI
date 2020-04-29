class Telefono{
  constructor()
  {
    this.interfaz = document.querySelector(".categoria-menu#teléfono");
    this.pantallaActual = null;
    this.recientes = [];
    this.mostrarMenu(1);
    this.imprimirContactos();
  }
  mostrarMenu(numero)
  {
    var pants = this.interfaz.querySelectorAll(".pantallas .pantalla-menu");
    if(this.pantallaActual!=null)
    {
      this.pantallaActual.style.display="none";
      if(numero==3)
      {
        this.imprimirRecientes();
      }
    }
    this.pantallaActual=pants[numero];
    this.pantallaActual.style.display="grid";
  }

  imprimirRecientes()
  {
    var mensaje = "";
    for(var i=this.recientes.length-1;i>=0;i--)
    {
      mensaje+="<div class='contacto' onclick='telefono.recientes.push(telefono.recientes["+i+"]);telefono.llamar(\""+this.recientes[i].nombre+"\");'>";
      mensaje+=this.recientes[i].imagen;
      mensaje+="<p class='nombre-contacto'>"+this.recientes[i].nombre+"</p>";
      mensaje+="</div>";
    }
    this.recientes.forEach(contacto => {

    });
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
      mensaje+="<div class='contacto' onclick='telefono.recientes.push(agendaContactos["+i+"]);telefono.llamar(\""+agendaContactos[i].nombre+"\");'>";
      mensaje+=agendaContactos[i].imagen;
      mensaje+="<p class='nombre-contacto'>"+agendaContactos[i].nombre+"</p>";
      mensaje+="</div>";
    }
    mensaje+="</div></div>";
    contenedor.innerHTML = mensaje;
  }
  llamar(nombre,esRestaurante)
  {
    this.mostrarMenu(0);
    this.interfaz.querySelector("#llamada h2").innerHTML=nombre;
    this.interfaz.querySelector(".menu-telefono").style.transform="translateY(-100%)";
    document.querySelector("#menuPrincipal").style.top="100%";
    esconderFlechaAtras();
    if(esRestaurante!=null)
      this.interfaz.querySelector("#llamada .boton-colgar").setAttribute('onclick','telefono.colgar(true)');
    else
      this.interfaz.querySelector("#llamada .boton-colgar").setAttribute('onclick','telefono.colgar()');
    this.interfaz.querySelector("#llamada .imagen-contacto").innerHTML="<p>"+nombre[0]+"</p>";
  }
  colgar(esRestaurante)
  {
    document.querySelector("#menuPrincipal").style.top="0%";
    this.interfaz.querySelector(".menu-telefono").style.transform="none";
    this.interfaz.querySelectorAll(".menu-telefono input")[0].checked=true;
    if(esRestaurante)
    {
      mostrarMenu(1);
      restaurantesFavoritos.interfaz.style.display='grid';pantallas.push(restaurantesFavoritos);mostrarCarpeta();
    }
    this.mostrarMenu(1);
    mostrarFlechaAtras();
    vaciarNumeroTelefono();
    mostrarMenuTelefono();
  }
}
