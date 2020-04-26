import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { What2doPage } from './what2do.page';

const routes: Routes = [
  {
    path: '',
    component: What2doPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class What2doPageRoutingModule {}
