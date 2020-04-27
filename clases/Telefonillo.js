class Telefonillo {
  constructor() {
    this.nombre = "Telefonillo";
    this.interfaz = document.querySelector(".contenedor-telefonillo");
  }
}

class CodigoAcceso {
  constructor() {
    this.nombre = "Codigo Acceso";
    this.interfaz = document.querySelector(".contenedor-telefonillo .codigo");
    this.clave = "";
    this.puntitos = this.interfaz.querySelectorAll(".puntitos>div")
  }
  añadirNumero(numero)
  {
    if(this.clave.length<4)
    {
      this.puntitos[this.clave.length].setAttribute('activo','');
      this.clave+=numero;
      if(this.clave.length==4)
      {
        this.interfaz.querySelector("img").setAttribute('src','assets/puertaAbiertaR.png');
        setTimeout(()=>{
          this.clave="";
          this.interfaz.querySelector("img").setAttribute('src','assets/puertaCerradaR.png');
          for(var i=0;i<this.puntitos.length;i++)
            this.puntitos[i].removeAttribute('activo');
        },2000);
      }
    }
  }
}
