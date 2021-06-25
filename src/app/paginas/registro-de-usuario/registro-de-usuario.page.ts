import { Component, OnInit } from '@angular/core';

export class EnviarDatos{
  constructor(
    public dato1,
    public dato2,
    public dato3,
    public dato4,
    public dato5,
    public dato6,
  ){}


}
@Component({
  selector: 'app-registro-de-usuario',
  templateUrl: './registro-de-usuario.page.html',
  styleUrls: ['./registro-de-usuario.page.scss'],
})
export class RegistroDeUsuarioPage implements OnInit {

  datos_formulario;
  constructor() { 
    this.datos_formulario = new EnviarDatos("ingrese dato 1","ingrese dato 2","ingrese dato 3","ingrese dato 4","ingrese dato 5","ingrese dato 6")
  }


  ngOnInit() {
  }



}
