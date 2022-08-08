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
        path: 'me',
        loadChildren: () => import('./me/me.module').then(m => m.MeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
