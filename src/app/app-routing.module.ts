import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { AddProductComponent } from './dashboard/add-product/add-product.component';
import { FigmaPageComponent } from './figma-page/figma-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'add-product',
    component: AddProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'figma-page',
    component: FigmaPageComponent,
    canActivate: [AuthGuard],
  },

  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
