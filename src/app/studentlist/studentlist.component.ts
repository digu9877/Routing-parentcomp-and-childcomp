import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IStudent } from './studentlist';
import { StudentlistService } from './studentlist.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
  providers : [ StudentlistService ]
})
export class StudentlistComponent implements OnInit {

   students =[
     {id : '1', name : 'Digu' , gender : 'Male', dateofBirth : '30/04/1999'},
     {id : '2', name : 'Poorv' , gender : 'Male', dateofBirth : '30/04/1999'},
     {id : '3', name : 'Dhyan' , gender : 'Male', dateofBirth : '30/04/1999'},
     {id : '4', name : 'Dev' , gender : 'Male', dateofBirth : '30/04/1999'},
     {id : '5', name : 'Yug' , gender : 'Male', dateofBirth : '30/04/1999'},
   ]

  ngOnInit(): void {
  }
    constructor(private router : Router) {}

    onSelect(student: { id: any; }){
      this.router.navigate(['/students', student.id]);
    }
}


