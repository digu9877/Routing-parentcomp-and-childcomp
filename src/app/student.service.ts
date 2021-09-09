import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStd } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

   private _url : string ="/assets/data/students.json";
  constructor(private http : HttpClient) { }

  getStudents(): Observable<IStd[]>{
    return this.http.get<IStd[]>(this._url);
  }
}
