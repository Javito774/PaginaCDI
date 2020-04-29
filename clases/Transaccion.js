class Transaccion {
  constructor(elemento,precio) {

    if(elemento instanceof Pelicula)
    {
      netlis.biblioteca.aniadirPelicula(elemento);
      netlis.biblioteca.imprimir(false);
      this.mostrarSuccess();
      setTimeout(()=>{
        retrocederVentana();
        retrocederVentana();
        cambiarVentanaPeliculas(0);
      },1500);
    }
    else if(elemento instanceof Serie)
    {
      this.mostrarError();
    }
    else {
      this.mostrarSuccess();
      setTimeout(()=>{
        retrocederVentana();
        vaciarCamposTaxis();
        document.querySelector(".taxis-container .pantalla.mensaje").style.display="flex";
        setTimeout(()=>{document.querySelector(".taxis-container .pantalla.mensaje").style.display="none";},1500);
        mostrarDistancia();
      },1500);
    }
  }
  mostrarSuccess()
  {
    document.querySelector(".pantallaPago .mensaje-tarjeta").innerHTML="La transaccion se ha realizado con exito";
    document.querySelector(".pantallaPago .mensaje-tarjeta").style.opacity=1;
    document.querySelector(".pantallaPago .mensaje-tarjeta").style.color="green";
    setTimeout(()=>{document.querySelector(".pantallaPago .mensaje-tarjeta").style.opacity=0;},1500);
  }
  mostrarError()
  {
    document.querySelector(".pantallaPago .mensaje-tarjeta").innerHTML="La transaccion ha fallado, prube de nuevo más tarde.";
    document.querySelector(".pantallaPago .mensaje-tarjeta").style.opacity=1;
    document.querySelector(".pantallaPago .mensaje-tarjeta").style.color="red";
    setTimeout(()=>{document.querySelector(".pantallaPago .mensaje-tarjeta").style.opacity=0;},1500);
  }

}
