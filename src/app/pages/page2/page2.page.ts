import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  constructor() {}

  ngOnInit() {}
  public n: any = 10;
  public fname: string = '';
  public lname: string = '';
  public fullName: any = '';
  getName() {
    this.fullName = this.fname + ' ' + this.lname;
  }
}
