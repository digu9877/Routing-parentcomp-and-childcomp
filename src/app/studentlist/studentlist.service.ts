import { Injectable } from '@angular/core';
import { IStudent } from './studentlist';

@Injectable({
  providedIn: 'root'
})
export class StudentlistService {

  getStudents() : IStudent[]{
    return[
      { id :'stu101', name :'Digu',gender :'Male', dateofBirth :'30/05/1999' },

      { id :'stu102', name :'Poorv',gender :'Male', dateofBirth :'30/05/1999' },

      { id :'stu103', name :'Dhyan',gender :'Male', dateofBirth :'30/05/1999' },
    ];
  }
  constructor() { }
}
