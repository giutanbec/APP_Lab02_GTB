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
  selector: 'app-registro-de-egresos',
  templateUrl: './registro-de-egresos.page.html',
  styleUrls: ['./registro-de-egresos.page.scss'],
})
export class RegistroDeEgresosPage implements OnInit {

  datos_formulario;
  constructor() {
    this.datos_formulario = new EnviarDatos("dato 1","dato 2","dato 3","dato 4","dato 5","dato 6")
  }

  ngOnInit() {
  }
 
  
}
