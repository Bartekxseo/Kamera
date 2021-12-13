import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './areas/login/login.component';
import { SettingsComponent } from './areas/settings/settings.component';

const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'settings',component:SettingsComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
