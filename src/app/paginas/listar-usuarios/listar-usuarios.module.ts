import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarUsuariosPageRoutingModule } from './listar-usuarios-routing.module';

import { ComponentsModule } from '../../components/components.module';

import { ListarUsuariosPage } from './listar-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListarUsuariosPageRoutingModule
  ],
  declarations: [ListarUsuariosPage]
})
export class ListarUsuariosPageModule {}
