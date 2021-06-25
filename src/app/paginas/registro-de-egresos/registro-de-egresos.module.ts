import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDeEgresosPageRoutingModule } from './registro-de-egresos-routing.module';

import { ComponentsModule } from '../../components/components.module';

import { RegistroDeEgresosPage } from './registro-de-egresos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RegistroDeEgresosPageRoutingModule
  ],
  declarations: [RegistroDeEgresosPage]
})
export class RegistroDeEgresosPageModule {}
