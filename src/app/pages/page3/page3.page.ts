import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {
  constructor() {}

  ngOnInit() {}
  public name: any = '';
  public nm: any = '';

  public ft: any = 1;
  public n: any = '';
  public i: any = 1;
  public lt: any = '';
  show1() {
    this.lt = this.nm.length;
  }
  show() {
    this.n = parseInt(this.name);

    while (this.i <= this.n) {
      this.ft = this.ft * this.i;
      this.i = this.i + 1;
    }
  }
}
