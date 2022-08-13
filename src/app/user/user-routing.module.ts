import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ULayoutComponent } from './u-layout/u-layout.component';
import { UHomeComponent } from './u-home/u-home.component';

const routes: Routes = [
  {
    path: '',
    component: ULayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: UHomeComponent },
      {
        path: 'profil',
        loadChildren: () =>
          import('./profil/profil.module').then(m => m.ProfilModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
