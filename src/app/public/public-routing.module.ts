import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PLayoutComponent } from './p-layout/p-layout.component';
import { PHomeComponent } from './p-home/p-home.component';

const routes: Routes = [
  {
    path: '',
    component: PLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: PHomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
