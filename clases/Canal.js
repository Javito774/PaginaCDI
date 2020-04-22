class Canal {

  constructor(numero, nombre)
  {
    this.numero = numero;
    this.nombre = nombre;
  }

  mostrarCanal(numero)
  {
    var contenedor = document.querySelector("contenedor-tv .header");
    var mensaje = "";
    var enc = false;
    var i=0; 
    while (enc == false && i<canalesTV.length)
    {
      if (i+1 != numero) i++;
      else enc = true;
    }

    if (enc == false)  mensaje += "<p>Canal no encontrado</p>"
    else
    {
      mensaje += "<p>"+CH: (i+1) | canalesTV[i].nombre+"</p>"
    }

    //RECORDAR PONER EL VOLUMEN, ESE NO CAMBIA ENCUENTRES O NO EL CANAL Q BUSCABAS

    marcarCanal(numero)
    {
      this.interfaz.querySelector()

    }


  }

}
