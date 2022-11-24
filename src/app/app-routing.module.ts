import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SettingComponent } from './components/setting/setting.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'setting', component: SettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
