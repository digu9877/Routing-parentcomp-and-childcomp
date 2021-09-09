import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {StudentComponent} from './student/student.component';
import { TestComponent } from './test/test.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { HomeComponent } from './home/home.component';
import { NopagetodisplayComponent } from './nopagetodisplay/nopagetodisplay.component';
import { RouterModule , Routes } from '@angular/router';


const appRoutes: Routes =[
  {path : 'home', component : HomeComponent},
  {path : 'students', component : StudentlistComponent},
 {path : 'students/:id', component: StudentDetailComponent},
  {path : '', redirectTo: '/home',pathMatch :'full' },
  {path : '**', component : NopagetodisplayComponent}
]



@NgModule({
  declarations: [
    AppComponent ,StudentComponent, TestComponent, StudentlistComponent, StudentDetailComponent,HomeComponent,NopagetodisplayComponent
  ],
 imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
