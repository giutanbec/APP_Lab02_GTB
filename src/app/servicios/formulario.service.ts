import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  backend = environment.backend;

  constructor(private http: HttpClient ) { }

  registrarUsuario(datos_formulario){
    return this.http.post(`${this.backend}/usuario/crear-usuario`, datos_formulario);

  }

  registrarEgresos(datos_egreso){
    return this.http.post(`${this.backend}/egreso/crear-egreso`, datos_egreso);
  }

  listarUsuarios(){
    return this.http.get(`${this.backend}/usuario/obtener-usuarios`); 
  }

  listarEgresos(){
    return this.http.get(`${this.backend}/egreso/obtener-egresos`); 
  }

listarEgresosporUsuario(){
  return this.http.get(`${this.backend}/egreso/obtener-egresos-usuario/:id`); 
}
}