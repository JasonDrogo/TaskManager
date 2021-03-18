import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../module/Material.Module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {HomeComponent} from '../app/components/home/home.component'
import {CreateTaskComponent} from '../app/components/create-task/create-task.component'
import {UsersComponent} from '../app/components/users/users.component'
import {NavbarComponent} from '../app/components/navbar/navbar.component'
import { TaskbasedonpriortyComponent } from './components/taskbasedonpriorty/taskbasedonpriorty.component';
import { taskUtil } from 'src/util/task.util';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CreateTaskComponent,
    UsersComponent,
    TaskbasedonpriortyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
    
  ],
  providers: [taskUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
