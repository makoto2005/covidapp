import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { What2doPageRoutingModule } from './what2do-routing.module';

import { What2doPage } from './what2do.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    What2doPageRoutingModule
  ],
  declarations: [What2doPage]
})
export class What2doPageModule {}
