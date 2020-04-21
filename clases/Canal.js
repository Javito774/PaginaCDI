class Canal {

  constructor(numero, nombre)
  {
    this.numero = 0;
    this.nombre = "";
  }

  mostrarCanal(numero)
  {
    var contenedor = this.interfaz.querySelector("contenedor-tv .header");
    var mensaje = "";
    var enc = new Boolean(false);
    var numActual = canalesTV[0];

    while (enc == false && i<canalesTV.length)
    {
      if (numActual != numero) i++;
      else enc = true;
    }

    if (enc == false)  mensaje += "<p>Canal no encontrado</p>"
    else
    {
      mensaje += "<p>"+CH: (i+1) | canalesTV[i].nombre+"</p>"
    }

    //RECORDAR PONER EL VOLUMEN, ESE NO CAMBIA ENCUENTRES O NO EL CANAL Q BUSCABAS
  }

}
