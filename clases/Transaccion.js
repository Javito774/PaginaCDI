class Transaccion {
  constructor(elemento) {
    if(elemento instanceof Pelicula)
    {
      netlis.biblioteca.aniadirPelicula(elemento);
      netlis.biblioteca.imprimir(false);
      retrocederVentana();
      retrocederVentana();
      cambiarVentanaPeliculas(0);
      this.mostrarSuccess();
    }
    else if(elemento instanceof Serie)
    {
      this.mostrarError();
    }
    else {
      this.mostrarSuccess();
    }
  }
  mostrarSuccess()
  {
    console.log("Genial");
    //document.querySelector(".pantalla-pago .mensaje p").innerHTML="La transaccion se ha realizado con exito";
  }
  mostrarError()
  {
    document.querySelector(".pantalla-pago .mensaje p").innerHTML="La transaccion ha fallado, prube de nuevo más tarde.";
  }

}
