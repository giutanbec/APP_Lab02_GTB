import { Component, OnInit } from '@angular/core';

interface Componente {
  icono: string;
  nombre: string;
  direccion: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente [] = [
    {
      icono: 'person-add-outline',
       nombre: "Registro de Usuario",
       direccion: '/registro-de-usuario'
      },
      {
        icono: 'receipt-outline',
        nombre: "Registro de Egresos",
        direccion: '/registro-de-egresos'
      },
      {
        icono: 'document-text-outline',
         nombre: "Listar Usuarios",
         direccion: '/listar-usuarios'
        },
    {
     icono: 'list-outline',
     nombre: "Listar Egresos",
     direccion: '/listar-egresos'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
