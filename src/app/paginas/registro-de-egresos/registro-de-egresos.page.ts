import { Component, OnInit } from '@angular/core';



import { FormularioService } from '../../servicios/formulario.service'

export class EnviarDatos{
   constructor(
     public descripcion,
     public precio,
   ){}


}


@Component({
  selector: 'app-registro-de-egresos',
  templateUrl: './registro-de-egresos.page.html',
  styleUrls: ['./registro-de-egresos.page.scss'],
})
export class RegistroDeEgresosPage implements OnInit {

  datos_formulario;
  constructor(private formularioService: FormularioService ) {
    this.datos_formulario = new EnviarDatos("Añadir descripción","Ingresar precio");
  }

  ngOnInit() {
  }

  enviarDatos(){

   this.formularioService.registrarEgresos(this.datos_formulario).subscribe(
     (response:any)=>{
       if(response.egreso){
         alert("Datos guardados exitosamente");
       }else{
         alert("Datos no registrados")
       }
     },
     error=>{
       alert("Error al registrar")
     }
   )

    console.log("Datos del formulario: ", this.datos_formulario)
  }
 
  
}
