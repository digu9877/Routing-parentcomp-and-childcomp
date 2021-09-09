import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-student-detail',
  template: `
  <h2> you have seleted id={{studentID}}
    <button (click)="goPrevious()"> <<-previous</button>

  `,
  styles: [
  ]
})
export class StudentDetailComponent implements OnInit {

  studentID='';
  sid!: number;

  constructor(private route : ActivatedRoute,private router :Router) {
    this.route.params.subscribe(data =>{
      this.studentID = data.id;
    })
   }
   goPrevious(){
    this.route.params.subscribe(data =>{
      this.sid = data.id-1;
    })
    this.router.navigate(['/students', this.sid]);
   }




  ngOnInit(): void {

  }

}
