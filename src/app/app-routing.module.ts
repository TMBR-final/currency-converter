import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'converter' },
  {path: 'converter', loadChildren: () => import('./modules/converter/converter.module').then(c => c.ConverterModule)},
  {path: 'about', loadChildren: () => import('./modules/about/about.module').then(a => a.AboutModule)},
  {path: '**', redirectTo: 'converter' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
