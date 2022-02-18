import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public n1: number;
  public n2: number;
  public sum: any = 0;
  addition() {
    this.sum = this.n1 + this.n2;
  }
  users = [
    {
      Name: 'Mahir',
      marks: '95',
      course: 'CAP915',
      Regno: '11980565',
    },
    {
      Name: 'Shivam',
      marks: '61',
      course: 'CAP280',
      Regno: '11917271',
    },
    {
      Name: 'ayush',
      marks: '36',
      course: 'CAP392',
      Regno: '11917896',
    },
    {
      Name: 'mehak',
      marks: '47',
      course: 'CAP486',
      Regno: '11912630',
    },
    {
      Name: 'Joy',
      marks: '78',
      course: 'CAP615',
      Regno: '11914523',
    },
  ];
}
