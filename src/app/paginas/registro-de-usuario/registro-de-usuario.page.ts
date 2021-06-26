import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';


import { FormularioService } from '../../servicios/formulario.service'

export class EnviarDatos{
  constructor(
    public nombre,
    public apellido,
    public rut,
    public correo,
    public password
  ){}


}
@Component({
  selector: 'app-registro-de-usuario',
  templateUrl: './registro-de-usuario.page.html',
  styleUrls: ['./registro-de-usuario.page.scss'],
})
export class RegistroDeUsuarioPage implements OnInit {

  datos_formulario;
  constructor(private formularioService: FormularioService ) { 
    this.datos_formulario = new EnviarDatos("Escriba su nombre","Escriba su apellido","**.***.*** - *","Ingresar un correo valido","********")
  }


  ngOnInit() {
  }

  enviarDatos(){
    this.formularioService.registrarUsuario(this.datos_formulario).subscribe(
   
      (response:any)=>{
        if(response.usuario){
          alert("Datos registrados exitosamente");
        }else{
          alert("Datos no registrados")
        }
      },
      error =>{
        alert("Error al registrar")
      }

    )
    console.log("Datos del formulario: ", this.datos_formulario)


  }
}
