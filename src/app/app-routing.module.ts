import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'screening',
    loadChildren: () => import('./screening/screening.module').then( m => m.ScreeningPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'what2do',
    loadChildren: () => import('./what2do/what2do.module').then( m => m.What2doPageModule)
  },
  {
    path: 'testing',
    loadChildren: () => import('./testing/testing.module').then( m => m.TestingPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
