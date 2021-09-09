import { Component } from '@angular/core';

@Component({
  selector: 'my-std',
  templateUrl: './student.component.html',
})


export class StudentComponent{
  firstname: string = 'digu';
  lastname : string = 'raval';
  gender : string = 'male';
}
