
import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit{

public students = [] as any;

constructor(private _studentService : StudentService){}

ngOnInit(){
  this._studentService.getStudents()
  .subscribe(data => this.students = data)
}

}
