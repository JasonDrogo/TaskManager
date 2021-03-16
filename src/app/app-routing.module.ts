import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { NavbarComponent } from '../app/components/navbar/navbar.component'
import { CreateTaskComponent } from './components/create-task/create-task.component';


const routes: Routes = [
  {path :'',component:NavbarComponent,children:[
    {path :'',component : HomeComponent},
    {path:'create',component:CreateTaskComponent},
    {path:'update',component:CreateTaskComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
